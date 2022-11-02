import { useState } from 'react';

import { IProduct } from '../models';

interface ProductProps {
	product: IProduct;
}

export const Products = ({ product }: ProductProps) => {
	const [details, setDetails] = useState(false);

	const isShowDetails = () => {
		setDetails((prev) => !prev);
	};

	const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';

	const btnClasses = ['py-2 px-4 border', btnBgClassName].join(' ');

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
			<img src={product.image} className="w-1/6" alt="product" />
			<p>{product.title}</p>
			<p className="font-bold">{product.price}</p>
			<button className={btnClasses} onClick={isShowDetails}>
				{!details ? 'Show Details' : 'Hide Details'}
			</button>
			{details && <p>{product.description}</p>}
		</div>
	);
};
