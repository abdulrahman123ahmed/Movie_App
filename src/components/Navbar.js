import React from "react"
function Navbar({search}) {
    const onSearch = (word) => {
        search(word)
    }
    return (
        <section className="navbar bg-dark">
            <div className="container p-3 justify-content-center">
                <input onChange={(e) => onSearch(e.target.value)} type="text" className='form-control w-75' placeholder='Search' />
            </div>
        </section>
    )
}

export default Navbar