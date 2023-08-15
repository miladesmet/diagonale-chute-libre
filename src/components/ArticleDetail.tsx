import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { fetchArticles } from '../utils/getData'

interface Article {
	id: number;
	title: string;
	description: string;
	price: number;
}

export const ArticleDetail = () => {
	const { id } = useParams<{ id: string }>();
	const articleId = parseInt(id, 10);
	const [name, setName] = useState("");

	const [article, setArticle] = useState<Article | null>(null);

	useEffect(() => {
		fetchArticles()
			.then((data) => {
				const foundArticle = data.find((article: Article) => article.id === articleId);
				setArticle(foundArticle || null);
			})
			.catch((error) => console.error(error));
	}, [articleId]);

	if (!article) {
		return <h3 className="pt-5 text-[#496293] text-4xl font-bold text-center">Article non trouvé</h3>;
	}

	return (
		<><Link to='/boutique'>
			Retour à la boutique
		</Link>
			<div className='article-detail'>
				<h3 className="pt-5 text-[#496293] text-4xl font-bold text-center">{article.title}</h3>
				<p className="text-xl">{article.description}</p>
				<p className="text-3xl">{article.price}€</p>
				<p className="">Le prix comprend la TVA (20%){article.price* (20/100)}€</p>


				<div className="w-2/3 m-auto max-w-xs">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Nom du sautant
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username" type="text" placeholder="Nom du sautant"></input>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Poids du sautant
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="poids" type="text" placeholder="Poids du sautant" value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Option vidéo
							</label>
							<div className="flex items-center">
								<input checked id="default-radio-1" type="radio" value="" name="default-radio"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
								<label htmlFor="default-radio-1"
								       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									Aucune vidéo
								</label>
							</div>
							<div className="flex items-center mb-4">
								<input id="default-radio-2" type="radio" value="" name="default-radio"
								       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
								<label htmlFor="default-radio-2"
									       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									Vidéo
								</label>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Ajouter au panier {'>'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};