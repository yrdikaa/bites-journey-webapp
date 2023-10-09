import React from 'react'
import Card from './Card'
import SideContent from './SideContent'

const ArticlePage = () => {
    const articles = [
        {
          id: 1,
          title: 'Cara Membuat Website dengan React',
          author: 'John Doe',
          description: 'Panduan langkah demi langkah untuk membuat website dengan React.',
          image: '/lily-banse--YHSwy6uqvk-unsplash.jpg',
        },
        {
          id: 2,
          title: 'Belajar Pengembangan Web Modern',
          author: 'Jane Smith',
          description: 'Belajar pengembangan web modern dengan teknologi terkini.',
          image: '/lily-banse--YHSwy6uqvk-unsplash.jpg',
        }, {
            id: 3,
            title: 'Belajar Pengembangan Web Modern',
            author: 'Jane Smith',
            description: 'Belajar pengembangan web modern dengan teknologi terkini.',
            image: '/lily-banse--YHSwy6uqvk-unsplash.jpg',
          }, {
            id: 4,
            title: 'Belajar Pengembangan Web Modern',
            author: 'Jane Smith',
            description: 'Belajar pengembangan web modern dengan teknologi terkini.',
            image: '/lily-banse--YHSwy6uqvk-unsplash.jpg',
          },
        // Tambahkan artikel lainnya
      ];

      const mostFrequentAuthor = 'John Doe';
  return (
    <div className="flex m-10 sm:m-10">
      <main className="w-full sm:w-3/4 p-4 ">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </main>
      <aside className="hidden sm:block w-1/4">
        <SideContent articles={articles} mostFrequentAuthor={mostFrequentAuthor} />
      </aside>
    </div>
  )
}

export default ArticlePage