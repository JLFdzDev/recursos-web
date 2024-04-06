import { type ResponseWithNoData } from '@/types'
import { isSuccessResponse } from '@/utils/response'

export const Alert = ({ status, message }: ResponseWithNoData) => {
	const errorClassName = 'bg-secondary text-dark'
	const successClassName = 'bg-primary text-light'

	const statusOk = isSuccessResponse(status)

	return (
		<div className={`py-2 px-4 mb-4 rounded-lg ${(statusOk) ? successClassName : errorClassName}`}>
			<p><span className="font-bold">{(!statusOk) && 'ERROR:'}</span> {message}</p>
		</div>
	)
}
