'use client';

import { useState } from 'react';
import Tabs from '@/components/Tabs';
import Sidebar from '@/components/Sidebar';
import SidebarButton from '@/components/ui/SidebarButton';
import PlainTextResult from '@/components/ui/PlainTextResult';
import ResultCard from '@/components/ui/ResultCard';

export default function HomePage() {
	const result = {
		beforePrice: 40.5,
		afterPrice: 35.0,
		percent: 9,
		dollarSaved: 5.5,
	};
	const [isSidebarClose, setSidebarClose] = useState(true);

	return (
		<>
			<div className='relative flex row-span-2 w-full'>
				<Sidebar isClose={isSidebarClose} setIsClose={setSidebarClose} />
				<SidebarButton isClose={isSidebarClose} setIsClose={setSidebarClose} />
			</div>

			{/* <main className='w-[60%] mt-[10%] self-center flex flex-col gap-12'> */}
			<main className='px-12 flex flex-col gap-12 items-center'>
				<h1 className='text-primary text-center text-2xl'>
					Discount Calculator
				</h1>

				<Tabs />
				<ResultCard result={result} />
				<PlainTextResult />

				{/* <Form /> */}
			</main>
		</>
	);
}
