import React from 'react';

function ArticleCard({ article }) {
  // Fungsi untuk mengedit artikel
  const handleEdit = () => {
    // Lakukan tindakan edit
  };

  // Fungsi untuk menghapus artikel
  const handleDelete = () => {
    // Lakukan tindakan hapus
  };

  return (
    <div className="bg-white p-4 mb-4 shadow rounded-2xl w-96 border-solid border-2 border-gray-500">
      <h3 className="text-xl font-semibold">{article.title}</h3>
      <p className="text-gray-600">{article.content}</p>

      <div className="mt-4">
        <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Hapus</button>
      </div>
    </div>
  );
}

export default ArticleCard;
