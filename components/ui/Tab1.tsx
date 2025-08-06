import { Bookmark, DollarSign, PercentIcon } from 'lucide-react';

export default function Tab1() {
	const result = {
		beforePrice: '30.00',
		discount: '15',
		afterPrice: '$25.50',
		dollarSaved: '$4.50',
	};

	return (
		<>
			<div className='grid grid-rows-[auto_1fr_auto]'>
				<p className='text-accent text-sm leading-8 italic'>
					Calculate using original price
				</p>
				<div className='row-start-2 join border-base-300'>
					<select className='select join-item w-24 text-xs'>
						<option aria-selected>type</option>
						<option>original $</option>
						<option>discounted $</option>
					</select>
					<label className='input'>
						<DollarSign />
						<input
							type='text'
							required
							className='join-item'
							placeholder='30.00'
						/>
					</label>
					<label className='input join-item'>
						<PercentIcon />
						<input
							type='text'
							// value={input}
							// onChange={handleInputChange}
							placeholder='15'
							className='w-36'
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
							For an item that originally cost{' '}
							<span className='text-primary font-black'>
								${result.beforePrice}
							</span>{' '}
							with a{' '}
							<span className='text-primary font-black'>
								{result.discount}%
							</span>{' '}
							discount, the applied offers are:
							<br />
							Price with Discount:{' '}
							<span className='text-2xl text-primary font-black'>
								{result.afterPrice}
							</span>
							<br />
							Money Saved:{' '}
							<span className='text-2xl text-primary font-black'>
								{result.dollarSaved}
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
