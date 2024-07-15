import { cn } from '../utils/cn'
import React from 'react'
import { BentoGrid, BentoGridItem } from './aceternity/BentoGrid'
import { motion } from 'framer-motion'

export default function Bento() {
	return (
		<BentoGrid className='max-w-5xl mx-auto md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn('[&>p:text-lg]', item.className)}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	)
}

const SkeletonOne = () => {
	return <div className='mt-4'></div>
}
const SkeletonTwo = () => {
	return <div className='mt-4'></div>
}
const SkeletonThree = () => {
	return <div className='mt-4'></div>
}
const SkeletonFour = () => {
	return <div className='mt-4'></div>
}
const SkeletonFive = () => {
	return <div className='mt-4'></div>
}
const items = [
	{
		title: 'About Us',
		description: (
			<span className='text-sm'>
				The official student newspaper of Victoria Park Collegiate Institute.
			</span>
		),
		header: <SkeletonOne />,
		className: 'md:col-span-2',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='flex-shrink-0 size-8 text-blue-600 dark:text-blue-500'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
				<path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
			</svg>
		)
	},
	{
		title: 'Life Board',
		description: (
			<span className='text-sm'>
				Creative writing, poetry, and fictional short stories from our community.
			</span>
		),
		header: <SkeletonTwo />,
		className: 'md:col-span-1',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path>
				<path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
				<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
				<path d='M21 21v-2a4 4 0 0 0 -3 -3.85'></path>
			</svg>
		)
	},
	{
		title: 'News Board',
		description: (
			<span className='text-sm'>
				Stay up-to-date with the latest news and events in our school community!
			</span>
		),
		header: <SkeletonThree />,
		className: 'md:col-span-1',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11'></path>
				<path d='M8 8l4 0'></path>
				<path d='M8 12l4 0'></path>
				<path d='M8 16l4 0'></path>
			</svg>
		)
	},
	{
		title: 'Editorial Board',
		description: (
			<span className='text-sm'>
				Opinion pieces on various topics, ranging from reviews to interviews.
			</span>
		),
		header: <SkeletonFour />,
		className: 'md:col-span-1',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M8 9h8'></path>
				<path d='M8 13h6'></path>
				<path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z'></path>
			</svg>
		)
	},

	{
		title: 'Visual Arts Board',
		description: (
			<span className='text-sm'>
				Artwork, photography, and digital media from our talented student artists. To be featured
				soon.
			</span>
		),
		header: <SkeletonFive />,
		className: 'md:col-span-1',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='2'
				stroke='currentColor'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 21v-4a4 4 0 1 1 4 4h-4'></path>
				<path d='M21 3a16 16 0 0 0 -12.8 10.2'></path>
				<path d='M21 3a16 16 0 0 1 -10.2 12.8'></path>
				<path d='M10.6 9a9 9 0 0 1 4.4 4.4'></path>
			</svg>
		)
	}
]
