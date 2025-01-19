'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { getPathname, usePathname, useRouter } from '@/i18n/routing'

export function LangSwitch() {
	const router = useRouter()
	const pathname = usePathname()

	const switchLanguage = (locale: string) => {
		const newPathname = getPathname({
			href: pathname,
			locale,
		})

		router.replace(locale)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Globe className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Globe className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => switchLanguage('en')}>
					En
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchLanguage('ru')}>
					Ru
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
