import React, {useState, useEffect} from 'react';
import {createArticle} from '../../../utils/Articles';
import axios from 'axios';

const CreateArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleImageChange = (e) => {
        const file = e
            .target
            .files[0];
        setImage(file);
    };
    const handleCategoryChange = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([
                ...selectedCategories,
                categoryId
            ]);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        const token =localStorage.getItem('token')
        // Append the form fields to the FormData object
        formData.append('title', title);
        formData.append('content', content);

        // Extract the IDs from selectedCategories
        const selectedCategoryIds = selectedCategories.map((category) => category.id);

        // Append selected categories as an array
        formData.append('id_categories', selectedCategoryIds);

        // Append the image file
        formData.append('file', image);

        try {
            const response = await axios.post(
                'http://localhost:9000/api/v1/article/create',
                formData,
                {
                    headers: {
                        'Authorization':token,
                        'Content-Type': 'multipart/form-data', // Atur tipe konten untuk FormData
                    }
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const headers = new Headers({'x-api-key': 'binar-36'});

        // Mengambil data kategori dari API saat komponen dimuat
        fetch(`http://localhost:9000/api/v1/category`, {headers})
            .then(
                response => response.json()
            )
            .then(data => {
                console.log(data); // Tampilkan data dalam konsol
                setCategories(data.data); // Atur data ke state Categories
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="max-w-md mx-auto border p-4 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Create Article</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                    <label htmlFor="title" className="absolute -top-2 left-2 bg-lime-100 px-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="border rounded-md w-full p-2"/>
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="content" className="absolute -top-2 left-2 bg-lime-100 px-1">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={handleContentChange}
                        className="border rounded-md w-full p-2"/>
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="image" className="absolute -top-2 left-2  bg-transparent px-1 ">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border rounded-md w-full p-2"/>
                </div>
                {
                    categories && categories.length > 0
                        ? (categories.map(category => (
                            <div key={category.id_category}>
                                <label>
                                    <input type="checkbox" value={category.id_category} checked={selectedCategories.includes(parseInt(category.id_category, 10))} onChange={() => handleCategoryChange(parseInt(category.id_category, 10))}
                                        // Konversi ke integer
                                    />{' '}
                                    {category.title}

                                </label>
                            </div>
                        )))
                        : (<p>Loading categories...</p>)
                }

                <button type="submit" className="bg-stone-500 text-white p-2 rounded-md w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateArticleForm;
