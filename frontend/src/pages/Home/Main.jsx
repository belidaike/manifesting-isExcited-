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
    const [popular, setPopular] = useState(true)
    const [latest, setLatest] = useState(false)
    const [oldest, setOldest] = useState(false)
    const [leastP, setLeastP] = useState(false)
    const [fourCat, setFourCat] = useState({
        popular: true,
        latest: false,
        oldest: false,
        leastP: false
    })
    if (loading) {
        return <div>Loading...</div>
    }
    // console.log(fourCat.map(cat => cat.popular))
    return (
        <main>
            <button className={fourCat.popular === true ? 'popularCSS' : "popularCSSDefault"} onClick={() => setFourCat({ ...fourCat, popular: true, latest: false, oldest: false, leastP: false })}>popular</button>
            <button className={fourCat.latest === true ? 'latestCSS' : 'latestCSSDefault'} onClick={() => setFourCat({ ...fourCat, latest: true, popular: false, oldest: false, leastP: false })}>latest</button>
            <button className={fourCat.oldest === true ? 'oldestCSS' : 'oldestCSSDefault'} onClick={() => setFourCat({ ...fourCat, oldest: true, latest: false, popular: false, leastP: false })}>oldest</button>
            <button className={fourCat.leastP === true ? 'oldestCSS' : 'oldestCSSDefault'} onClick={() => setFourCat({ ...fourCat, leastP: true, latest: false, oldest: false, popular: false, })}>least Popular</button>
            {/* <button className={popular ? 'popularCSS' : 'popularCSSDefault'} onClick={() => {
                setPopular(true), setLatest(false), setOldest(false), setLeastP(false)
            }}>popular</button>
            <button className={latest ? 'latestCSS' : 'latestCSSDefault'} onClick={() => {
                setLatest(true), setPopular(false), setOldest(false), setLeastP(false)
            }}>latest</button>
            <button className={oldest ? 'oldestCSS' : 'oldestCSSDefault'} onClick={() => {
                setOldest(true), setPopular(false), setLatest(false), setLeastP(false)
            }}>oldest</button>
            <button className={leastP ? 'leastPCSS' : 'leastPCSSDefault'} onClick={() => {
                setLeastP(true), setPopular(false), setLatest(false), setOldest(false)
            }}>leastP</button> */}

            <div className={displayMoviesCSS}>
                {displayMovies.length > 0 ? (
                    displayMovies.map((movie) => (
                        <div className='main-content' >
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
