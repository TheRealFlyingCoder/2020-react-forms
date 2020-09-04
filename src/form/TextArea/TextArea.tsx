import React, { TextareaHTMLAttributes } from 'react';
import FormElement from '../FormElement';

interface TextAreaProps extends FormElement, TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = ({
	formKey,
	label,
	register,
	error,
	className,
	...otherProps
}) => {
	const errorId = `${formKey}-error`;

	return (
		<div className={`field-element ${className || ''}`}>
			<label htmlFor={formKey}>{label}</label>
			<textarea
				ref={register ? register() : ''}
				aria-invalid={!!error}
				aria-describedby={errorId}
				id={formKey}
				name={formKey}
				{...otherProps}
			/>
			{!!error && (
				<span className="field-error" id={errorId}>
					{error}
				</span>
			)}
		</div>
	);
};

export default TextArea;
