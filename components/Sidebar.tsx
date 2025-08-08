import { hideLongNumber } from '@/utils/display';
import classNames from 'classnames';
import { excludeKeys } from 'filter-obj';
import { Dispatch, SetStateAction } from 'react';

interface SidebarInterface {
	isClose: boolean;
	setIsClose: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isClose, setIsClose }: SidebarInterface) {
	const history = [
		{
			name: 'hello',
			beforePrice: 100,
			percent: 10,
			afterPrice: 90,
			dollarSaved: 10,
		},
		{
			name: 'Lorem ipsum dolor sit amet oknda kfjiow',
			beforePrice: 200,
			percent: 20,
			afterPrice: 180,
			dollarSaved: 20,
		},
		{
			name: 'Maecenas nec odio et ante tincidunt tempus',
			beforePrice: 9997649.24,
			percent: 17.9,
			afterPrice: 7657649.88,
			dollarSaved: 4245589.32,
		},
	];
	const listClass = classNames({
		'h-full px-4 py-6 space-y-6 bg-neutral text-neutral-content': true,
		hidden: isClose,
	});

	return (
		<ul className={listClass}>
			<h2 className=''>History</h2>
			{history.map((result, idx) => {
				const trimmed = hideLongNumber(
					excludeKeys(result, ['name', 'percent'])
				);
				const hasTrimmed = Object.keys(trimmed).length > 0;

				return (
					<li
						key={'history' + idx}
						className='grid grid-cols-3 grid-rows-[1fr_auto]'
					>
						<h4 className='col-span-3 text-xs'>{result.name}</h4>
						<div className='max-w-28 px-2 py-2'>
							<p className='text-xl font-black overflow-scroll'>
								${hasTrimmed ? `${trimmed.beforePrice}…` : result.beforePrice}
							</p>
							<p className='text-xs'>Before</p>
						</div>
						<div className='max-w-28 px-2 py-2'>
							<p className='text-xl font-black overflow-scroll'>
								${hasTrimmed ? `${trimmed.afterPrice}…` : result.beforePrice}
							</p>
							<p className='text-xs'>After</p>
						</div>
						<div className='max-w-28 px-2 py-2'>
							<p className='text-xl font-black overflow-scroll'>
								{result.percent}%
							</p>
							<p className='text-xs'>
								${hasTrimmed ? `${trimmed.dollarSaved}…` : result.beforePrice}{' '}
								saved
							</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
