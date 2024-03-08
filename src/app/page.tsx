import { Header } from '@/components/header'
import { ResourcesList } from '@/components/resources-list'

interface HomeProps {
	searchParams: {
		tag?: string
	}
}

export default function Home ({ searchParams }: HomeProps) {
	return (
		<main className="w-full max-w-screen-xl mx-auto py-10">
			<Header currentFilter={searchParams.tag} />
			<ResourcesList tagFilter={searchParams.tag} />
		</main>
	)
}
