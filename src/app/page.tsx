import { Header } from './components/header'
import { ResourcesList } from './components/resources-list'

export default function Home() {
	return (
		<main className="w-full max-w-screen-xl mx-auto py-10">
			<Header />
			<ResourcesList />
		</main>
	)
}
