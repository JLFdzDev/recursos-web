import { DBLimit } from '@/types'

export function getLimit(limit?: DBLimit) {
	if (limit == null) return

	return {
		skip: (limit.page - 1) * limit.take,
		take: limit.take,
	}
}
