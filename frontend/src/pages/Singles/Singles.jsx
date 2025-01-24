import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import Main from '../Home/Main'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useDate from '../../hooks/useDate'
import logo from '/logo.png'

const Singles = () => {
    const { id } = useParams()
    const { formatDate } = useDate()

    const { movies, loading, genres } = useContext(Context)
    const [similarMovies, setSimilarMovies] = useState([])
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
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
                                <div className='small'>{movie.popularity} views</div>
                                <small className='small'>{formatDate(movie.release_date)}</small>
                            </div>
                        </div>
                        <div className="genre-list">
                            {movie.genre_ids.map(genreId => {
                                const genre = genres.find(g => g.id === genreId);
                                return genre ? (
                                    <span key={genre.id} className={`genre-${genre.name.toLowerCase()}`}>
                                        {genre.name}
                                    </span>
                                ) : null;
                            })}
                        </div>
                        <div className="summary">
                            <p className='small'>{movie.overview}</p>
                        </div>
                        <div className="buttons">
                            <button>Watch now</button>
                        </div>
                    </div>
                </div>
                <div className="s-movie-umightlike">
                    <h1 style={{ fontSize: "1.5rem", fontFamily: "monospace", margin: "50px" }}>Similar movies you might like</h1>
                    <Main similarMovies={similarMovies} />
                </div>
            </div>
            <img src={logo} alt="" style={{ color: "blue" }} />
            <Footer />
        </>

    )
}

export default Singles
