import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export default function AuthLayout({ children }: PropsWithChildren) {
	return (
		<>
			<div className="flex flex-col items-center justify-center max-w-2xl mx-auto h-screen">
				<div className="w-full bg-darken py-16 px-8 rounded-lg">{children}</div>
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</>
	)
}
