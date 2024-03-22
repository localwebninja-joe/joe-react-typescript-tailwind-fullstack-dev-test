import React, { useState } from "react";

interface DropdownIndicatorsProps {
	items: string[];
	onSelectItem: (item:string) => void;
}

const DropdownIndicators: React.FC<DropdownIndicatorsProps> = ({items, onSelectItem}) => {
	const [showItems, setShowItems] = useState(false);
	const handleShowItems = () => setShowItems(!showItems);
	return (
		<div className="relative inline text-left">
			<div>
				<button
					type="button"
					onClick={handleShowItems}
					className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" > Select an Item </button>
					{showItems && items.map((item, index) => (
						<button
							key={index}
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								handleShowItems();
								onSelectItem(event.target.innerText);
							}}
							className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem">
							{item}
						</button>
					))}
			</div>
		</div>
	); 
};

export default DropdownIndicators;