import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [books, setBooks] = useState([])

    const handleDelete = async id => {
        try {
            await axios.delete(`http://localhost:8000/books/${id}`)
            // window.location.reload()
            alert('are you sure you want to delete this?')
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        const fecthAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8000/books")
                setBooks(res.data)
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllBooks()
    }, [books])

    return (
        <div className='home'>
            <div className="books">
            </div>
            <button><Link to="/add">Add new book</Link></button>

        </div >
    )
}

export default Home


