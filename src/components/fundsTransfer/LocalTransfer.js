import React, { useState } from 'react';
import '../fundsTransfer/styles/localTransfer.css';

function LocalTransfer() {
    const [amount, setAmount] = useState("");
    const [beneficiary, setBeneficiary] = useState("");
    const [bank, setBank] = useState("");
    const [account, setAccount] = useState("");
    const [narration, setNarration] = useState("");



    function handleSubmit(e){
        e.preventDefault();
        const itemData = {
            beneficiary: beneficiary,
            account: parseInt(account),
            bank: bank,
            amount: parseInt(amount),
            narration: narration
        }

        fetch("",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((res) => res.json())
        .then((item))


    }


  return (
    <div>local Transfer
        <form className="transfer" onSubmit={handleSubmit}> 
            <input type="text"
                placeholder="Select Beneficiary"
                beneficiary="Beneficiary"
                value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}
            />

            <input type="text"
                placeholder="Account Number"
                account="Account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
            />

            <input type="text"
                placeholder="Bank Name"
                bank="Bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
            />

            <input type="text"
                placeholder="Amount"
                amount="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <input type="text"
                placeholder="Narration"
                narration="Narratiion"
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
            />

            <input type="send" placeholder="Send"/>
        </form>
    </div>
  )
}

export default LocalTransfer