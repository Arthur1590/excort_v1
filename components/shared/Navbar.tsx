import { NextPage } from 'next'
import { Telegram } from './Icons'

export interface Props {
	className?: string
}

export const Navbar: NextPage<Props> = ({ className }) => {
	return (
		<ul className={`${className}`}>
			<li className='flex items-center gap-2'>
				<a
					href='https://t.me/elysianescorts'
					target='_blank'
					rel='noopener noreferrer'
					className='text-[12px]'
				>
					8 (888) 888-88-88
				</a>
				<a
					href='https://t.me/elysianescorts'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Telegram className='h-[36px] w-[36px]' />
				</a>
				<span>24/7</span>
			</li>
		</ul>
	)
}
