import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

const Detail = () => {
    const {id} = useParams()
    const [odon, setOdon] = useState([])

    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    
    useEffect(() => {
    axios.get(url)
    .then(resp => setOdon([resp.data]));
    }, [])

    return (
    <div>
      <h1>Detail Dentist: {id} </h1>
        <table className='light'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          {odon?.map((odontologo)=>
          <tr key={id}>
            <th>{odontologo.name}</th>
            <th>{odontologo.email}</th>
            <th>{odontologo.phone}</th>
            <th>{odontologo.website}</th>
          </tr>
          )}
        </table>
    </div>
    )
}

export default Detail