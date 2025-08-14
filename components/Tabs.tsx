import { useState } from 'react';
import Tab from './ui/Tab';
import Tab1 from './ui/Tab1';
import ResultCard from './ui/ResultCard';
import ResultPlainText from './ui/ResultPlainText';

export default function Tabs() {
	const result = {
		beforePrice: 4000.5,
		afterPrice: 3500.0,
		percent: 9.86,
		dollarSaved: 500.5,
	};

	return (
		<>
			<div className='tabs tabs-lift'>
				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 1'
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab1 />
				</div>

				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 2'
					defaultChecked
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab />
				</div>
			</div>

			<ResultCard result={result} />
			<ResultPlainText result={result} />
		</>
	);
}
