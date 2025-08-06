import { ArrowRightLeft, Bookmark, DollarSign } from 'lucide-react';
import Image from 'next/image';
import dollarArrowDown from '../../assets/dollar-arrow-down.svg';

export default function Tab2() {
	const result = {
		beforePrice: '30.00',
		percent: '15',
		afterPrice: '25.50',
		dollarSaved: '4.50',
	};

	return (
		<>
			<div className='grid grid-rows-[auto_1fr_auto]'>
				<p className='text-accent text-sm leading-8 italic'>Calculate...</p>
				<div className='row-start-2 join gap-0 border-base-300'>
					<select className='select join-item w-24 text-xs'>
						<option aria-selected>original $</option>
						<option>discounted $</option>
					</select>
					<label className='input join-item'>
						<DollarSign />
						<input
							type='text'
							required
							className='join-item'
							placeholder='30.00'
						/>
					</label>
					<button className='join-item btn btn-neutral w-14'>
						<ArrowRightLeft />
					</button>
					<select className='select join-item w-24 text-xs'>
						<option aria-selected>discounted $</option>
						<option>original $</option>
					</select>
					<label className='input join-item'>
						<DollarSign />
						<input
							type='text'
							required
							className='join-item'
							placeholder='30.00'
						/>
					</label>
				</div>

				<div className='card'>
					<div className='card-body flex gap-8 leading-10'>
						<div className='card-title'>
							<h3 className=''>Result</h3>
							<button className='btn btn-ghost btn-sm btn-circle'>
								<Bookmark size={20} />
							</button>
						</div>
						<p>
							An item originally cost{' '}
							<span className='text-primary font-black'>
								${result.beforePrice}
							</span>{' '}
							is reduced to{' '}
							<span className='text-primary font-black'>
								${result.afterPrice}
							</span>
							, the applied offers are:
							<br />
							Discount Percent:{' '}
							<span className='text-2xl text-primary font-black'>
								{result.percent}%
							</span>
							<br />
							Money Saved:{' '}
							<span className='text-2xl text-primary font-black'>
								${result.dollarSaved}
							</span>
						</p>
						<button className='self-center card-action btn btn-primary btn-wide'>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
