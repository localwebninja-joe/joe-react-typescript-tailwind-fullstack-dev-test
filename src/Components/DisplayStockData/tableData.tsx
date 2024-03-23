
import React from 'react';
interface TableDataProps {
	value: string;
}
	
function TableData({ value }: TableDataProps): JSX.Element {
	return (
		<td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-gray-500">{ value }</td>
	);
}

export default TableData;