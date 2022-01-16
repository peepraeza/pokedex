import React from 'react'
import './style.css'
export default function Pagination({gotoPrevPageUrl, gotoNextPageUrl}) {
    return (
        <div className='pagination-btn-container'>
            <button onClick={gotoPrevPageUrl}>Previous</button>
            <button onClick={gotoNextPageUrl}>Next</button>
        </div>
    )
}
