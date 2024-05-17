import { PageParams, SearchParams } from '@/types'

import { Search } from '@/components/dashboard/search'
import { List } from '@/app/dashboard/tags/components/list'
import { ButtonLink } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Suspense } from 'react'

import { count } from '@/db/repository/tags'
import { getLimitFilter, getTotalPages } from '@/utils'

export default async function DashboardTagsPage({ searchParams: { page = '1', q } }: SearchParams) {
	const totalPages = getTotalPages(await count(q))
	const limit = getLimitFilter(page)

	return (
		<>
			<div className="flex gap-2 mb-2 items-center">
				<Search />
				<ButtonLink href="/dashboard/tags/add">Nuevo</ButtonLink>
			</div>
			<Suspense fallback={<h1>Cargando</h1>}>
				<List limit={limit} q={q} />
			</Suspense>
			<Pagination pageCount={totalPages} />
		</>
	)
}
