import { PageParams, SearchParams } from '@/types'

import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { List } from '@/app/dashboard/resources/components/list'
import { ButtonLink } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Suspense } from 'react'

import { count } from '@/db/repository/resources'
import { getLimitFilter, getTotalPages } from '@/utils/pagination'
import { Search } from '../../../components/dashboard/search'

export default async function DashboardResourcesPage({ searchParams: { page = '1', q } }: SearchParams) {
	const totalPages = getTotalPages(await count())
	const limit = getLimitFilter(page)

	return (
		<>
			<div className="flex gap-2 mb-2 items-center">
				<Search />
				<ButtonLink href="/dashboard/resources/add">Nuevo</ButtonLink>
			</div>
			<Suspense fallback={<h1>Cargando</h1>}>
				<List limit={limit} q={q} />
			</Suspense>
			<Pagination pageCount={totalPages} />
		</>
	)
}
