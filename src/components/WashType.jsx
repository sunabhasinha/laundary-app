// src/components/WashType.js
import React from 'react';

const WashType = ({ wash, count, onIncrement, onDecrement }) => {
	return (
		<div className="wash-type">
			<div>
				{wash.type} - <strong>${wash.price}</strong>
			</div>
			<div className="counter">
				<button onClick={onDecrement}>-</button>
				<span>
					<strong>{count}</strong>
				</span>
				<button onClick={onIncrement}>+</button>
			</div>
		</div>
	);
};

export default WashType;
