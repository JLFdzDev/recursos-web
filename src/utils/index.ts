import { RequestData } from '@/types'

export async function getData<T>(url: string, options?: RequestInit): Promise<T> {
	const res = await fetch(url, options)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export async function postData<T>(url: string, data: T, options?: RequestInit): Promise<Response | T> {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		...options,
	})

	if (!res.ok) {
		return res
	}

	return res.json()
}

export async function deleteData(url: string, data: string): Promise<Response> {
	const res = await fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: data }),
	})

	if (!res.ok) {
		return res
	}

	return res.json()
}

export function isGetAllFormDataNull(data: unknown[] | null | undefined) {
	if (data == null) return true
	if (data.length === 0) return true

	return data.length === 1 && data[0] === ''
}
