'use client'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Hover, MotionDiv } from '@/components/ui/Motion'
import Image from 'next/image'
import { Logo } from '@/components/shared/Icons'
import { InfiniteSlider } from '@/components/shared/InfiniteSlider'

export default function Home() {
	const t = useTranslations('Home')

	return (
		<section className='w-full h-full'>
			<Container className='pb-[1rem] relative'>
				<MotionDiv className='w-full relative'>
					<figure className='flex flex-col gap-4 items-center justify-center w-full h-full relative mt-[1rem]'>
						<Image
							width={550}
							height={550}
							src={'/girl.jpg'}
							alt='girl'
							className='absolute top-0 left-[50%] translate-x-[-50%] object-cover brightness-50 shadow-[0_0_35px] shadow-[#00ffffb3] rounded-[50%] z-[50] aspect-square'
						/>
						<article className='flex gap-[1.5rem] sm:gap-4 flex-col items-center justify-start z-[999] rounded-lg mt-[1rem] sm:mt-[7rem]'>
							<a
								href='https://t.me/elysianescorts'
								rel='noopener noreferrer'
								target='_blank'
							>
								<Logo className='max-h-[30px] sm:max-h-[50px]' />
							</a>
							<h1 className='text-[#fff] font-medium text-center text-[16px] lg:text-2xl md:text-3xl'>
								{t('vip')}
							</h1>
							<span className='max-w-[35%] sm:max-w-[50%] w-full min-h-[1px] max-h-[1px] bg-gray-800'></span>
							<h3 className='text-[#fff] font-medium text-center text-[12px] lg:text-lg md:text-xl max-w-[60%]'>
								{t('forthem')}
							</h3>

							<Hover className='sm:mt-[4rem]'>
								<a
									href='https://t.me/elysianescorts'
									target='_blank'
									rel='noopener noreferrer'
									className='w-fit h-fit '
								>
									<Button
										variant={'default'}
										className=' bg-[#26A5E4] text-[12px] xl:text-[27px] text-[#fff] sm:py-[1.5rem]'
									>
										{t('deal')}{' '}
										<Send
											strokeWidth={2}
											className='min-h-[25px] min-w-[25px]'
										/>
									</Button>
								</a>
							</Hover>
						</article>
					</figure>
					<InfiniteSlider
						delay={3000}
						classname='sm:block hidden !absolute top-[-2.5rem] blur-[7.5px] mt-[2.5rem]'
					/>
					<InfiniteSlider
						delay={2000}
						classname='sm:block hidden !static blur-[7.5px] mt-[2.5rem]'
					/>
					<InfiniteSlider classname='sm:hidden block absolute top-[-10.5rem] blur-[1.5px] sm!static sm:blur-[2px] mt-[2.5rem]' />
					<InfiniteSlider classname='sm:hidden block absolute top-[.5rem] blur-[1.5px] sm!static sm:blur-[2px] mt-[2.5rem]' />
					<InfiniteSlider classname='sm:hidden block absolute top-[10.5rem] blur-[1.5px] sm!static sm:blur-[2px] mt-[2.5rem]' />
				</MotionDiv>
			</Container>
		</section>
	)
}
