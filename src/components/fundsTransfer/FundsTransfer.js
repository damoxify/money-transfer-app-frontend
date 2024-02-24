import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/FundsTransfer.css';
import { v4 as uuidv4 } from 'uuid';

function FundsTransfer() {
    const [banks, setBanks] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
        banks: '',
        amount: '',
        account_number: '',
        name: '',
        phone_number: '',
        reason: ''
    });
    const [transferErrorMessage, setTransferErrorMessage] = useState('');

    useEffect(() => {
        // Fetch banks when the component mounts
        fetchBanks();
    }, []);

    const fetchBanks = async () => {
        try {
            const response = await axios.get('/banks');
            setBanks(response.data.data); // Assuming the banks data is in response.data.data
        } catch (error) {
            console.error('Error fetching banks:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Step 1: Create a transfer recipient
            const recipientResponse = await createTransferRecipient();
            const recipientCode = recipientResponse.data.data.recipient_code;

            // Step 2: Generate a transfer reference
            const reference = generateTransferReference();

            // Step 3: Initiate a transfer
            const transferData = {
                source: "balance",
                amount: formData.amount,
                reference: reference,
                recipient: recipientCode,
                reason: formData.reason
            };
            const transferResponse = await initiateTransfer(transferData);
            console.log('Transfer response:', transferResponse.data);

            // Step 4: Listen for transfer status
            // You can implement this part using webhooks
        } catch (error) {
            console.error('Error initiating transfer:', error);
            setTransferErrorMessage(error.response.data.error);
        }
    };

    const createTransferRecipient = async () => {
        const response = await axios.post('/transferrecipient', {
            type: "nuban",
            name: formData.name,
            account_number: formData.account_number,
            bank_code: formData.banks,
            currency: "NGN"
        });
        return response;
    };

    const generateTransferReference = () => {
        // Generate a unique reference (UUID)
        // You can use libraries like uuid or implement your own logic
        return uuidv4();
    };

    const initiateTransfer = async (transferData) => {
        const response = await axios.post('/transfer', transferData);
        return response;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <h2 className="my-3 text-center">Money Transfer App (Local Transfer)</h2>
            {transferErrorMessage && (
                <div className="alert alert-info" role="alert">
                    {transferErrorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="px-3">
                <div className="form-group my-2">
                    <label htmlFor="email">Email Address</label>
                    <input name="email" value={formData.email} onChange={handleChange} className="form-control form-input" placeholder="Enter Email Address" type="email" required />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="banks">Select Recipient's Bank *</label>
                    <select name="banks" value={formData.banks} onChange={handleChange} className="form-control" required>
                        <option value="">-- Select Recipient's bank --</option>
                        {banks.map((bank) => (
                            <option key={bank.code} value={bank.code}>{bank.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="amount">Amount *</label>
                    <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter amount in 1000s" className="form-control" type="tel" required />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="account_number">Recipient's Account Number *</label>
                    <input name="account_number" value={formData.account_number} onChange={handleChange} placeholder="Enter Recipient Account Number" className="form-control" type="tel" required />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="name">Recipient's Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" className="form-control" type="text" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="phone_number">Recipient's Phone Number</label>
                    <input name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Enter Phone Number" className="form-control" type="text" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="reason">Reason for Transfer</label>
                    <textarea name="reason" value={formData.reason} onChange={handleChange} className="form-control" placeholder="Enter Reason for Transfer"></textarea>
                </div>
                <div className="form-group my-2">
                    <button className="btn btn-primary" type="submit">Start Transfer</button>
                </div>
            </form>
        </div>
    );
}

export default FundsTransfer;
