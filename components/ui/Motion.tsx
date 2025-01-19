import * as motion from 'motion/react-client'

interface Props {
	children: React.ReactNode
	className?: string
}
export const Hover = ({ children, className }: Props) => {
	return (
		<motion.div
			className={`w-fit h-fit ${className}`}
			whileHover={{ scale: 1.2, rotate: 3 }}
			whileTap={{ scale: 0.8 }}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 17,
			}}
		>
			{children}
		</motion.div>
	)
}
export const MotionDiv = ({ children, className }: Props) => {
	return (
		<motion.div
			className={` ${className}`}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100 }}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 17,
			}}
		>
			{children}
		</motion.div>
	)
}
