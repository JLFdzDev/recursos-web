export function isGetAllFormDataNull(data: unknown[] | null | undefined) {
	if (data == null) return true
	if (data.length === 0) return true

	return data.length === 1 && data[0] === ''
}
