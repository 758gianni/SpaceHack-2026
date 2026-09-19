import { cn } from '@/lib/cn';

// type ModelType = {
// 	id: string;
// 	name: string;
// 	description: string;
// };

const history: any[] = [
	{
		id: 'convnext',
		name: 'ConvNeXt V2',
		description: 'Base',
	},
	{
		id: 'tropical',
		name: 'Tropical',
		description: 'Natural & open',
	},
	{
		id: 'mediterranean',
		name: 'Mediterranean',
		description: 'Warm & timeless',
	},
	{
		id: 'contemporary',
		name: 'Contemporary',
		description: 'Bold & refined',
	},
];

const History = () => {
	const handleRunInterface = () => {
		//
	};

	return (
		<aside className='w-60 flex flex-col shrink-0 border-r border-white/8 bg-[#101010]'>
			<div className='px-5 py-5 flex-1 space-y-6 overflow-y-auto no-scrollbar'>
				<span className='mb-3 block font-medium text-sm text-neutral-300'>History</span>

				<div className='grid grid-cols-1 gap-2'>
					{history?.map((item: any, idx: number) => {
						return (
							<button key={idx} type='button' onClick={() => {}} className='group select-none relative h-14 w-full p-3 rounded-xl border border-white/8 hover:border-white/20 bg-[#171717] text-left overflow-hidden'>
								<p className={cn('font-medium text-xs', 'text-neutral-300')}>{item?.name}</p>
								<p className='mt-0.5 text-[10px] text-neutral-500'>{item?.description}</p>
							</button>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export { History };
