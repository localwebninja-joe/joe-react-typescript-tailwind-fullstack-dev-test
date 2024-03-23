import React from 'react';
import TableData from './tableData';
import TableHeader from './tableHeader';
interface TechnicalAnalysisProps {
	metaData?: { [key: string]: string };
	selectedItem: string;
}
	
function TechnicalAnalysis({ metaData, selectedItem }: TechnicalAnalysisProps): JSX.Element {
	return (
		<table className="w-full table-auto bg-white rounded-lg">
			<thead className="bg-gray-200">
				<tr>
				<TableHeader value={'Date'}/>
				<TableHeader value={ selectedItem }/>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{metaData && Object.keys(metaData).map(date => (
					<tr key={date} className="hover:bg-gray-100">
						<TableData value={ date }/>
						<TableData value={ metaData[date][selectedItem] }/>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default TechnicalAnalysis;