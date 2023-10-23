import React, {useEffect, useState} from 'react'
import Logo from './Logo'
import Auth_menu from './Auth_menu'
import ProfileMenu from './ProfileMenu'
import SearchBar from './Searchbar'
import {useAuth} from '../../../utils/AuthContext'
import Menu from './Menu'

const Navbar = () => {
    const userData = useAuth()
    const user = userData.user
    const [token, setToken] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);

    return (
        <div className="rounded-sm fixed top-0 left-0 right-0 z-50">
            <div className="navbar p-4 flex flex-row justify-between items-center text-teal-900 bg-white border-b-4 border-gray-300" >
                <div className="flex">
                    <Logo/>
                    <SearchBar/>
                </div>
                <div className="flex sm:block ">
                    <Menu token={token}/>
                </div>
                <div>
                    {
                        token
                            ? <ProfileMenu/>
                            : <Auth_menu/>
                    }
                </div>
            </div>
        </div>

    )
}
export default Navbar