import { Header } from '@/components/header';
import { Preloader } from '@/components/preloader';
import { Results } from '@/components/results';
import { Sidebar } from '@/components/sidebar';
import { ArrowDownToLine, Maximize, Minimize, Redo, Undo } from 'lucide-react';
import { useEffect, useState } from 'react';

const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
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

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <Preloader />;
	}

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
						<Results />
					</div>
				</main>
			</div>
		</div>
	);
};

export { App };
