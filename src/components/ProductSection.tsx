
import React from 'react';
import { Link } from 'react-router-dom';
interface ArticleProps {
    article: {
        title: string;
        id: number;
        price: number;
        description: string;
        Options: Array<{ id: number; title: string, type: string, priceUpdate: number }>;
    };
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
      <Link to={'/boutique/' + article.id}>
            <p className='text-2xl'>{article.title}</p>
            <p>{article.description}</p>
            <p className="bg-[#4C69A399] px-5 py-1 text-white">{article.price} €</p>
       </Link>
    );
};
