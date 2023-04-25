import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
function MovieDetails() {
    const [movie, setMovie] = useState([])
    const params = useParams()
    const getMoviesDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=3854d574631a2d33014bcd01e8c098a3&language=en`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMoviesDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='details'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <img className='img-fluid h-75' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    </div>
                    <div className='col-8'>
                        <div className='info'>
                            <h3 className='title'>Movie Film: {movie.title} </h3>
                            <h3 className='date'>Release Date: {movie.release_date} </h3>
                            <h3 className='count'>Vote Count: {movie.vote_count} </h3>
                            <h3 className='ave'>Vote Average: {movie.vote_average} </h3>
                            <a href={movie.homepage}>
                                <button className='btn btn-dark btn-lg'>View Movie</button>
                            </a>
                            <Link to='/'>
                                <button className='btn btn-dark btn-lg ms-4'>Go HomePage</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='story'>
                            <h5 className='text-decoration-underline fs-2'>Story : </h5>
                            <h3 className='lh-lg fs-4 fst-italic'>{movie.overview}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails