// src/components/ClothType.js
import React from 'react';
import WashType from './WashType';

const ClothType = ({ clothType, category, onCountChange }) => {
	return (
		<div className="cloth-type">
			<h3 className="cloth-type-name">{clothType.name}</h3>
			{clothType.washes.map((wash) => (
				<WashType
					key={wash.type}
					wash={wash}
					count={clothType.counts[wash.type]}
					onIncrement={() =>
						onCountChange(category, clothType.name, wash.type, 1)
					}
					onDecrement={() =>
						onCountChange(category, clothType.name, wash.type, -1)
					}
				/>
			))}
		</div>
	);
};

export default ClothType;
