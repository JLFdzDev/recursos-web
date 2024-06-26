'use client'

import { Button } from '@/components/ui/button'

import { signOut } from 'next-auth/react'

export const LogOutButton = () => {
	return (
		<Button
			onClick={() =>
				signOut({
					redirect: true,
					callbackUrl: '/',
				})
			}
			size="sm"
		>
			LogOut
		</Button>
	)
}
