import bcrypt from 'bcryptjs'

export function hashPassword(password: string) {
	return bcrypt.hash(password, 10)
}

export async function validatePassword(userPassword: string, enteredPassword: string) {
	return bcrypt.compare(enteredPassword, userPassword)
}
