import React, { createContext, useEffect, useState } from "react"

export const Context = createContext()

export const ContextProvider = (props) => {

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('popular')

    useEffect(() => {
        const getMovie = async () => {
            setLoading(true)
            try {
                const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=be633715bd6bf63a046ca971fddbbf17')
                const data = await res.json()
                if (data.error) throw new Error(data.error)
                setMovies(data.results)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }

        const fetchGenres = async () => {
            try {
                const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=be633715bd6bf63a046ca971fddbbf17')
                const data = await res.json()
                if (data.error) throw new Error(data.error)
                setGenres(data.genres)
            } catch (error) {
                console.error("Error fetching genres:", error.message)
            }
        }

        getMovie()
        fetchGenres()
    }, [])



    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredMovies = movies.filter(item =>
        item.original_title.toLowerCase().includes(search.toLowerCase())
    )
    const sortedMovies = {
        popular: [...filteredMovies].sort((a, b) => b.popularity - a.popularity),
        leastPopular: [...filteredMovies].sort((a, b) => a.popularity - b.popularity),
        latest: [...filteredMovies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)),
        oldest: [...filteredMovies].sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
    }
    // console.log(movies)

    const contextValue = {
        search,
        setSearch,
        movies,
        handleChange,
        filteredMovies,
        loading,
        sortedMovies,
        category,
        setCategory,
        genres
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
