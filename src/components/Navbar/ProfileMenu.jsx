import Image from 'next/image';
import React from 'react';

const ProfileMenu = ({ isProfileDropdownOpen, toggleProfileDropdown, handleLogout }) => {
  return (
    <div className="navbar-profile-toggle" onClick={toggleProfileDropdown}>
      <Image src="/path/to/user-profile.jpg" alt="Profil" width={50} height={50} />
    </div>
  );
}

export default ProfileMenu;
