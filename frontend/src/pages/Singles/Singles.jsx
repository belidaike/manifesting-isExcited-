import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import Main from '../Home/Main'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Singles = () => {
    const { id } = useParams()
    const { movies, loading } = useContext(Context)
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        if (movies.length > 0) {
            const movie = movies.find((movie) => movie.id === parseInt(id))
            if (movie) {
                findSimilarMovies(movie)
            }
        }
    }, [id, movies])

    const findSimilarMovies = (currentMovie) => {
        const similar = movies.filter(movie =>
            movie.id !== currentMovie.id &&
            movie.genre_ids.some(genre => currentMovie.genre_ids.includes(genre))
        )
        setSimilarMovies(similar)
    }

    if (loading || !movies.length) {
        return <div>Loading...</div>
    }

    const movie = movies.find((movie) => movie.id === parseInt(id))

    if (!movie) {
        return <div>Movie not found.</div>
    }

    return (
        <>
            <Header />

            <div className="s-movie-container">
                <div className='s-movie'>
                    <div className='s-movie-content-1'>
                        <div className="s-movie-content-1-img-container">
                            <img className='s-movie-content-1-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        </div>
                    </div>
                    <div className='s-movie-content-2'>
                        <h1>{movie.original_title}</h1>
                        <div className='s-movie-content-2-details'>
                            <div>
                                <div>{movie.popularity} views</div>
                                <div>rating</div>
                            </div>
                            <div>star</div>
                        </div>
                        <div className="summary">
                            <p>{movie.overview}</p>
                        </div>
                        <div className="buttons">
                            <button>button1</button>
                            <button>button2</button>
                        </div>
                    </div>
                </div>
                <div className="s-movie-umightlike">
                    <h1>Similar movies you might like</h1>
                    <Main similarMovies={similarMovies} />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Singles
