'use client'
import React from 'react'
import { Label } from './label'
import { Input } from './input'
import { cn } from '../../utils/cn'

export default function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Form submitted')
	}
	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-center text-xl text-neutral-800 dark:text-neutral-200'>
				Contact Us
			</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
				Have a quation or need help? Send us a message, and we'll get back to you soon.
			</p>

			<form className='my-8' onSubmit={handleSubmit}>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='firstname'>First name</Label>
						<Input id='firstname' placeholder='John' type='text' />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor='lastname'>Last name</Label>
						<Input id='lastname' placeholder='Doe' type='text' />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>Email Address</Label>
					<Input id='email' placeholder='johndoe@example.com' type='email' />
				</LabelInputContainer>
				<LabelInputContainer className='mb-8'>
					<Label htmlFor='message'>Message</Label>
					<textarea
						id='message'
						placeholder='Write your message here...'
						className='rounded-md p-2 border dark:border-neutral-600 dark:bg-zinc-900 dark:text-neutral-300 w-full h-32'
					></textarea>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'
				>
					Send Message &rarr;
					<BottomGradient />
				</button>
			</form>
		</div>
	)
}
const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	)
}

const LabelInputContainer = ({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) => {
	return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>
}
