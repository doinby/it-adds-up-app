import React from 'react';
import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form';

interface InputInterface {
	register: UseFormRegister;
	error: { type: string; message?: string } | undefined;
	label?: React.ReactNode;
}

export default function InputNoOption({
	register,
	error,
	label,
}: InputInterface) {
	const labelClass = classNames({
		'relative w-full join-item input text-xs text-base-content/70': true,
		'border-2 border-error': error,
	});

	return (
		<>
			<div className='relative join-item'>
				<label className={labelClass}>
					<p className='absolute left-0 top-[-20px] text-sm'>
						Price before discount:
					</p>
					{label}
					<input {...register} type='text' className='text-base' />
					<p className='absolute right-0 bottom-[-24px] text-sm text-error'>
						{error?.message}
					</p>
				</label>
			</div>
		</>
	);
}
