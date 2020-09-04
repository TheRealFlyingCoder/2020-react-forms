import React, { InputHTMLAttributes } from 'react';
import FormElement from '../FormElement';

interface InputProps extends FormElement, InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<InputProps> = ({
	formKey,
	label,
	type,
	register,
	error,
	className,
	...otherProps
}) => {
	const errorId = `${formKey}-error`;
	return (
		<div className={`field-element ${className || ''}`}>
			<label htmlFor={formKey}>{label}</label>
			<input
				ref={register ? register() : ''}
				aria-invalid={!!error}
				aria-describedby={errorId}
				type={type || 'text'}
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

export default Input;
