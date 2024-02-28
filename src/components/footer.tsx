import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<Link href={'/'}>
					<Image
						src={'/logo.png'}
						alt={'logo'}
						width={150}
						height={40}
					/>
				</Link>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© 2022 Mory —
					<a
						href='https://twitter.com/knyttneve'
						className='text-gray-600 ml-1'
						rel='noopener noreferrer'
						target='_blank'
					>
						@Moriarty_09
					</a>
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a href='https://www.facebook.com/asadbek.muydinov.56?mibextid=ZbWKwL' className='text-gray-500'>
						<svg
							fill='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
						</svg>
					</a>
					<a href='https://t.me/Moriarty_09' className='ml-3 text-gray-500'>
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							width="20" 
							height="20" 
							fill="currentColor" 
							className="bi bi-telegram" 
							viewBox="0 0 16 16"> 
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> 
						</svg>
					</a>
					<a href='https://instagram.com/moriarty_0909?igshid=OGQ5ZDc2ODk2ZA==' className='ml-3 text-gray-500'>
						<svg
							fill='none'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<rect
								width='20'
								height='20'
								x='2'
								y='2'
								rx='5'
								ry='5'
							></rect>
							<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
						</svg>
					</a>
					<a href='https://www.linkedin.com/in/moriarty09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='0'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path
								stroke='none'
								d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
							></path>
							<circle cx='4' cy='4' r='2' stroke='none'></circle>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;