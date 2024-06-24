// src/components/Modal.js
import React from 'react';
import '../assets/style.css';

const Modal = ({ show, onClose, data }) => {
	if (!show) {
		return null;
	}

	const getCategoryRows = () => {
		return Object.keys(data)
			.map((category) => {
				return data[category].clothTypes.map((clothType) => {
					return Object.keys(clothType.counts).map((washType) => {
						if (clothType.counts[washType] > 0) {
							return (
								<tr key={`${category}-${clothType.name}-${washType}`}>
									<td>{category}</td>
									<td>{clothType.name}</td>
									<td>{washType}</td>
									<td>{clothType.counts[washType]}</td>
									<td>
										{
											clothType.washes.find((wash) => wash.type === washType)
												.price
										}
									</td>
									<td>
										{clothType.washes.find((wash) => wash.type === washType)
											.price * clothType.counts[washType]}
									</td>
								</tr>
							);
						}
						return null;
					});
				});
			})
			.flat();
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>
					x
				</span>
				<h2>Selected Items</h2>
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>Cloth Type</th>
							<th>Wash Type</th>
							<th>Count</th>
							<th>Unit Price</th>
							<th>Total Price</th>
						</tr>
					</thead>
					<tbody>{getCategoryRows()}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Modal;
