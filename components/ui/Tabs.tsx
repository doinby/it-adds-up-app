import { useState } from 'react';
import { ChangeEvent } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default function Tabs() {
	const [input, setInput] = useState('');

	const tab1 = 'Calculate Price';
	const tab2 = 'Calculate Percent';

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	return (
		<>
			<div className='tabs tabs-lift w-full'>
				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label={tab1}
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab1 />
				</div>

				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label={tab2}
					defaultChecked
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab2 />
				</div>

				{/* <input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 3'
				/>
				<div className='tab-content w-full bg-base-100 border-base-300 p-6'>
					Tab content 3
				</div> */}
			</div>
		</>
	);
}
