import React from 'react'

interface ArticleProps {
    article: {
        title: string;
        id: number;
        price: number;
        description: string;
    }
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <a href={'/boutique/' + article.id}>
            <p className='text-2xl'>{article.title}</p>
            <p>{article.description}</p>
            <p className=" bg-[#4C69A399] px-5 py-1 text-white"> {article.price} € </p>
        </a>
    )};