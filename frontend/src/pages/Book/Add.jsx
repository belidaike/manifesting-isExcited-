import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const nav = useNavigate()
    const [addBook, setAddBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: "",
    })
    const handleChange = e => {
        setAddBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/books", addBook)
            console.log(res.data)
            console.log('successfully added book')
            nav('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" name='title' onChange={handleChange} placeholder='title' />
            <input type="text" name='description' onChange={handleChange} placeholder='description' />
            <input type="number" name='price' onChange={handleChange} placeholder='price' />
            <input type="text" name='cover' onChange={handleChange} placeholder='cover' />
            <button className='formButtom' onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add
