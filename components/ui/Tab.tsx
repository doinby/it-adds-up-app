import { Result } from '@/types/types';
import { ArrowRightLeft, Bookmark, DollarSign } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';

enum PriceType {
	beforePrice = 'beforePrice',
	afterPrice = 'afterPrice',
}

interface GetPercentForm {
	name?: string;
	beforePrice: string;
	afterPrice: string;
	optionLeft: PriceType;
	optionRight: PriceType;
}

export default function Tab() {
	const REGEX_FLOAT = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/g;
	const result = {
		beforePrice: '30.00',
		percent: '15',
		afterPrice: '25.50',
		dollarSaved: '4.50',
	};

	const { register, handleSubmit } = useForm<GetPercentForm>();

	const onSubmit: SubmitHandler<GetPercentForm> = (data) => console.log(data);

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-rows-[auto_1fr_auto] gap-4'
			>
				<p className='text-accent text-sm leading-8 italic'>Calculate...</p>
				<div className='row-start-2 join gap-0 border-base-300'>
					<select
						{...register('optionLeft')}
						className='select join-item w-24 text-xs'
					>
						<option value='beforePrice' aria-selected>
							original $
						</option>
						<option value='afterPrice'>discounted $</option>
					</select>
					<label className='input join-item'>
						<DollarSign />
						<input
							{...register('beforePrice', {
								required: true,
								maxLength: 10,
								pattern: REGEX_FLOAT,
							})}
							type='text'
							className='join-item'
							placeholder='30.00'
						/>
					</label>
					<button className='join-item btn btn-neutral w-14'>
						<ArrowRightLeft />
					</button>
					<select
						{...register('optionRight')}
						className='select join-item w-24 text-xs'
					>
						<option value='beforePrice'>original $</option>
						<option value='afterPrice' aria-selected>
							discounted $
						</option>
					</select>
					<label className='input join-item'>
						<DollarSign />
						<input
							{...register('afterPrice', {
								required: true,
								maxLength: 10,
								pattern: REGEX_FLOAT,
							})}
							type='text'
							className='join-item'
							placeholder='25.00'
						/>
					</label>
				</div>

				<div className='card-actions w-full flex justify-center'>
					<input type='submit' className='btn btn-wide' />
					<input type='reset' className='btn btn-wide' />
				</div>

				<div className='card'>
					<div className='card-body flex leading-10'>
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
						{/* <button className='self-center card-action btn btn-primary btn-wide'>
							Reset
						</button> */}
					</div>
				</div>
			</form>
		</>
	);
}
