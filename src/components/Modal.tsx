interface ModalProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
	return (
		<>
			<div
				className="fixed bg-black/50 top-0 right-0 bottom-0 left-0"
				onClick={onClose}
			/>
			<div className="bg-white w-[500px] fixed top-10 left-1/2 -translate-x-1/2 rounded p-5">
				<h1 className="text-2xl text-center mb-2">{title}</h1>
				{children}
			</div>
		</>
	);
};
