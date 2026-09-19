const Sidebar = () => {
	return (
		<aside className='w-[350px] shrink-0 border-r border-white/[0.08] bg-[#101010] flex flex-col'>
			{/* Sidebar header */}
			<div className='px-5 py-5 border-b border-white/[0.06]'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='font-semibold text-[15px]'>Design your home</h1>
						<p className='text-xs text-neutral-500 mt-1'>Describe what you want to build.</p>
					</div>

					<button className='w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/[0.05] transition'>
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M12 5v14M5 12h14' />
						</svg>
					</button>
				</div>
			</div>

			{/* Controls */}
			<div className='flex-1 overflow-y-auto px-5 py-5 space-y-6'>
				{/* Description */}
				<div>
					<div className='flex items-center justify-between mb-2'>
						<label className='text-xs font-medium text-neutral-300'> Describe your home </label>

						<span className='text-[10px] text-neutral-600'> AI </span>
					</div>

					<div className='relative'>
						<textarea rows='6' placeholder='A modern tropical villa with large glass walls, an infinity pool, outdoor kitchen, natural stone and lots of privacy...' className='w-full resize-none rounded-xl border border-white/[0.09] bg-[#171717] px-3.5 py-3.5 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-white/20 transition'></textarea>

						<div className='absolute bottom-3 right-3 text-[10px] text-neutral-600'>0 / 1000</div>
					</div>
				</div>

				{/* Location */}
				<div>
					<label className='block text-xs font-medium text-neutral-300 mb-2'> Location </label>

					<div className='relative'>
						<svg className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z' />
							<circle cx='12' cy='9' r='2.3' stroke-width='1.8' />
						</svg>

						<input type='text' value='Saint Lucia' className='w-full h-11 rounded-xl border border-white/[0.09] bg-[#171717] pl-10 pr-3 text-sm text-neutral-300 outline-none focus:border-white/20 transition' />
					</div>
				</div>

				{/* Bedrooms */}
				<div>
					<label className='block text-xs font-medium text-neutral-300 mb-2'> Bedrooms </label>

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
				</div>

				{/* Bathrooms */}
				<div>
					<label className='block text-xs font-medium text-neutral-300 mb-2'> Bathrooms </label>

					<div className='grid grid-cols-4 gap-2'>
						<button className='h-10 rounded-lg border border-white/[0.08] bg-[#171717] text-xs text-neutral-400 hover:text-white hover:border-white/20 transition'>1</button>

						<button className='h-10 rounded-lg border border-white/20 bg-white text-black text-xs font-medium'>2</button>

						<button className='h-10 rounded-lg border border-white/[0.08] bg-[#171717] text-xs text-neutral-400 hover:text-white hover:border-white/20 transition'>3</button>

						<button className='h-10 rounded-lg border border-white/[0.08] bg-[#171717] text-xs text-neutral-400 hover:text-white hover:border-white/20 transition'>4+</button>
					</div>
				</div>

				{/* Style */}
				<div>
					<label className='block text-xs font-medium text-neutral-300 mb-2'> Architectural style </label>

					<div className='grid grid-cols-2 gap-2'>
						<button className='group h-20 rounded-xl border border-white/20 bg-white/[0.06] p-3 text-left relative overflow-hidden'>
							<div className='absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent'></div>

							<div className='relative'>
								<p className='text-xs font-medium text-white'>Modern</p>
								<p className='text-[10px] text-neutral-500 mt-1'>Clean & minimal</p>
							</div>

							<div className='absolute right-2.5 top-2.5 w-3 h-3 rounded-full border border-white flex items-center justify-center'>
								<div className='w-1.5 h-1.5 rounded-full bg-white'></div>
							</div>
						</button>

						<button className='h-20 rounded-xl border border-white/[0.08] bg-[#171717] p-3 text-left hover:border-white/20 transition'>
							<p className='text-xs font-medium text-neutral-300'>Tropical</p>
							<p className='text-[10px] text-neutral-600 mt-1'>Natural & open</p>
						</button>

						<button className='h-20 rounded-xl border border-white/[0.08] bg-[#171717] p-3 text-left hover:border-white/20 transition'>
							<p className='text-xs font-medium text-neutral-300'>Mediterranean</p>
							<p className='text-[10px] text-neutral-600 mt-1'>Warm & timeless</p>
						</button>

						<button className='h-20 rounded-xl border border-white/[0.08] bg-[#171717] p-3 text-left hover:border-white/20 transition'>
							<p className='text-xs font-medium text-neutral-300'>Contemporary</p>
							<p className='text-[10px] text-neutral-600 mt-1'>Bold & refined</p>
						</button>
					</div>
				</div>

				{/* Budget */}
				<div>
					<label className='block text-xs font-medium text-neutral-300 mb-2'> Estimated budget </label>

					<select className='w-full h-11 rounded-xl border border-white/[0.09] bg-[#171717] px-3 text-sm text-neutral-300 outline-none focus:border-white/20 appearance-none'>
						<option>$250k – $500k</option>
						<option>$500k – $750k</option>
						<option>$750k – $1M</option>
						<option>$1M+</option>
					</select>
				</div>
			</div>

			{/* Generate */}
			<div className='p-5 border-t border-white/[0.06]'>
				<button className='w-full h-12 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 active:scale-[0.99] transition flex items-center justify-center gap-2'>
					<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z' />
					</svg>
					Generate design
				</button>

				<p className='text-[10px] text-center text-neutral-600 mt-2.5'>AI-generated concepts are for visualization only.</p>
			</div>
		</aside>
	);
};

export { Sidebar };
