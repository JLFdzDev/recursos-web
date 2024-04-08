export const INPUT_BASE_CLASSNAME = 'py-2 px-4 bg-dark border-2 border-darken outline-none rounded-lg'

export const REACT_SELECT_BASE_CLASSNAME = {
	control: () => `relative ${INPUT_BASE_CLASSNAME}`,
	valueContainer: () => 'flex gap-1',
	multiValueLabel: () => 'bg-primary text-light rounded-l-full text-sm px-2 py-0.5',
	multiValueRemove: () =>
		'bg-primary text-light rounded-r-full text-sm px-1 py-0.5 hover:bg-secondary hover:text-primary transition-colors duration-300',
	menu: () => 'bg-dark mt-1 border-darken border-2 rounded-lg overflow-x-hidden overflow-y-auto z-10',
	option: () =>
		'px-4 py-2 hover:bg-primary/50 hover:text-primary transition-colors duration-300 border-b-2 border-darken last:border-b-0',
	indicatorsContainer: () => 'flex justify-between gap-2',
	indicatorSeparator: () => 'bg-darken',
	clearIndicator: () => 'text-secondary',
}
