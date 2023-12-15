import React from 'react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams} from 'react' 
import useNavigate from 'react'

function AdminUserUpdate() {const {id} = useParams();
const [data, setData] = useState([])
const navigate = useNavigate()


useEffect((id)=>{
    axios.get(""+id)
    .then(res=> setData(res.data)) 
    .catch(err=> console.log(err))
},[])

function handleSubmit (event) {
    event.preventDefault()
    axios.put(""+id,data)
    .then(res => {
        alert("Data Updated Successfully !");
        navigate('/')
    })
}

return (
<div>
    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
      <form onSubmit={handleSubmit}> 
        <div>
            <label htmlFor='name'>ID</label>
            <input type='text' disabled name='name' value={data.id} className='form-control'
            />
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       >
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={data.name} className='form-control'
            onChange={e => setData({...data, name:e.target.value})}/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='name' value={data.name} className='form-control' 
           onChange={e => setData({...data, email:e.target.value})}/>
        </div><br />
        <button className='btn btn-info'>Update</button>
      </form>
    </div>

</div>
</div>
)
}

export default AdminUserUpdate