import React from 'react';
import Image from 'next/image';
function HeroSection() {

    return (
        <section className="relative h-screen">
            <div className="absolute inset-0">
                {/* Gunakan next/image untuk gambar latar belakang */}
                <Image src="/lily-banse--YHSwy6uqvk-unsplash.jpg"
                    // Gantilah dengan path gambar yang sesuai
                    alt="Gambar Kuliner" layout="fill" objectFit="cover"/>
                <div className="bg-black opacity-50 absolute inset-0"></div>
            </div>
            <div
                className="container mx-auto h-full flex justify-end items-center relative z-10">
                <div className="text-white text-right">
                    <h2 className="text-4xl font-semibold">Selamat Datang di Nama Situs Anda</h2>
                    <p className="text-lg mt-4">Deskripsi singkat tentang situs Anda.</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mt-8 rounded-full">Mulai Sekarang</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
