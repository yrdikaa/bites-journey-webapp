import React from 'react'
import Logo from './Logo'
import Auth_menu from './Auth_menu'
import Profile_menu from './profile_menu'
import SearchBar from './Searchbar'

const Navbar = () => {
    const isSession = false;
    return (
        <div class="navbar p-4 flex flex-row justify-between text-blue-400 bg-white">
            <div class="flex flex-3/4">
                <div class="flex-1/2">
                    <Logo />
                </div>
                <div class="flex-1/2">
                    <SearchBar />
                </div>
            </div>
            <div class="flex-1/4 flex justify-end">
                {isSession ? <Auth_menu /> : <Profile_menu />}
            </div>
        </div>

    )
}

export default Navbar