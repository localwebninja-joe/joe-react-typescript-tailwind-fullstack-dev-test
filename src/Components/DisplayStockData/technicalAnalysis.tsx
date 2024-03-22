import React from 'react';
interface TechnicalAnalysisProps {
	metaData?: { [key: string]: string };
	selectedItem: string;
}
	
function TechnicalAnalysis({ metaData, selectedItem }: TechnicalAnalysisProps): JSX.Element {
	return (
		<table className="w-full table-auto bg-white rounded-lg">
			<thead className="bg-gray-200">
				<tr>
					<th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">Date</th>
					<th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">{ selectedItem }</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{metaData && Object.keys(metaData).map(date => (
					<tr key={date} className="hover:bg-gray-100">
						<td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-gray-500">{date}</td>
						<td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-gray-500">{ metaData[date][selectedItem]} </td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default TechnicalAnalysis;