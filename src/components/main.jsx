// components/Article.js
import Link from 'next/link';

const Main = ({ article }) => {
  return (
    <div className="article">
      <h2 className="article-title">
        <Link href={`/article/${article.slug}`} >
          {article.title}
        </Link>
      </h2>
      <p className="article-description">{article.description}</p>
      <div className="article-meta">
        <span className="author">{article.author}</span>
        <span className="date">{article.date}</span>
      </div>
    </div>
  );
};

export default Main;
