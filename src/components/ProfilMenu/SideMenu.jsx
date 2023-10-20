import Image from 'next/image'
import getProfileData from '../../../utils/Profile'
import React from 'react'
import { useAuth } from '../../../utils/AuthContext'
import { useState,useEffect } from 'react'

const SideMenu = () => {
    const { logout } = useAuth();
    const [userData, setUserData] = useState(null);

    const handleLogout = () => {
      // Panggil fungsi logout
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
    <div className='flex flex-col gap-4'>
    <div
        className="w-full rounded-full border-teal-900 bg-stone-300 p-4 flex flex-row justify-between items-center">
        <div>
            {/* Inisial Nama Pengguna sebagai Foto Profil */}
            <div
                className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center text-white text-xl">
                {userData?.data.username ? userData?.data.username.charAt(0).toUpperCase() : ''}
            </div>
        </div>
        <div className=''>
            <h2 className="text-lg font-semibold">{userData?.data.username}</h2>
        </div>
    </div>
    <button
        onClick={handleLogout}
        className="border  hover:border-transparent focus:border-teal-900 active:border-teal-900">
        Profil
    </button>
    <button
        onClick={handleLogout}
        className="border  hover:border-transparent focus:border-teal-900 active:border-teal-900">
        Edit Profil
    </button>
    <button
        onClick={handleLogout}
        className="border  hover:border-transparent focus:border-teal-900 active:border-teal-900">
        Logout
    </button>
</div>
    )
}

export default SideMenu