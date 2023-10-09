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
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="navbar p-1 flex flex-row justify-between items-center text-blue-400 bg-white " >
                <div className="flex">
                    <Logo/>
                    <SearchBar/>
                </div>
                <div className="flex ">
                    <Menu/>
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