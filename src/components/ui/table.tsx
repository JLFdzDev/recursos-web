import clsx from 'clsx'

/**
 ** ********************************************************************
 ** Table
 ** ********************************************************************
 */
interface TableProps {
	children: React.ReactNode
}

export const Table = ({ children }: TableProps) => {
	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg text-light">
			<table className="w-full text-sm text-left">{children}</table>
		</div>
	)
}

/**
 ** ********************************************************************
 ** Thead
 ** ********************************************************************
 */
interface TheadProps {
	children: React.ReactNode
}

export const Thead = ({ children }: TheadProps) => {
	return (
		<thead className="bg-darken text-sm uppercase">
			<tr>{children}</tr>
		</thead>
	)
}

/**
 ** ********************************************************************
 ** Tbody
 ** ********************************************************************
 */
interface TbodyProps {
	children: React.ReactNode
}

export const Tbody = ({ children }: TbodyProps) => {
	return <tbody>{children}</tbody>
}

/**
 ** ********************************************************************
 ** Th
 ** ********************************************************************
 */
interface ThProps {
	className?: string
	children: React.ReactNode
}

export const Th = ({ className, children }: ThProps) => {
	return (
		<th scope="col" className={clsx('px-6 py-3', className)}>
			{children}
		</th>
	)
}

/**
 ** ********************************************************************
 ** Tr
 ** ********************************************************************
 */
interface TrProps {
	className?: string
	children: React.ReactNode
}

export const Tr = ({ className, children }: TrProps) => {
	return <tr className={clsx('border-b border-darken/50', 'last:border-b-0', className)}>{children}</tr>
}

/**
 ** ********************************************************************
 ** Td
 ** ********************************************************************
 */
interface TdProps {
	className?: string
	children: React.ReactNode
}

export const Td = ({ className, children }: TdProps) => {
	return <td className={clsx('px-6 py-4', className)}>{children}</td>
}
