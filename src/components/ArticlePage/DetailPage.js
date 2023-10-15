import {useEffect, useState} from 'react';
import {getArticleByID} from '../../../utils/Articles';

function DetailPage({id}) {
    const [article, setArticle] = useState(
        {title: 'Loading...', image: 'http://localhost:9000/public/default-image.jpg', content: 'Loading...'}
    );

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const data = await getArticleByID(id); // Panggil fungsi async
                const {title, image, content} = data.data[0];
                console.log(data);
                setArticle({title, image: `http://localhost:9000/public/${image}`, content});
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    return (
        <div
            className='rounded-xl flex flex-col items-center border-solid border border-gray-500 max-w-screen-lg mx-auto p-4'>
            <h1 className='text-2xl font-bold'>{article.title}</h1>
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"/>
            <p className="text-center">{article.content}</p>
        </div>

    );
}

export default DetailPage
