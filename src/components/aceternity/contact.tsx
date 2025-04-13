'use client'
import React from 'react'
import { Label } from './label'
import { Input } from './input'
import { cn } from '../../lib/cn'

export default function Contact() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Form submitted')
	}
	return (
		<div className='mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input md:rounded-2xl md:p-8 dark:bg-black'>
			<h2 className='text-center text-xl font-bold text-neutral-800 dark:text-neutral-200'>
				Contact Us
			</h2>
			<p className='mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300'>
				Have a question or need help? Send us a message, and we'll get back to you soon.
			</p>

			<form className='my-8' onSubmit={handleSubmit}>
				<div className='mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
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
						className='h-32 w-full rounded-md border p-2 dark:border-neutral-600 dark:bg-zinc-900 dark:text-neutral-300'
					></textarea>
				</LabelInputContainer>

				<button
					className='group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
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
			<span className='absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
			<span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-xs transition duration-500 group-hover/btn:opacity-100' />
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
	return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}
