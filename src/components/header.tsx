import { Sun, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
	const toggleTheme = () => {};

	return (
		<header className='h-16 px-5 flex items-center justify-between shrink-0 border-b border-white/8 bg-[#0b0b0b]'>
			<div className='flex items-center gap-8'>
				<Link to='/' className='select-none cursor-pointer flex items-center gap-2.5 shrink-0'>
					<div className='size-8 flex items-center justify-center rounded-lg bg-white'></div>

					<span className='font-semibold tracking-tight'>ArchAI</span>
				</Link>

				<div className='select-none h-5 w-px bg-white/10'></div>

				<div>
					<p className='text-[11px] text-neutral-500 tracking-wider uppercase'>Project</p>
					<p className='font-medium text-sm text-neutral-200'>Modern Villa</p>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<button className='hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/[0.05] transition'>
					<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M12 20h9' />
						<path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z' />
					</svg>
					Rename
				</button>

				<button type='button' onClick={toggleTheme} className='select-none p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5'>
					<Sun className='size-4 shrink-0' />
				</button>

				<button type='button' onClick={() => {}} className='select-none size-10 flex items-center justify-center rounded-full bg-neutral-800 border border-white/10'>
					<span className='sr-only'>GB</span>
					<UserRound className='size-5 shrink-0' />
				</button>
			</div>
		</header>
	);
};

export { Header };
