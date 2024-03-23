
import React from 'react';
interface TableHeaderProps {
	value: string;
}
	
function TableHeader({ value }: TableHeaderProps): JSX.Element {
	return (
		<th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">{ value }</th>
	);
}

export default TableHeader;