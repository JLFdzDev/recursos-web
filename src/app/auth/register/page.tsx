import RegisterForm from '@/app/auth/register/components/form'
import { Toaster } from 'react-hot-toast'

export default function RegisterPage() {
	return (
		<>
			<div className="flex flex-col items-center justify-center max-w-2xl mx-auto h-screen">
				<div className="w-full bg-darken py-16 px-8 rounded-lg">
					<h1 className="mb-6 text-2xl font-bold text-light text-center">Nuevo Usuario</h1>
					<RegisterForm />
				</div>
			</div>

			<Toaster position="bottom-right" reverseOrder={false} />
		</>
	)
}
