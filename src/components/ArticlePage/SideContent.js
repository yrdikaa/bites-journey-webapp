import React from 'react';

function SideContent({ articles, mostFrequentAuthor }) {
  return (
    <div className="bg-blue-300 p-4 rounded-xl text-teal-900">
      <h2 className="text-xl font-semibold mb-4">Rekomendasi Artikel</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-2">
            <a href={`/Article/${article.id_article}`} className="text-stone-900 hover:text-lime-400">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Penulis Artikel Terbanyak</h2>
        <p>{mostFrequentAuthor}</p>
      </div>
    </div>
  );
}

export default SideContent;
