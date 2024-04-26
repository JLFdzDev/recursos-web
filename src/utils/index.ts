import { ITEMS_PER_PAGE } from '@/const'
import { DBLimit } from '@/types'

export function isGetAllFormDataNull(data: unknown[] | null | undefined) {
	if (data == null) return true
	if (data.length === 0) return true

	return data.length === 1 && data[0] === ''
}

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
