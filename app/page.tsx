export default function HomePage() {
	return (
		<main className='w-[60%] mt-[26%] self-center flex flex-col gap-12'>
			<h1 className='text-secondary text-center text-2xl'>
				The most convenient way to calculate sale percentage
			</h1>
			{/* name of each tab group should be unique */}
			<div className='tabs tabs-lift w-full'>
				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 1'
				/>
				<div className='tab-content w-full bg-base-100 border-base-300 p-6'>
					<input type='text' className='input input-accent' />
				</div>

				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 2'
					defaultChecked
				/>
				<div className='tab-content w-full bg-base-100 border-base-300 p-6'>
					Tab content 2
				</div>

				<input
					type='radio'
					name='my_tabs_3'
					className='tab'
					aria-label='Tab 3'
				/>
				<div className='tab-content w-full bg-base-100 border-base-300 p-6'>
					Tab content 3
				</div>
			</div>
		</main>
	);
}
