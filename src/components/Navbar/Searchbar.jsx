import React from 'react'

const SearchBar = () => {
    return (

        <div class="flex rounded-full border border-pink-300 bg-white">
            <input
                type="text"
                class="w-full rounded-l-full py-2 px-3 focus:outline-none"
                placeholder="Search..."
            />
            <button
                class="rounded-r-full bg-pink-300 hover:bg-pink-400 focus:outline-none px-4 py-2"
            >
                <i class="fas fa-search"></i>
            </button>
        </div>



    )
}

export default SearchBar