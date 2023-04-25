import React from "react"
import CardMovie from "./CardMovie"
import Pagination from "./Pagination";
function MovieList({movies, getPage, pageCount}) {
    return (
        <div className="text-center mt-5">
            <div className="container">
                <div className="row">
                    {
                        movies?.map((mov) => {
                            return (<CardMovie key={mov.id} mov={mov} />)
                        })
                    }
                    <Pagination getPage={getPage} pageCount={pageCount} />
                </div>
            </div>
        </div>
    );
};

export default MovieList