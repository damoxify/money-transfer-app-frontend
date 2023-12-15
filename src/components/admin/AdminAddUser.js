import React from 'react'
import axios from 'axios'
import React, { useState } from 'react'
import useNavigate from 'react'

function AdminAddUser() {
    const [inputData, setInputData] = useState({name:'', email:''})

    const navigate = useNavigate();
  
  
    function handleSubmit(event) {
      event.preventDefault()
  
      axios.post("", inputData)
      .then(res => {
        alert("Data Added Succesfully");
        navigate('/')
      }).catch(err => console.log(err))
    }
  
    return (
      <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
          <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' className='form-control' 
                  onChange={e =>setInputData({...inputData, name: e.target.value})
                }/>
              </div>
              <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='name' className='form-control' 
                  onChange={e =>setInputData({...inputData, email: e.target.value})
                }/>
              </div><br />
              <button className='btn btn-info'>Submit</button>
            </form>
          </div>
  
      </div>
    )
  }                                                                     
  

export default AdminAddUser