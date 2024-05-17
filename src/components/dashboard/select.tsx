'use client'

import { SelectOption } from '@/types'

import ReactSelect from 'react-select'

import { REACT_SELECT_BASE_CLASSNAME } from '@/const/theme'

interface Props {
	defaultValue?: SelectOption[]
	isMulti?: boolean
	name: string
	options: SelectOption[]
	placeholder?: string
}

export const Select = ({ defaultValue, isMulti = false, name, options, placeholder = 'Selecciona uno...' }: Props) => {
	return (
		<ReactSelect
			name={name}
			options={options}
			classNames={REACT_SELECT_BASE_CLASSNAME}
			placeholder={placeholder}
			unstyled
			closeMenuOnSelect={false}
			hideSelectedOptions={false}
			isMulti={isMulti}
			instanceId={name}
			defaultValue={defaultValue}
		/>
	)
}
