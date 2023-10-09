import React from 'react'

const SearchBar = () => {
    return (

        <div className="flex rounded-full border border-pink-300 bg-white h-8 w-96">
            <input
                type="text"
                className="w-full rounded-l-full py-2 px-3 focus:outline-none"
                placeholder="Search..."/>
            <button
                className="rounded-3xl bg-pink-300 hover:bg-pink-400 focus:outline-none px-4 py-2">
                <i className="fas fa-search"></i>
            </button>
        </div>

    )
}

export default SearchBar