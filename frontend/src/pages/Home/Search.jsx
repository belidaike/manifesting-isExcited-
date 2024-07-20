import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const { search, handleChange } = useContext(Context)

    return (
        <div className='search-container'>
            <div>
                <h1>Find Movies, TV shows and more</h1>
            </div>
            <div className='search-container2'>
                <CiSearch size={25} />
                <input className='search' placeholder='Search here' value={search} onChange={handleChange} ></input>
            </div>
        </div>
    )
}

export default Search
