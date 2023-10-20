import React from 'react';

const SearchBar = () => {
    return (
        <div
            className="flex border border-solid border-stone-500 rounded-xl w-fit bg-white items-center space-x-2">
            <input
                type="text"
                placeholder="Cari..."
                className="border rounded-l-lg py-1 px-3 w-full focus:outline-none"/>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-full py-1 px-4 h-8 w-8 flex items-center justify-center focus:outline-none relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: 2 }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
