import React, { InputHTMLAttributes } from 'react';
import FormElement from '../FormElement';

interface CheckboxProps extends FormElement, InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({
	formKey,
	label,
	register,
	error,
	className,
	...otherProps
}) => {
	const errorId = `${formKey}-error`;
	return (
		<div className={`field-element checkbox ${className || ''}`}>
			<input
				ref={register ? register() : ''}
				aria-invalid={!!error}
				aria-describedby={errorId}
				type="checkbox"
				id={formKey}
				name={formKey}
				{...otherProps}
			/>
			<label htmlFor={formKey}>{label}</label>
			{!!error && (
				<span className="field-error" id={errorId}>
					{error}
				</span>
			)}
		</div>
	);
};

export default Checkbox;
