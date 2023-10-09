import Image from 'next/image';
import React,{ useState } from 'react';

const ProfileMenu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="navbar relative">
    <div className="navbar-profile-toggle" onClick={toggleProfileDropdown}>
      <img
        src="/lily-banse--YHSwy6uqvk-unsplash.jpg"
        alt="Profil"
        width={50}
        height={50}
        className="w-8 h-8 rounded-full cursor-pointer"
      />
    </div>
    {isProfileDropdownOpen && (
      <div className="profile-dropdown absolute mt-2 bg-white border border-gray-300 shadow-md p-4 rounded-lg z-10 right-0">
        {/* Konten dropdown profil Anda di sini */}
        <p className="text-gray-800">Nama: John Doe</p>
        <p className="text-gray-800">Email: johndoe@example.com</p>
        {/* Tempatkan elemen lainnya sesuai kebutuhan */}
      </div>
    )}
  </div>
  );
}

export default ProfileMenu;
