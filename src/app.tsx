import { ArrowDownToLine, Image, Maximize, Minimize, Redo, Undo } from 'lucide-react';
import { useEffect, useState, type FC } from 'react';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

const Result: FC<any> = ({}) => {
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

const App = () => {
	const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

	const handleUndo = () => {};

	const handleRedo = () => {};

	const handleDownload = () => {};

	const handleMaximize = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	};

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	return (
		<div className='h-screen flex flex-col'>
			<Header />

			<div className='min-h-0 flex flex-1'>
				<Sidebar />

				<main className='min-w-0 flex flex-col flex-1 bg-[#080808]'>
					<div className='h-14 px-5 flex items-center justify-between shrink-0 border-b border-white/6'>
						<div className='flex items-center gap-1'>
							<button type='button' onClick={() => {}} className='select-none px-3 py-1.5 rounded-md bg-white/[0.07] text-xs text-white active:scale-[0.99]'>
								Prediction Mask
							</button>

							<button type='button' onClick={() => {}} className='select-none px-3 py-1.5 rounded-md hover:bg-white/4 text-xs text-neutral-500 hover:text-white active:scale-[0.99]'>
								Confidence
							</button>

							<button type='button' onClick={() => {}} className='select-none px-3 py-1.5 rounded-md hover:bg-white/4 text-xs text-neutral-500 hover:text-white active:scale-[0.99]'>
								Benchmark
							</button>

							<button type='button' onClick={() => {}} className='select-none px-3 py-1.5 rounded-md hover:bg-white/4 text-xs text-neutral-500 hover:text-white active:scale-[0.99]'>
								Confusion Matrix
							</button>
						</div>

						<div className='flex items-center gap-1'>
							<button type='button' onClick={handleUndo} className='select-none min-h-8 ming-w-8 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 active:scale-[0.99]' title='Undo'>
								<span className='sr-only'>Undo</span>
								<Undo className='size-4 shrink-0' />
							</button>

							<button type='button' onClick={handleRedo} className='select-none min-h-8 ming-w-8 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 active:scale-[0.99]' title='Redo'>
								<span className='sr-only'>Redo</span>
								<Redo className='size-4 shrink-0' />
							</button>

							<div className='h-5 w-px mx-1 bg-white/8'></div>

							<button type='button' onClick={handleDownload} className='select-none min-h-8 ming-w-8 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 active:scale-[0.99]' title='Download'>
								<span className='sr-only'>Download</span>
								<ArrowDownToLine className='size-4 shrink-0' />
							</button>

							<button type='button' onClick={handleMaximize} className='select-none min-h-8 ming-w-8 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 active:scale-[0.99]' title='Maximize'>
								<span className='sr-only'>Maximize</span>
								{isFullscreen ? <Minimize className='size-4 shrink-0' /> : <Maximize className='size-4 shrink-0' />}
							</button>
						</div>
					</div>

					<div className='min-h-0 flex flex-1'>
						<div className='flex flex-col flex-1'>
							<div className='min-h-0 p-8 flex items-center justify-center gap-4 flex-1 overflow-auto'>
								<Result />

								<Result />
							</div>

							<div className='shrink-0 px-6 pb-6'>
								<div className='max-w-[900px] mx-auto'>
									<div className='rounded-2xl border border-white/[0.09] bg-[#111] shadow-xl'>
										<div className='flex items-center gap-3 p-3'>
											<div className='w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0'>
												<svg className='w-4 h-4 text-neutral-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path d='M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' />
												</svg>
											</div>

											<input type='text' placeholder='Ask AI to change something...' className='flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder:text-neutral-600' />

											<button className='w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition'>
												<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path d='M5 12h13M13 6l6 6-6 6' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' />
												</svg>
											</button>
										</div>

										<div className='px-4 pb-3 flex items-center gap-2'>
											<button className='px-2.5 py-1.5 rounded-md bg-white/[0.04] text-[10px] text-neutral-500 hover:text-neutral-300 transition'>Make it larger</button>

											<button className='px-2.5 py-1.5 rounded-md bg-white/[0.04] text-[10px] text-neutral-500 hover:text-neutral-300 transition'>Add a pool</button>

											<button className='px-2.5 py-1.5 rounded-md bg-white/[0.04] text-[10px] text-neutral-500 hover:text-neutral-300 transition'>More modern</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <History /> */}
					</div>
				</main>
			</div>
		</div>
	);
};

export { App };
