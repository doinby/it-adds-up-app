import { SubmitHandler, useForm } from 'react-hook-form';
import { DollarSign } from 'lucide-react';
import classNames from 'classnames';
import InputNoOption from './ui/InputNoOption';

export interface FormInputInterface {
	beforePriceInput: string;
	afterPriceInput: string;
}

export default function Form() {
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
		pattern: {
			value: REGEX_FLOAT,
			message: 'Value of 0-9 is required',
		},
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputInterface>();
	const onSubmit: SubmitHandler<FormInputInterface> = (data) =>
		console.log(data);

	return (
		<section className='card bg-base-100'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='card-body flex flex-col gap-6 items-center'
			>
				<div className='join my-4'>
					{/* <div className='relative join-item'>
						<p className='absolute left-0 top-[-20px] text-sm'>
							Price before discount:
						</p>
						<label
							className={classNames({
								'input text-xs text-base-content/70': true,
								'border-2 border-error': errors.beforePriceInput,
							})}
						>
							<span className='flex gap-1'>
								BEFORE
								<DollarSign size={15} />
							</span>
							<input
								{...register('beforePriceInput', INPUT_CONSTRAINTS)}
								type='text'
							/>
						</label>
						<p className='absolute right-0 bottom-[-24px] text-sm text-error'>
							{errors.beforePriceInput?.message}
						</p>
					</div> */}
					<InputNoOption
						register={register('beforePriceInput', INPUT_CONSTRAINTS)}
						error={errors.beforePriceInput}
						label={
							<span className='flex gap-1'>
								BEFORE
								<DollarSign size={15} />
							</span>
						}
					/>

					<button type='button' className='join-item btn'>
						Swap
					</button>

					<InputNoOption
						register={register('afterPriceInput', INPUT_CONSTRAINTS)}
						error={errors.afterPriceInput}
						label={
							<span className='flex gap-1'>
								AFTER
								<DollarSign size={15} />
							</span>
						}
					/>

					{/* <div className='relative join-item'>
						<p className='absolute left-0 top-[-20px] text-sm'>
							Price after discount:
						</p>
						<label
							className={classNames({
								'input text-xs text-base-content/70': true,
								'border-2 border-error': errors.afterPriceInput,
							})}
						>
							<span className='flex gap-1'>
								AFTER
								<DollarSign size={15} />
							</span>
							<input
								{...register('afterPriceInput', INPUT_CONSTRAINTS)}
								type='text'
							/>
							<p className='absolute right-0 bottom-[-24px] text-sm text-error'>
								{errors.afterPriceInput?.message}
							</p>
						</label>
					</div> */}
				</div>

				<input type='submit' className='btn btn-wide' />
			</form>
		</section>
	);
}
