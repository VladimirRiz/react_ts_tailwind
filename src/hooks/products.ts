import { useState, useEffect } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const getProducts = async () => {
		try {
			setError('');
			setLoading(true);
			const res = await axios.get<IProduct[]>(
				'https://fakestoreapi.com/products?limit=5',
			);
			const data = await res.data;
			setProducts(data);
		} catch (err: unknown) {
			const error = err as AxiosError;
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const updateProducts = (product: IProduct) => {
		setProducts((prev) => [...prev, product]);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return { products, loading, error, updateProducts };
};
