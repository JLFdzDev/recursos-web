import { type DBLimit } from '@/types'

import { ITEMS_PER_PAGE } from '@/const/config'

export function getTotalPages(totalItems: number) {
	return Math.ceil(totalItems / ITEMS_PER_PAGE)
}

export function getLimitFilter(page?: string): DBLimit | undefined {
	if (page == null) return

	return {
		page: parseInt(page),
		take: ITEMS_PER_PAGE,
	}
}
