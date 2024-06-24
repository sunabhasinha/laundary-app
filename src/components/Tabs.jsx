import React, { useContext } from 'react';
import { LaundryContext } from '../context/LaundaryContext';

const Tabs = ({ selectedTab, onTabClick }) => {
	const { laundryData } = useContext(LaundryContext);

	return (
		<div className="tabs">
			{Object.keys(laundryData).map((tab) => (
				<button
					key={tab}
					onClick={() => onTabClick(tab)}
					className={selectedTab === tab ? 'active' : ''}
				>
					{tab.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default Tabs;
