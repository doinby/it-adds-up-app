import { Copy } from 'lucide-react';

export default function PlainTextResult() {
	return (
		<div className='mockup-code relative bg-neutral text-neutral-content w-full'>
			<button className='absolute top-4 right-4 btn btn-sm btn-circle btn-ghost'>
				<Copy size={16} />
			</button>
			<pre>
				<code>without prefix</code>
			</pre>
		</div>
	);
}
