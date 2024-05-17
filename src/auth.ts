import NextAuth, { CredentialsSignin } from 'next-auth'

import { validatePassword } from '@/utils'
import CredentialsProvider from 'next-auth/providers/credentials'
import { findByUsernameOrEmail } from './db/repository/users'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {},
				password: {},
			},
			authorize: async (credentials) => {
				const user = await findByUsernameOrEmail(credentials.username as string)

				if (user) {
					const isPasswordValid = await validatePassword(user.password, credentials.password as string)

					if (isPasswordValid) {
						return {
							id: user.id,
							name: user.username,
							email: user.email,
						}
					}
				}

				throw new CredentialsSignin()
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
})
