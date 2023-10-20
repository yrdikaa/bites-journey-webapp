import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode'; // Anda dapat menggunakan library jwt-decode
import {useAuth} from '../../../utils/AuthContext';
import getProfileData from '../../../utils/Profile';

const ProfileMenu = () => {
    const {logout} = useAuth();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [userData, setUserData] = useState(null);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        window.location.href = '/login'
    };

    useEffect(() => {
        async function fetchData() {
          const data = await getProfileData();
          if (data) {
            setUserData(data);
            console.log(data);
          }
        }
        fetchData();
      }, []);

    return (
        <div className="navbar relative">
            <div className="navbar-profile-toggle" onClick={toggleProfileDropdown}>
                <img
                    src="/lily-banse--YHSwy6uqvk-unsplash.jpg"
                    alt="Profil"
                    width={50}
                    height={50}
                    className="w-8 h-8 rounded-full cursor-pointer"/>
            </div>
            {
                isProfileDropdownOpen && (
                    <div
                        className="profile-dropdown flex flex-col items-center absolute mt-2 bg-stone-200 border border-gray-300 shadow-md p-4 rounded-lg z-10 right-0">
                        {/* Konten dropdown profil Anda di sini */}
                        {
                            userData && (
                                <div className='flex flex-col'>
                                    <p className="text-teal-800 font-semibold">{userData.data.email}</p>
                                </div>
                            )
                        }
                        <Link href="/Profile" className='hover:text-lime-200'>Profil Saya</Link>
                        {/* <Link href="/create-article" className='block sm:hidden hover:text-lime-200'>Create Article</Link> */}
                        <button onClick={handleLogout} className='hover:text-lime-200'>Logout</button>
                        {/* Tempatkan elemen lainnya sesuai kebutuhan */}
                    </div>
                )
            }
        </div>
    );
}

export default ProfileMenu;
