// Profile.js

import React from 'react';
import SideMenu from './SideMenu';
import ArticleCard from './ArticleCard';

const ProfileMenu = () => {
    const articles = [
        // Isi dengan data artikel yang sesuai
        {
            id: 1,
            title: 'Judul Artikel 1',
            content: 'Isi Artikel 1'
        }, {
            id: 2,
            title: 'Judul Artikel 2',
            content: 'Isi Artikel 2'
        }
    ];
    // Fungsi untuk mengedit artikel
    const handleEdit = () => {
        // Lakukan tindakan edit
    };

    // Fungsi untuk menghapus artikel
    const handleDelete = () => {};
    return (
        <div
            className="justify-center bg-gray-100 text-black h-screen pt-20 border-2 border-black-500 border-solid">

            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                <div
                    className=" md:col-span-1 p-4 border-solid border-2 h-full w-72 border-gray-500 rounded-xl">
                    <SideMenu/>
                </div>

                <div className=" p-4 mb-4 rounded border-solid border-red ">
                    <main className="w-full sm:w-3/4 p-4 ">
                        {articles.map((article) => (<ArticleCard key={article.id} article={article}/>))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
