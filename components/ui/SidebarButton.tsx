import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import React from 'react';

interface SidebarButtonInterface {
	isClose: boolean;
	setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidebarButton({
	isClose,
	setIsClose,
}: SidebarButtonInterface) {
	const iconColor = 'oklch(89.925% 0.016 262.749 / 85%)';
	const sidebarIcon = isClose ? (
		<PanelLeftOpen color={iconColor} />
	) : (
		<PanelLeftClose color={iconColor} />
	);

	function handleSidebarClose() {
		setIsClose(!isClose);
	}

	return (
		<button
			onClick={handleSidebarClose}
			className='bg-neutral absolute right-[-28] px-1 py-1.5 mt-4 rounded-r-md cursor-pointer'
		>
			{sidebarIcon}
		</button>
	);
}
