
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useNavigate from 'react'

function AdminUser() {
  const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res =>{
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })

    },[])

    function handleSubmit (id) {
            const conf = window.confirm("Do you want to Delete");
            if (conf) {
                axios.delete(""+id)
                .then(res => {
                    alert("Record has deleted")
                    navigate('/')
                }).catch(err => console.log(err))
    
            }
        }

    return(
        <div className='container mt-5'>
            <div className='text-end'><Link to="" className='btn btn-primary'>Add +</Link></div>
            <table className='table'>
                <thead>
                    <tr>
                    {columns.map((c, i)=> (
                        <th key={i}>{c}</th>
                    ))}
                    </tr>
                    <th>Action </th>
                </thead>
                <tbody>
                    {
                        records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.fullname}</td>
                                <td>{d.nickname}</td>
                                <td>{d.fullname}</td>
                                <td>{d.dob}</td>
                                <td>{d.gender}</td>
                                <td>{d.BVN}</td>
                                <td>{d.email}</td>
                                <td>{d.address}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-sucesss'>Update</Link>
                                    <button onClick={e => handleSubmit(d.id)} className='btn btn-sm ms-1 btn-danger'>Delete</button>
                                    
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        
    );
    
}

export default AdminUser