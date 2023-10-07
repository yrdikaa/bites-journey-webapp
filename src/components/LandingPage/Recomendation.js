import React from 'react';
import ArticleCard from './ArticleCard'; // Pastikan Anda mengganti path sesuai dengan lokasi komponen Artikel Anda

function Recommendation() {
    // Data artikel rekomendasi (bisa diambil dari sumber data seperti API)
    const recommendedArticles = [
        {
            title: 'Judul Artikel 1',
            author: 'Penulis 1',
            date: 'Tanggal 1',
            description: 'Deskripsi artikel 1 yang singkat.'
        }, {
            title: 'Judul Artikel 2',
            author: 'Penulis 2',
            date: 'Tanggal 2',
            description: 'Deskripsi artikel 2 yang singkat.'
        }, {
            title: 'Judul Artikel 3',
            author: 'Penulis 3',
            date: 'Tanggal 3',
            description: 'Deskripsi artikel 3 yang singkat.'
        }
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">Artikel Rekomendasi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        recommendedArticles.map(
                            (article, index) => (<ArticleCard key={index} {...article}/>)
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Recommendation;
