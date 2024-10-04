import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export const ZoomCard = ({
	children,
	containerClassName,
	className
}: {
	children: React.ReactNode
	containerClassName?: string
	className?: string
}) => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<motion.section
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => {
				setIsHovering(false)
			}}
			className={cn(
				'mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden',
				containerClassName
			)}
		>
			<div
				className='relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden'
				style={{
					boxShadow:
						'0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)'
				}}
			>
				<motion.div
					style={{
						transform: isHovering
							? `scale3d(1.03, 1.03, 1)`
							: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
						transition: 'transform 0.1s ease-out'
					}}
					className={cn('h-full px-4 py-9 sm:px-9', className)}
				>
					<Noise />
					{children}
				</motion.div>
			</div>
		</motion.section>
	)
}

const Noise = () => {
	return (
		<div
			className='absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]'
			style={{
				backgroundImage: 'url(/noise.webp)',
				backgroundSize: '30%'
			}}
		></div>
	)
}

export default ZoomCard
