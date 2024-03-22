import React, { useState, useEffect } from 'react';
import DropdownIndicators from './dropDownIndicators';
import MetaData from './metaData';
import TechnicalAnalysis from './technicalAnalysis';

interface StockData {
  [date: string]: {
    AROONOSC: string;
  }
}

const API_KEY = 'demo'; // RIBXT3XYLI69PC0Q 

function DisplayStockData() {
	const [data, setData] = useState({});
	const [selectedItem, setSelectedItem] = useState("");
	const fetchData = async () => { 
		const response = await fetch(`https://www.alphavantage.co/query?function=${selectedItem}&symbol=USDEUR&interval=weekly&time_period=10&series_type=open&apikey=${API_KEY}`);
		const data = await response.json();
		setData(data);
	};
	useEffect(() => {
		if (selectedItem) {
			fetchData();
		}
	}, [selectedItem]);

	const items = ["SMA", "EMA", "WMA", "DEMA", "TEMA", "TRIMA", "KAMA", "MAMA"];
	const handleSelectItem = (item: string) => {
		setSelectedItem(item);
		fetchData();
		};
	return (
		<div>
			<DropdownIndicators items={items}  onSelectItem={handleSelectItem} />
			<p>You selected: {selectedItem}</p>
			<MetaData metaData={data['Meta Data']}/>
			<TechnicalAnalysis metaData={data[`Technical Analysis: ${selectedItem}`]} selectedItem={selectedItem}/>
		</div>
	);
}
export default DisplayStockData;