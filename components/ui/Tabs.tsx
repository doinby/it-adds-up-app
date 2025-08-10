import { useState } from 'react';
import { ChangeEvent } from 'react';
import Tab1 from './Tab1';
import Tab from './Tab';
import classNames from 'classnames';

export default function Tabs() {
	const TAB_01 = 'Calculate Price';
	const TAB_02 = 'Calculate Percent';
	const TAB_LABELS = ['Calculate Price', 'Calculate Percent'];

	const [input, setInput] = useState('');
	const [activeTab, setActiveTab] = useState<0 | 1>(1);

	const inputTabClass = classNames({
		tab: true,
		// 'tab-active'
	});

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	return (
		<>
			<div className='tabs tabs-lift max-w-[800px]'>
				<input
					type='radio'
					name='discount-calculator'
					className='tab'
					aria-label={TAB_01}
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab1 />
				</div>

				<input
					type='radio'
					name='discount-calculator'
					className='tab tab-active'
					aria-label={TAB_02}
				/>
				<div className='tab-content bg-base-100 border-base-300 p-6'>
					<Tab />
				</div>

				{/* <input
					type='radio'
					name='discount-calculator'
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
