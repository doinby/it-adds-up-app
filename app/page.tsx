'use client';

import Tabs from '@/components/ui/Tabs';

export default function HomePage() {
	return (
		<main className='w-[60%] mt-[10%] self-center flex flex-col gap-12'>
			<h1 className='text-secondary text-center text-2xl'>
				Discount Calculator
			</h1>
			<Tabs />
		</main>
	);
}
