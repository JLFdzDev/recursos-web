import clsx from 'clsx'

export const className = 'py-2 px-4 bg-dark border-2 border-darken outline-none rounded-lg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
	return <input {...props} className={clsx(className, props.className)} />
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
	return <textarea {...props} className={clsx(className, 'h-32', props.className)}></textarea>
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = (props: SelectProps) => {
	return <select className={clsx(className)}>{props.children}</select>
}
