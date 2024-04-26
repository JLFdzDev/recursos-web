'use client'

import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const linkClassName =
	'px-3 py-1 font-semibold rounded-full bg-primary text-light transition-colors duration-500 hover:bg-secondary hover:text-dark hover:bg-primary aria-[current=page]:text-dark aria-[current=page]:bg-secondary aria-disabled:bg-primary/10 aria-disabled:text-primary/20'

export const Pagination = (props: ReactPaginateProps) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathName = usePathname()

	const handlePageClick = (e: { selected: number }) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('page', (e.selected + 1).toString())

		router.push(`${pathName}?${params.toString()}`)
	}

	return (
		props.pageCount > 1 && (
			<ReactPaginate
				onPageChange={handlePageClick}
				className="flex gap-2 justify-center items-center mt-8 border-t border-darken py-4"
				pageLinkClassName={linkClassName}
				nextLinkClassName={`${linkClassName} ml-4`}
				previousLinkClassName={`${linkClassName} mr-4`}
				breakClassName="text-primary"
				nextLabel=">"
				previousLabel="<"
				{...props}
			/>
		)
	)
}
