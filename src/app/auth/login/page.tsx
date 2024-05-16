import { LoginForm } from './components/form'

export default async function LoginPage() {
	return (
		<>
			<h1 className="mb-6 text-2xl font-bold text-light text-center">LogIn</h1>
			<LoginForm />
		</>
	)
}
