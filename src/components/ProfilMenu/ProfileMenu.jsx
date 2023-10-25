// Profile.js

import React from 'react';
import SideMenu from './SideMenu';
import ArticleCard from './ArticleCard';
import {useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const ProfileMenu = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const user = decodedToken.uid_users;

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:9000/api/v1/article/${user}`,
            headers: {
                'Authorization': `${token}`,
                'x-api-key': 'binar-36'
            }
        };
        axios
            .request(config)
            .then((response) => {
                setArticles(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fungsi untuk mengedit artikel
    const handleEdit = () => {
        // Lakukan tindakan edit
    };

    // Fungsi untuk menghapus artikel
    const handleDelete = () => {};
    return (
        <div
            className="justify-center pt-10 mb-0 mt-10 text-black h-full sm:h-fit  border-2 border-black-500 border-solid">

            <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                <div>
                    <SideMenu/>
                </div>

                <div className=" p-4 mb-4 rounded border-solid border-red ">
                    <main className="w-full buttom-0 flex - ">
                        {articles.map((article) => (<ArticleCard key={article.id} articles={article}/>))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
