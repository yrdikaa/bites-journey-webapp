import React from 'react';

function SideContent({ articles, mostFrequentAuthor }) {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Rekomendasi Artikel</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
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
