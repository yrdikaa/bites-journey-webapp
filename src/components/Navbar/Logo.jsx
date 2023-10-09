// Logo.js
import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="logo" >
            {/* Isi dengan logo Anda */}
            <Image src="/photo_2023-10-07_10-07-17.jpg" width="90" height="60" alt="Logo"/>
        </div>
    );
};

export default Logo;
