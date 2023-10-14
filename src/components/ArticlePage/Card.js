import React from 'react';

function Card({ article }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex mb-4">
    <img src={`http://localhost:9000/public/${article.image}`} alt={article.title} className="w-40 h-40 object-cover" />
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-semibold">{article.title}</h2>
      <p className="text-gray-600">{article.author}</p>
      <p className="mt-2">{article.description}</p>
    </div>
  </div>
  );
}

export default Card;
