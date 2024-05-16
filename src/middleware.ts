import { auth } from '@/auth'

const PROTECTED_PATHS = ['/dashboard', '/auth/register']

export default auth((req) => {
	if (
		PROTECTED_PATHS.some((path) => {
			return req.nextUrl.pathname.startsWith(path)
		})
	) {
		if (!req.auth) {
			const url = req.url.replace(req.nextUrl.pathname, '/auth/login')
			return Response.redirect(url)
		}
	}
})
