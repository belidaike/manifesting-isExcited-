import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import useDate from '../../hooks/useDate'
import { useNavigate } from 'react-router-dom'

const Main = ({ similarMovies }) => {
    const { loading, sortedMovies, category, genres } = useContext(Context)
    const { formatDate } = useDate()
    const nav = useNavigate()

    const displayMovies = similarMovies || sortedMovies[category]
    const displayMoviesCSS = similarMovies ? 'main-container-sim' : 'main-container'


    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <main>

            <div className={displayMoviesCSS}>
                {displayMovies.length > 0 ? (
                    displayMovies.map((movie) => (
                        <div className='main-content' key={movie.id}>
                            <div className="main-img-container">
                                <img className='main-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" onClick={() => nav(`/movie/${movie.id}`)} key={movie.id} />
                            </div>
                            <div className="main-figure">
                                <p>{movie.original_title}</p>
                                <br />
                                <small className='small'>{formatDate(movie.release_date)}</small>
                                <br />
                                <small className='small'>{movie.popularity} views</small>
                                {/* <div className="genre-list">
                                    {movie.genre_ids.map(genreId => {
                                        const genre = genres.find(g => g.id === genreId)
                                        return genre ? <span key={genre.id}> {genre.name}</span> : null
                                    })}
                                </div> */}
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className='Nomovie'>No movies available</h1>
                )}
            </div>
        </main>
    )
}

export default Main
