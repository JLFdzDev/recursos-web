'use client'

import React from 'react'

import { INPUT_BASE_CLASSNAME } from '@/const/theme'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export const Search = () => {
	const router = useRouter()
	const params = useSearchParams()
	const pathname = usePathname()

	const handleChange = useDebouncedCallback((value: string) => {
		const searchParams = new URLSearchParams(params)

		if (value === '') {
			searchParams.delete('q')
		} else {
			searchParams.set('q', value)
		}

		searchParams.delete('page')

		router.push(`${pathname}?${searchParams.toString()}`)
	}, 500)

	return (
		<input
			type="text"
			placeholder="Search..."
			className={`${INPUT_BASE_CLASSNAME} flex-1`}
			onChange={(e) => handleChange(e.target.value)}
		/>
	)
}
