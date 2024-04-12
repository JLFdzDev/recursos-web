import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { List } from '@/app/dashboard/resources/components/list'
import { ButtonLink } from '@/components/button'
import { Suspense } from 'react'

export default function DashboardResourcesPage() {
	return (
		<>
			<div className="flex gap-2 mb-2 items-center">
				<input type="text" placeholder="Search..." className={`${INPUT_BASE_CLASSNAME} flex-1`} />
				<ButtonLink href="/dashboard/resources/add">Nuevo</ButtonLink>
			</div>
			<Suspense fallback={<h1>Cargando</h1>}>
				<List />
			</Suspense>
		</>
	)
}
