import React, { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'

export default function HoverBorderGradient({
	children,
	containerClassName,
	className,
	as: Tag = 'button',
	duration = 1,
	clockwise = true,
	...props
}: React.PropsWithChildren<
	{
		as?: React.ElementType
		containerClassName?: string
		className?: string
		duration?: number
		clockwise?: boolean
	} & React.HTMLAttributes<HTMLElement>
>) {
	const [hovered, setHovered] = useState<boolean>(false)
	const [direction, setDirection] = useState<Direction>('TOP')

	const rotateDirection = (currentDirection: Direction): Direction => {
		const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
		const currentIndex = directions.indexOf(currentDirection)
		const nextIndex = clockwise
			? (currentIndex - 1 + directions.length) % directions.length
			: (currentIndex + 1) % directions.length
		return directions[nextIndex]
	}

	const movingMap: Record<Direction, string> = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%, var(--secondary) 0%, rgba(255, 255, 255, 0) 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, var(--secondary) 0%, rgba(255, 255, 255, 0) 100%)',
		BOTTOM:
			'radial-gradient(20.7% 50% at 50% 100%, var(--secondary) 0%, rgba(255, 255, 255, 0) 100%)',
		RIGHT:
			'radial-gradient(16.2% 41.199999999999996% at 100% 50%, var(--secondary) 0%, rgba(255, 255, 255, 0) 100%)'
	}

	const highlight =
		'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--primary) 0%, rgba(255, 165, 0, 0) 100%)'

	useEffect(() => {
		if (!hovered) {
			const interval = setInterval(() => {
				setDirection((prevState) => rotateDirection(prevState))
			}, duration * 1000)
			return () => clearInterval(interval)
		}
	}, [hovered])
	return (
		<Tag
			onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
				setHovered(true)
			}}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				'relative flex h-min flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full bg-black/20 box-decoration-clone p-px transition duration-500 dark:bg-white/20',
				containerClassName
			)}
			{...props}
		>
			<div
				className={cn(
					'z-10 w-full rounded-[inherit] bg-zinc-200 px-4 py-2 dark:bg-zinc-900 dark:text-white',
					className
				)}
			>
				{children}
			</div>
			{localStorage.getItem('animations') === 'true' ? (
				<motion.div
					className={cn('absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]')}
					style={{
						filter: 'blur(2px)',
						position: 'absolute',
						width: '100%',
						height: '100%'
					}}
					initial={{ background: movingMap[direction] }}
					animate={{
						background: hovered ? [movingMap[direction], highlight] : movingMap[direction]
					}}
					transition={{ ease: 'linear', duration: duration ?? 1 }}
				/>
			) : null}
			<div className='absolute inset-[2px] z-1 flex-none rounded-[100px] bg-zinc-200 dark:bg-zinc-900' />
		</Tag>
	)
}
