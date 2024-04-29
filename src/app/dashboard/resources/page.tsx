import { PageParams } from '@/types'

import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { List } from '@/app/dashboard/resources/components/list'
import { ButtonLink } from '@/components/button'
import { Pagination } from '@/components/pagination'
import { Suspense } from 'react'

import { count } from '@/db/repository/resources'
import { getLimitFilter, getTotalPages } from '@/utils'

export default async function DashboardResourcesPage({ searchParams: { page = '1' } }: PageParams) {
	const totalPages = getTotalPages(await count())
	const limit = getLimitFilter(page)

	return (
		<>
			<div className="flex gap-2 mb-2 items-center">
				<input type="text" placeholder="Search..." className={`${INPUT_BASE_CLASSNAME} flex-1`} />
				<ButtonLink href="/dashboard/resources/add">Nuevo</ButtonLink>
			</div>
			<Suspense fallback={<h1>Cargando</h1>}>
				<List limit={limit} />
			</Suspense>
			<Pagination pageCount={totalPages} />
		</>
	)
}
