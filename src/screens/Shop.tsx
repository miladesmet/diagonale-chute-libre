import React, { useEffect, useState } from 'react'
import { Article } from '../components/ProductSection'
import { fetchData } from '../utils/getData'

export const Shop = () => {

	interface Article {
		id: number;
		title: string;
		description: string;
		price: number;
		Options: Array<{ id: number; title: string, type: string, priceUpdate: number }>;
	}

	const [posts, setData] = useState<Article[]>([]);

	useEffect(() => {
		fetchData("article", "GET", {})
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);
	
	if (posts.length == 0){
		return (
			<main className="bg-[#F2F6FF]">
				<h1 className=" pt-5 text-[#496293] text-4xl font-bold text-center ">Bienvenue dans la boutique</h1>
				<div className='bg-white'>
					<h3 className=" w-1/2 m-auto my-5 p-5 text-center">Il n'y a actuellement aucun article dans la boutique.</h3>
				</div>
			</main>
		);
	} else{

	return (
		<main className="bg-[#F2F6FF]">
			<h1 className=" pt-5 text-[#496293] text-4xl font-bold text-center ">Bienvenue dans la boutique</h1>
			<div className='grid'>
				{
					posts.map(post => (
						<div key = {post.id} className="w-1/2 m-auto my-5 p-5 bg-white text-center">
							<Article
								article={post}/>
						</div>
					))
				}
			</div>
		</main>
	);
}};

