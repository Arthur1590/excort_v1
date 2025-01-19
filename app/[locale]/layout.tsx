import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next'
import { Theme_Provider } from './Theme_Provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { redirect } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { Header } from '@/components/shared'

export const metadata: Metadata = {
	title: 'brand name | VIP Escort',
	description:
		'SEO for your website in order to get more traffic and be seen by more people.',
	keywords: 'VIP Escort, luxury escort, escort services, premium escort',
	robots: 'index, follow',
}

const railway = Raleway({
	variable: '--font-railway',
	subsets: ['latin'],
})

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!routing.locales.includes(locale as any)) {
		redirect(`/${routing.defaultLocale}`)
	}
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${railway.className} antialiased min-h-svh w-full overflow-x-hidden text-primary`}
			>
				<NextIntlClientProvider messages={messages}>
					<Theme_Provider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<div className='relative min-h-svh w-full flex flex-col justify-between'>
							<Header />
							<main className='flex-1 '>{children}</main>
						</div>
					</Theme_Provider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}
