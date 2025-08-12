import { ArrowRightLeft, Bookmark, DollarSign, RotateCcw } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputNoOption from './InputNoOption';
import { calculatePercent } from '@/utils/calculations';
import { Result } from '@/types/types';
import { useState } from 'react';
import ResultCard from './ResultCard';

export interface FormInputInterface {
	beforePriceInput: number;
	afterPriceInput: number;
}

export default function Tab() {
	const REGEX_FLOAT = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/g;
	const INPUT_CONSTRAINTS = {
		required: {
			value: true,
			message: 'Required',
		},
		maxLength: {
			value: 10,
			message: 'Price must be less than 1 billions',
		},
		valueAsNumber: true,
		// pattern: {
		// 	value: REGEX_FLOAT,
		// 	message: 'Value of 0-9 is required',
		// },
	};

	const [result, setResult] = useState<Result>({
		name: undefined,
		beforePrice: undefined,
		afterPrice: undefined,
		percent: undefined,
		dollarSaved: undefined,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputInterface>();
	// console.log(errors);

	const onSubmit: SubmitHandler<FormInputInterface> = (data) => {
		const { beforePriceInput, afterPriceInput } = data;
		setResult((prev) => ({
			...prev,
			...calculatePercent(beforePriceInput, afterPriceInput),
			beforePrice: beforePriceInput,
			afterPrice: afterPriceInput,
		}));
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='border-base-300 space-y-6'
			>
				<div className='join grid grid-cols-[3fr_1fr_3fr] my-4 pb-4'>
					<InputNoOption
						register={register('beforePriceInput', INPUT_CONSTRAINTS)}
						error={errors.beforePriceInput}
						// label={
						// 	<span className='flex gap-1'>
						// 		BEFORE
						// 		<DollarSign size={15} />
						// 	</span>
						// }
					/>

					<button type='button' className='join-item btn btn-secondary'>
						<ArrowRightLeft />
					</button>

					<InputNoOption
						register={register('afterPriceInput', INPUT_CONSTRAINTS)}
						error={errors.afterPriceInput}
						// label={
						// 	<span className='flex gap-1'>
						// 		AFTER
						// 		<DollarSign size={15} />
						// 	</span>
						// }
					/>
				</div>

				<div className='w-full flex flex-wrap gap-x-8 gap-y-4 justify-center'>
					<button type='submit' className='btn btn-primary btn-wide'>
						Calculate
					</button>
					<button type='reset' className='btn btn-secondary'>
						<RotateCcw />
					</button>
				</div>
			</form>

			{/* <div className=''>
				<h3 className=''>Result</h3>
				<button className='btn btn-ghost btn-sm btn-circle'>
					<Bookmark size={20} />
				</button>
				<p>
					An item originally cost{' '}
					<span className='text-primary font-black'>${result.beforePrice}</span>{' '}
					is reduced to{' '}
					<span className='text-primary font-black'>${result.afterPrice}</span>
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
			</div> */}
		</>
	);
}
