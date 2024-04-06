interface TableProps {
	children: React.ReactNode
}

export const Table = ({ children }: TableProps) => {
	return (
		<div className="overflow-x-auto shadow-md sm:rounded-lg text-light">
			<table className="w-full text-sm text-left">
				{children}
			</table>
		</div>
	)
}
