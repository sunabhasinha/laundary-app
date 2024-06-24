// src/App.js
import React, { useState } from 'react';
import '../src/assets/style.css';
import Tabs from './components/Tabs';
import { LaundryProvider } from './context/LaundaryContext';
import Details from './components/Details';

const App = () => {
	const [selectedTab, setSelectedTab] = useState('men');

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};
	return (
		<div className="laundry-bag">
			<LaundryProvider>
				<Tabs selectedTab={selectedTab} onTabClick={handleTabClick} />
				<Details category={selectedTab} />
			</LaundryProvider>
		</div>
	);
};

export default App;
