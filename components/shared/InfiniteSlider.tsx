'use client'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import Image from 'next/image'

const slides = [
	{
		pic: '/slider/q.jpg',
	},
	{
		pic: '/slider/w.jpg',
	},
	{
		pic: '/slider/e.jpg',
	},
	{
		pic: '/slider/r.jpg',
	},
]
export const InfiniteSlider = ({
	classname,
	delay = 1000,
}: {
	classname?: string
	delay?: number
}) => {
	return (
		<div className={`w-full bg-transparent -z-50 blur-md  ${classname}`}>
			<a
				href='https://t.me/elysianescorts'
				rel='noopener noreferrer'
				target='_blank'
			>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					slidesPerView={3}
					loop={true}
					autoplay={{
						delay: delay,
						disableOnInteraction: false,
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className='h-full w-full flex items-center justify-center  rounded-lg overflow-hidden max-h-[500px]'>
								<Image
									width={1920}
									height={1080}
									src={`${slide.pic}`}
									alt='girl'
									className='w-full h-full object-cover'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</a>
		</div>
	)
}
