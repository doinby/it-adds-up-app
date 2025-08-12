import { Result } from '@/types/types';
import { BadgePercent, Percent, TicketPercent } from 'lucide-react';

export default function ResultCard({ result }: { result: Result }) {
	const { beforePrice, afterPrice, percent, dollarSaved } = result;

	return (
		<article className='w-full md:w-96 bg-success text-success-content border-1 border-base-300 rounded-lg'>
			<div className='flex gap-2 p-3 items-start justify-end'>
				<h3 className='text-xl md:text-6xl'>{percent}</h3>
				<p className='flex flex-col items-center text-sm'>
					saved{' '}
					<span>
						<Percent size={32} />
					</span>{' '}
				</p>
			</div>
			<p className='bg-base-100 p-4'>
				An item originally cost{' '}
				<span className='font-black'>${beforePrice}</span> is reduced to{' '}
				<span className='font-black'>${afterPrice}</span>
				, the applied offers are:
				<br />
				Discount Percent:{' '}
				<span className='text-2xl font-black'>{percent}%</span>
				<br />
				Money Saved: <span className='text-2xl font-black'>${dollarSaved}</span>
			</p>
		</article>
	);
}
