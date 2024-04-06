interface TheadProps {
	children: React.ReactNode
}

export const Thead = ({ children }: TheadProps) => {
	return (
		<thead className="bg-darken text-sm uppercase">
			<tr>
				{children}
			</tr>
		</thead>
	)
}
