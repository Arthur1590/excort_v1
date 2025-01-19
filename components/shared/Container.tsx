import { NextPage } from 'next'
import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}
export const Container: NextPage<Props> = ({ children, className }) => {
	return (
		<div className={`container mx-auto px-6 sm:px-0 ${className}`}>
			{children}
		</div>
	)
}

