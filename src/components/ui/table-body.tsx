interface TbodyProps {
	children: React.ReactNode
}

export const Tbody = ({ children }: TbodyProps) => {
	return (
		<tbody>
			{children}
		</tbody>
	)
}
