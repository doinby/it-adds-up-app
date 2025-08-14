import { Result } from '@/types/types';
import { Copy } from 'lucide-react';

export default function PlainTextResult({ result }: { result: Result }) {
	const { beforePrice, afterPrice, percent, dollarSaved } = result;

	return (
		<>
			<div className='mockup-code w-96 relative bg-primary text-primary-content'>
				<div className='absolute top-0 h-full w-full bg-linear-to-t from-black to-blue-500/0 z-1'></div>
				<pre>
					<code>
						{`
	Original $:
	$${beforePrice}
	Discounted $:
	$${afterPrice}
	Discount %:
	${percent}%
	Dollar saved:
	$${dollarSaved}
	`}
					</code>
				</pre>
				<div className='join relative w-full justify-center z-3'>
					<button className='join-item btn btn-secondary btn-outline'>
						Copy Everything
					</button>
					<button className='join-item btn btn-secondary btn-outline'>
						Copy Values
					</button>
				</div>
			</div>
		</>
	);
}
