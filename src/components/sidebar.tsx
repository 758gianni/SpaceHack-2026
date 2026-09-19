import { cn } from '@/lib/cn';
import { Play } from 'lucide-react';
import { useState } from 'react';

type PrecisionType = {
	id: string;
	name: string;
};

const PRECISIONS: PrecisionType[] = [
	{
		id: 'fp32',
		name: 'FP32',
	},
	{
		id: 'int8',
		name: 'INT8',
	},
];

type ModelType = {
	id: string;
	name: string;
	description: string;
};

const MODELS: ModelType[] = [
	{
		id: 'model-alpha',
		name: 'Model Alpha',
		description: 'Standard',
	},
	{
		id: 'model-beta',
		name: 'Model Beta',
		description: 'Balanced',
	},
	{
		id: 'model-gamma',
		name: 'Model Gamma',
		description: 'Detailed',
	},
	{
		id: 'model-delta',
		name: 'Model Delta',
		description: 'Experimental',
	},
];

const Sidebar = () => {
	const [title, setTitle] = useState<string>('');
	// const [description, setDescription] = useState<string>('');
	// const [bedrooms, setBedrooms] = useState(3);
	const [precision, setPrecision] = useState<PrecisionType['id']>('fp32');
	const [model, setModel] = useState<ModelType['id']>('convnext');

	const handleRunInterface = () => {
		//
	};

	return (
		<aside className='w-87.5 flex flex-col shrink-0 border-r border-white/8 bg-[#101010]'>
			<div className='px-5 py-5 flex-1 space-y-6 overflow-y-auto no-scrollbar'>
				<div>
					<label className='mb-2 block font-medium text-xs text-neutral-300'>Title</label>
					<input type='text' placeholder='' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full h-11 px-3.5 rounded-xl border border-white/9 bg-[#171717] text-sm text-neutral-300 placeholder:text-neutral-600 focus:border-white/20' autoComplete='none' />
				</div>

				{/* <div>
					<div className='mb-2 flex items-center justify-between'>
						<label className='font-medium text-xs text-neutral-300'>Describe your home</label>
						<span className='text-[10px] text-neutral-600'>AI</span>
					</div>

					<div className='relative'>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows={6}
							maxLength={1000}
							placeholder='A modern tropical villa with large glass walls, an infinity pool, outdoor kitchen, natural stone and lots of privacy...'
							className='w-full px-3.5 py-3.5 resize-none rounded-xl border border-white/9 bg-[#171717] text-sm text-neutral-200 placeholder:text-neutral-600 focus:border-white/20'></textarea>
						<div className='absolute bottom-3 right-3 text-[10px] text-neutral-600'>{description.length} / 1000</div>
					</div>
				</div> */}

				{/* <div>
					<label className='mb-2 block font-medium text-xs text-neutral-300'>Precision</label>

					<div className='flex items-center justify-between h-11 rounded-xl border border-white/[0.09] bg-[#171717] px-2'>
						<button className='w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.06] transition'>
							<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path d='M5 12h14' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
							</svg>
						</button>

						<span className='text-sm font-medium'> 3 </span>

						<button className='w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.06] transition'>
							<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path d='M12 5v14M5 12h14' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
							</svg>
						</button>
					</div>
				</div> */}

				<div>
					<label className='mb-2 block font-medium text-xs text-neutral-300'>Precision</label>

					<div className='grid grid-cols-2 gap-2'>
						{PRECISIONS?.map((_precision: PrecisionType, idx: number) => {
							const isSelected = precision === _precision?.id;

							return (
								<button key={idx} type='button' onClick={() => setPrecision(_precision?.id)} className={cn('select-none relative h-10 w-full p-3 flex items-center justify-center rounded-lg border font-medium text-xs text-center overflow-hidden', isSelected ? 'border-white bg-white text-black' : 'border-white/8 bg-[#171717] hover:border-white/20 text-neutral-300')}>
									{_precision?.name}
								</button>
							);
						})}
					</div>
				</div>

				<div>
					<label className='mb-2 block font-medium text-xs text-neutral-300'>Model</label>

					<div className='grid grid-cols-2 gap-2'>
						{MODELS?.map((_model: ModelType, idx: number) => {
							const isSelected = model === _model?.id;

							return (
								<button key={idx} type='button' onClick={() => setModel(_model?.id)} className={cn('group select-none relative h-20 w-full p-3 rounded-xl border text-left overflow-hidden', isSelected ? 'border-white/20 bg-white/6' : 'border-white/8 bg-[#171717] hover:border-white/20')}>
									<div className='relative'>
										<p className={cn('font-medium text-xs', isSelected ? 'text-white' : 'text-neutral-300')}>{_model?.name}</p>
										<p className='mt-0.5 text-[10px] text-neutral-500'>{_model?.description}</p>
									</div>

									<div className={cn('absolute right-2.5 top-2.5 flex size-3 items-center justify-center rounded-full border', isSelected ? 'border-white' : 'border-white/30')}>{isSelected && <div className='size-1.5 rounded-full bg-white' />}</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			<div className='p-5 border-t border-white/6'>
				<button type='button' onClick={handleRunInterface} className='h-12 w-full flex items-center justify-center gap-2 rounded-xl bg-white font-semibold text-sm text-black hover:bg-neutral-200 active:scale-[0.99]'>
					<Play className='size-4 shrink-0' />
					Run Interface
				</button>

				<p className='select-none mt-2.5 text-[10px] text-center text-neutral-600'>Measured on native x86 CPU</p>
			</div>
		</aside>
	);
};

export { Sidebar };
