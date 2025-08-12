import Tab from './ui/Tab';
import Tab1 from './ui/Tab1';

export default function Tabs() {
	return (
		<>
			<div className='tabs tabs-lift max-w-[800px]'>
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
		</>
	);
}
