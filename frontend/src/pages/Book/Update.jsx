import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const state = useLocation().state

    const [addBook, setAddBook] = useState({
        title: state.title,
        description: state.description,
        price: state.price,
        cover: state.cover || null,
    })

    const [file, setFile] = useState(null);

    const handleChange = e => {
        if (e.target.type === 'file') {
            setFile(e.target.files[0]);
        } else {
            setAddBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }

    const handleClick = async (e, id) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:8000/books/${id}`, addBook)
            console.log(res.data)
            nav('/')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <form className='form' onSubmit={handleClick}>
                <h1>Update the book</h1>
                <input type="text" name='title' onChange={handleChange} defaultValue={state.title} />
                <input type="text" name='description' onChange={handleChange} defaultValue={state.description} />
                <input type="number" name='price' onChange={handleChange} defaultValue={state.price} />
                <input type="file" name='cover' onChange={handleChange} />
                <button className='formButton'>Update</button>
            </form>
            {addBook.cover && <img src={addBook.cover} alt="cover" />}
            <input type='file' htmlFor='file' className='' onChange={(e) => setFile(e.target.files[0])} />
        </>
    )
}

export default Update
