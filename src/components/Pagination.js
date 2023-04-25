import React from 'react'
import ReactPaginate from 'react-paginate'
function Pagination({getPage, pageCount}) {
    function handlePageClick(data) {
        getPage(data.selected++)
    }
    return (
        <ReactPaginate
            breakLabel= '...'
            nextLabel= 'Next >'
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLabel= '< previous'
            renderOnZeroPageCount={null}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            activeClassName='active'
        />
    )
}

export default Pagination