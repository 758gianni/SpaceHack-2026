const Preloader = () => {
	return (
		<div className='select-none fixed inset-0 z-9999 flex items-center justify-center bg-[#101010]'>
			<div className='size-6 animate-spin rounded-full border-2 border-white/20 border-t-white' />
		</div>
	);
};

export { Preloader };
