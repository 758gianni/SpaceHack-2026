import { ArrowRight, Image, Sparkle } from 'lucide-react';
import { useLayoutEffect, useRef, useState, type FC } from 'react';

const Result: FC = () => {
	return (
		<div className='relative size-full rounded-2xl border border-white/8 bg-[#111] shadow-2xl overflow-hidden'>
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='select-none max-w-sm px-6 text-center'>
					<div className='size-16 mb-5 mx-auto flex items-center justify-center rounded-2xl border border-white/8 bg-white/3'>
						<Image className='size-8 shrink-0 text-neutral-600' />
					</div>

					<h2 className='font-medium text-lg text-neutral-300'>Your results will appear here</h2>

					{/* <p className='mt-2 text-sm text-neutral-600 leading-relaxed'>Describe your dream home and we'll turn your ideas into a detailed architectural concept.</p> */}
				</div>
			</div>

			{/* <img src='YOUR_GENERATED_IMAGE_URL' className='absolute inset-0 w-full h-full object-cover' alt='Generated house design' /> */}

			<div className='absolute top-4 right-4 flex gap-2'>
				<button className='w-9 h-9 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition'>
					<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path d='M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' />
					</svg>
				</button>
			</div>
		</div>
	);
};

const Results = () => {
	const promptRef = useRef<HTMLTextAreaElement>(null);

	const [prompt, setPrompt] = useState<string>('');

	useLayoutEffect(() => {
		const textarea = promptRef.current;

		if (!textarea) {
			return;
		}

		textarea.style.height = 'auto';
		textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
		textarea.style.overflowY = textarea.scrollHeight > 100 ? 'auto' : 'hidden';
	}, [prompt]);

	return (
		<div className='flex flex-col flex-1'>
			<div className='min-h-0 p-8 flex items-center justify-center gap-4 flex-1 overflow-auto'>
				<Result />

				<Result />
			</div>

			<div className='shrink-0 px-6 pb-6'>
				<div className='max-w-200 mx-auto'>
					<div className='rounded-2xl border border-white/9 bg-[#111] shadow-xl'>
						<div className='p-3 flex items-center gap-3'>
							<div className='select-none size-8 flex items-center justify-center shrink-0 rounded-lg bg-white/6'>
								<Sparkle className='size-3.5 shrink-0' />
							</div>

							<textarea ref={promptRef} rows={1} value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Ask AI to change something...' className='h-8 max-h-25 w-full flex-1 bg-transparent px-0 py-1.5 text-sm text-neutral-200 leading-5 placeholder:text-neutral-600 resize-none overflow-y-hidden' />

							<button type='button' onClick={() => {}} className='select-none size-9 flex items-center justify-center rounded-lg bg-white text-black hover:bg-neutral-200 active:scale-[0.99]' title='Send prompt'>
								<ArrowRight className='size-4 shrink-0' />
							</button>
						</div>

						<div className='px-4 pb-3 flex items-center gap-2'>
							<button className='select-none px-2.5 py-1.5 rounded-md bg-white/4 text-[10px] text-neutral-500 hover:text-neutral-300'>Lorem ipsum</button>
							<button className='select-none px-2.5 py-1.5 rounded-md bg-white/4 text-[10px] text-neutral-500 hover:text-neutral-300'>Lorem ipsum</button>
							<button className='select-none px-2.5 py-1.5 rounded-md bg-white/4 text-[10px] text-neutral-500 hover:text-neutral-300'>Lorem ipsum</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Results };
