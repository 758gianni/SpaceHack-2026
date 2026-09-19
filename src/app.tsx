import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

const App = () => {
	return (
		<div className='h-screen flex flex-col'>
			<Header />

			<div className='min-h-0 flex flex-1'>
				<Sidebar />

				{/* CANVAS */}
				<main className='flex-1 min-w-0 bg-[#080808] flex flex-col'>
					{/* Canvas toolbar */}
					<div className='h-14 shrink-0 border-b border-white/[0.06] flex items-center justify-between px-5'>
						<div className='flex items-center gap-1'>
							<button className='px-3 py-1.5 rounded-lg bg-white/[0.07] text-xs text-white'>Exterior</button>

							<button className='px-3 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-white hover:bg-white/[0.04] transition'>Floor plan</button>

							<button className='px-3 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-white hover:bg-white/[0.04] transition'>Interior</button>

							<button className='px-3 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-white hover:bg-white/[0.04] transition'>Site plan</button>
						</div>

						<div className='flex items-center gap-1'>
							<button className='p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.05] transition' title='Undo'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path d='M9 14l-4-4 4-4' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' />
									<path d='M5 10h9a5 5 0 015 5v1' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
								</svg>
							</button>

							<button className='p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.05] transition' title='Redo'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path d='M15 14l4-4-4-4' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' />
									<path d='M19 10h-9a5 5 0 00-5 5v1' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
								</svg>
							</button>

							<div className='h-5 w-px bg-white/[0.08] mx-1'></div>

							<button className='p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.05] transition'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path d='M12 3v12M7 10l5 5 5-5' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' />
									<path d='M5 21h14' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
								</svg>
							</button>

							<button className='p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.05] transition'>
								<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path d='M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' />
								</svg>
							</button>
						</div>
					</div>

					{/* Design area */}
					<div className='flex-1 min-h-0 flex items-center justify-center p-8 overflow-auto'>
						<div className='w-full max-w-[1100px] aspect-[16/10] rounded-2xl border border-white/[0.08] bg-[#111] relative overflow-hidden shadow-2xl'>
							{/* EMPTY STATE */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='text-center max-w-sm px-6'>
									<div className='mx-auto w-16 h-16 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-5'>
										<svg className='w-7 h-7 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.4' d='M3 20h18M5 20V9l7-5 7 5v11M8 20v-6h8v6' />
										</svg>
									</div>

									<h2 className='text-lg font-medium text-neutral-300'>Your design will appear here</h2>

									<p className='text-sm text-neutral-600 mt-2 leading-relaxed'>Describe your dream home and we'll turn your ideas into a detailed architectural concept.</p>
								</div>
							</div>

							{/* Image overlay example */}
							{/*
                        <img
                            src="YOUR_GENERATED_IMAGE_URL"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Generated house design"
                        />
						*/}

							{/* Image controls */}
							<div className='absolute top-4 right-4 flex gap-2'>
								<button className='w-9 h-9 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition'>
									<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path d='M4 8V5a1 1 0 011-1h3M20 8V5a1 1 0 00-1-1h-3M4 16v3a1 1 0 001 1h3M20 16v3a1 1 0 01-1 1h-3' stroke='currentColor' stroke-width='1.7' stroke-linecap='round' />
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* AI refinement bar */}
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
				</main>
			</div>
		</div>
	);
};

export { App };
