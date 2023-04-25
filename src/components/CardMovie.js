import React from "react"
import {Link} from "react-router-dom"
function CardMovie({mov}) {
    return (
        <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
            <Link to={`/movie/${mov.id}`}>
                <div className="card border-0">
                    <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="overlay" hidden>
                            <h5 className="card-title">Mov Name : {mov.original_title}</h5>
                            <h5 className="card-title">Release Date : {mov.release_date} </h5>
                            <p className="card-text">Vote Count : {mov.vote_count}</p>
                            <p className="card-text">Vote Count : {mov.vote_average}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardMovie