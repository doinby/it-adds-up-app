'use client';

import Tabs from '@/components/ui/Tabs';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import {
	ArrowLeftToLine,
	PanelLeftClose,
	PanelLeftOpen,
	SquareMenu,
} from 'lucide-react';
import classNames from 'classnames';

export default function HomePage() {
	const [isSidebarClose, setSidebarClose] = useState(true);

	const sidebarIcon = isSidebarClose ? (
		<PanelLeftOpen
			className='opacity-85'
			color='oklch(89.925% 0.016 262.749)'
		/>
	) : (
		<PanelLeftClose
			className='opacity-85'
			color='oklch(89.925% 0.016 262.749)'
		/>
	);

	function handleSidebarClose() {
		setSidebarClose(!isSidebarClose);
	}

	return (
		<>
			<div className='relative flex row-span-2 w-full'>
				<Sidebar isClose={isSidebarClose} setIsClose={setSidebarClose} />
				<button
					onClick={handleSidebarClose}
					className='bg-neutral absolute right-[-28] px-1 py-1.5 mt-4 rounded-r-md cursor-pointer'
				>
					{sidebarIcon}
				</button>
			</div>

			{/* <main className='w-[60%] mt-[10%] self-center flex flex-col gap-12'> */}
			<main className='px-12 flex flex-col gap-12 items-center'>
				<h1 className='text-secondary text-center text-2xl'>
					Discount Calculator
				</h1>
				<Tabs />
			</main>
		</>
	);
}
