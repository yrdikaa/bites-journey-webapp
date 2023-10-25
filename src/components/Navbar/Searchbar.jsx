import React from 'react';
import {useState} from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                placeholder="Search"
                className={`h-8 pl-10 pr-10 text-gray-300 bg-white rounded-full shadow-md outline-1 transition-all ${
                isFocused
                    ? 'w-80'
                    : 'w-0'} focus:w-80 focus:outline-slate-500 duration-300`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}/>
            <a
                href="#"
                className={`absolute inset-y-0 flex items-center pr-3 ${isFocused
                    ? 'right-0'
                    : 'left-0'}`}>
                {
                    isFocused
                        ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        )
                        : (<i className="fas fa-search"></i>)
                }
            </a>
        </div>
    );
};

export default SearchBar;
