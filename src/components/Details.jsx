import React, { useContext, useState } from 'react';
import Summary from './Summary.jsx';
import ClothType from './ClothType.jsx';
import { LaundryContext } from '../context/LaundaryContext';
import Modal from './Modal.jsx';

const Details = ({ category }) => {
	const { laundryData, handleCountChange } = useContext(LaundryContext);
	const [showModal, setShowModal] = useState(false);

	const clothTypes = laundryData[category].clothTypes;

	const getSubtotal = () => {
		return Object.values(laundryData).reduce((subtotal, category) => {
			return (
				subtotal +
				category.clothTypes.reduce((clothSubtotal, clothType) => {
					return (
						clothSubtotal +
						clothType.washes.reduce((sum, wash) => {
							const washCount = clothType.counts[wash.type];
							return sum + wash.price * washCount;
						}, 0)
					);
				}, 0)
			);
		}, 0);
	};

	const getTotalCount = () => {
		return Object.values(laundryData).reduce((total, category) => {
			return (
				total +
				category.clothTypes.reduce((clothTotal, clothType) => {
					return (
						clothTotal +
						Object.values(clothType.counts).reduce(
							(sum, count) => sum + count,
							0
						)
					);
				}, 0)
			);
		}, 0);
	};

	const handleViewDetails = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};
	return (
		<div className="details">
			<Summary
				subTotal={getSubtotal()}
				totalCount={getTotalCount()}
				onViewDetails={handleViewDetails}
			/>
			<div className="cloth-types">
				{clothTypes.map((clothType) => (
					<ClothType
						key={clothType.name}
						clothType={clothType}
						category={category}
						onCountChange={handleCountChange}
					/>
				))}
			</div>
			<Modal show={showModal} onClose={handleCloseModal} data={laundryData} />
		</div>
	);
};

export default Details;
