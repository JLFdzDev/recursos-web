'use client'

import { Button } from '@/components/ui/button'

import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const LoginForm = () => {
	const router = useRouter()

	const handleSignIn = async (formData: FormData) => {
		const res = await signIn('credentials', {
			username: formData.get('username'),
			password: formData.get('password'),
			redirect: false,
			callbackUrl: '/dashboard/resources',
		})

		if (res?.error) {
			toast.error('El email o la contraseña son incorrectos')
		} else {
			router.push('/dashboard/resources')
		}
	}

	return (
		<>
			<div></div>
			<form action={handleSignIn} className="grid grid-cols-4 gap-2">
				<input
					name="username"
					type="text"
					className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
					placeholder="Username or Email"
					required
				/>
				<input
					name="password"
					type="password"
					className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
					placeholder="Password"
					required
				/>
				<Button className="col-span-2 col-start-2">LogIn</Button>
			</form>
		</>
	)
}
