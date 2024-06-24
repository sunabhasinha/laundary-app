import React, { useState, createContext } from 'react';
import { data } from '../config';

export const LaundryContext = createContext();

export const LaundryProvider = ({ children }) => {
	const [laundryData, setLaundryData] = useState(data);

	const handleCountChange = (category, clothType, washType, increment) => {
		const updatedData = { ...laundryData };
		const selectedClothType = updatedData[category].clothTypes.find(
			(type) => type.name === clothType
		);
		selectedClothType.counts[washType] += increment;
		if (selectedClothType.counts[washType] < 0) {
			selectedClothType.counts[washType] = 0;
		}
		setLaundryData(updatedData);
	};

	return (
		<LaundryContext.Provider value={{ laundryData, handleCountChange }}>
			{children}
		</LaundryContext.Provider>
	);
};
