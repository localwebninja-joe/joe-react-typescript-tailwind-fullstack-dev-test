import React from 'react';
interface MetaDataProps {
	metaData?: { [key: string]: string };
}
	
function MetaData({ metaData }: MetaDataProps): JSX.Element {
	return (
		<div className="bg-gray-100 p-6"> 
			<h2 className="text-xl font-bold mb-4">Stock Indicator Data</h2>
			<ul className="grid grid-cols-2 gap-4">
				{metaData && Object.keys(metaData).map((data, key) => (
					<li key={key}>
						<span className="block font-bold text-gray-800">{data}</span>
						<span className="block font-medium text-gray-600 mb-2"> { metaData[data] }</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MetaData;