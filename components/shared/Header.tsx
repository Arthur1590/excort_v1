import React from 'react'
import { ThemeSwitch } from '../ui/ThemeSwitch'
import { Navbar } from './Navbar'
import { Container } from './Container'
import { LangSwitch } from '../ui/LangSwitch'

export const Header = () => {
	return (
		<Container>
			<header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 py-[1rem] lg:px-8 rounded-b-lg'>
				<div className='flex items-center justify-center gap-4'>
					<Navbar className='flex items-center gap-4' />
					<LangSwitch />
					<ThemeSwitch />
				</div>
			</header>
		</Container>
	)
}
