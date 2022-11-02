import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loading } from '../components/Loading';
import { Modal } from '../components/Modal';
import { Products } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export const ProductsPage = () => {
	const { loading, error, products, updateProducts } = useProducts();
	const { modal, open, close: closeModal } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		updateProducts(product);
		closeModal();
	};
	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loading />}
			{error && <ErrorMessage error={error} />}
			{products.map((product) => (
				<Products key={product.id} product={product} />
			))}
			{modal && (
				<Modal title="Create new Product" onClose={closeModal}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}
			<button
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
				onClick={open}
			>
				+
			</button>
		</div>
	);
};
