'use client'

import { Button } from '@/components/ui/button'

import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { createUser } from '@/actions/users'
import { toast } from 'react-hot-toast'

const RegisterForm = () => {
	async function createUserClient(formData: FormData) {
		const result = await createUser(formData)

		if (result?.errors) {
			toast.error(result.errors)
		} else {
			toast.success('Usuario creado')
		}
	}

	return (
		<form action={createUserClient} className="grid grid-cols-4 gap-2">
			<input
				name="username"
				type="text"
				className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
				placeholder="Username"
				required
			/>
			<input
				name="email"
				type="email"
				className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
				placeholder="Email"
				required
			/>
			<input
				name="password"
				type="password"
				className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
				placeholder="Password"
				required
			/>
			<input
				name="confirmPassword"
				type="password"
				className={`${INPUT_BASE_CLASSNAME} text-light col-span-full`}
				placeholder="Confirm Password"
				required
			/>
			<Button className="col-span-2 col-start-2">Registro</Button>
		</form>
	)
}

export default RegisterForm
