import React from 'react';

const Summary = ({ subTotal, totalCount, onViewDetails }) => {
	return (
		<>
			<div className="summary">
				<p className="summary-item">
					Subtotal: <strong>${subTotal}</strong>
				</p>
				<p className="summary-item">
					Total count: <strong>{totalCount}</strong>
				</p>
				<p className="summary-item">
					<button className="view-details" onClick={onViewDetails}>
						View Details
					</button>
				</p>
			</div>
		</>
	);
};

export default Summary;
