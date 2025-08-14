import { Result } from '@/types/types';
import { Bookmark, TicketPercent } from 'lucide-react';

export default function ResultCard({ result }: { result: Result }) {
	const { beforePrice, afterPrice, percent, dollarSaved } = result;

	return (
		<article className='text-success-content rounded-lg bg-base-100 overflow-clip'>
			<header className='relative px-8 py-5 grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] gap-x-4 items-center justify-center overflow-clip bg-success'>
				<TicketPercent
					size={200}
					className='absolute top-[-48] right-[-25] rotate-[35deg] opacity-15 z-0'
				/>
				<p className='col-start-1 row-start-1 text-sm'>discount applied:</p>
				<h3 className='col-start-1 row-start-2 text-xl md:text-6xl'>
					{percent}%
				</h3>
				<p className='col-start-1 row-start-3 w-auto text-sm'>
					That&#39;s <span className='font-black'>${dollarSaved}</span> saved!
				</p>
				<button className='btn btn-xl btn-circle btn-primary col-start-2 row-start-2 mx-auto z-1'>
					<Bookmark size={36} className='' />
				</button>
				<p className='col-start-2 row-start-1 text-sm text-center'>Bookmark</p>
			</header>
			<div className='px-8 py-5 space-y-2 text-xl'>
				<p>
					An item originally costs{' '}
					<span className='text-2xl font-bold'>${beforePrice}</span>
				</p>
				<p>
					Will now costs{' '}
					<span className='text-2xl font-bold'>${afterPrice}</span>
				</p>
				<p>
					You have saved{' '}
					<span className='text-2xl font-bold'>${dollarSaved}</span>
				</p>
				<p>
					That&#39;s <span className='text-2xl font-bold'>{percent}%</span> off
					of the total bill!
				</p>
			</div>
		</article>
	);
}
