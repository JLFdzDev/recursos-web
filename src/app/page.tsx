import { Header } from '@/components/header'
import { ResourcesList } from '@/components/resources-list'
import { Navbar } from '@/components/dashboard/navbar'
import { Pagination } from '@/components/ui/pagination'
import { Suspense } from 'react'

import { count } from '@/db/repository/resources'

import { auth } from '@/auth'
import { getLimitFilter, getTotalPages } from '@/utils/pagination'

interface HomeProps {
	searchParams: {
		tag?: string
		page?: string
	}
}

export default async function Home({ searchParams: { tag, page = '1' } }: HomeProps) {
	const session = await auth()

	const totalPages = getTotalPages(await count())
	const limit = getLimitFilter(page)

	return (
		<main className="w-full max-w-screen-xl mx-auto py-10">
			{session != null && (
				<>
					<Navbar />
					<div className="mb-6" />
				</>
			)}
			<Header currentFilter={tag} />
			<Suspense fallback={<h1>Cargando</h1>}>
				<ResourcesList tagFilter={tag} limit={limit} />
			</Suspense>
			<Pagination pageCount={totalPages} />
		</main>
	)
}
