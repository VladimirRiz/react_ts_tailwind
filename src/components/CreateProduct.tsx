import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct = {
	id: Number(new Date()),
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 1.3,
		count: 10,
	},
};

interface CreateProductProps {
	onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const submitHandler = async (e: React.FormEvent) => {
		setError('');
		e.preventDefault();
		if (value.trim().length === 0) {
			setError('Please enter valid title!');
			return;
		}
		productData.title = value;
		const res = await axios.post<IProduct>(
			'https://fakestoreapi.com/products',
			productData,
		);

		onCreate(res.data);
	};

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Title"
				value={value}
				onChange={onChangeInput}
			/>
			{error && <ErrorMessage error={error} />}
			<button
				type="submit"
				className="py-2 px-4 border bg-yellow-400 hover:text-white"
			>
				Create
			</button>
		</form>
	);
};
