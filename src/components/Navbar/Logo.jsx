// Logo.js
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="logo" >
            {/* Isi dengan logo Anda */}
            <Link href={'/home'}>
            <Image src="/photo_2023-10-07_10-07-17.jpg" width="90" height="60" alt="Logo"/>
            </Link>
        </div>
    );
};

export default Logo;
