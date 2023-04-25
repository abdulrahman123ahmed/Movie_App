import React from "react"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import MovieDetails from "./components/MovieDetails"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {
    const baseURL = `https://api.themoviedb.org/3/`
    const [movies, setMovies] = useState([])
    const [pageCount, setPageCount] = useState(0)
    async function getAllMovies() {
        const res = await axios.get(`${baseURL}movie/popular?api_key=3854d574631a2d33014bcd01e8c098a3&language=en`)
        setMovies(res.data.results.sort())
        setPageCount(res.data.total_pages)
    }
    async function getPage(page) {
        const res = await axios.get(`${baseURL}movie/popular?api_key=3854d574631a2d33014bcd01e8c098a3&language=en&page=${page}`)
        setMovies(res.data.results)
        setPageCount(res.data.total_pages)
    }
    useEffect(() => {
        getAllMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    async function search(word) {
        if (word === '') {
            getAllMovies()
        } else {
            await axios.get(`${baseURL}search/movie?api_key=3854d574631a2d33014bcd01e8c098a3&query=${word}&language=en&include_adult=false`).then((response) => {
                setMovies(response.data.results.filter(val => val.title.toUpperCase().includes(word)))
                setPageCount(response.data.total_pages)
            })
        }
    }
    return (
        <div>
            <Navbar search={search} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
