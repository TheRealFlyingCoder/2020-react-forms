import React, { SelectHTMLAttributes } from 'react';
import FormElement from '../FormElement';

interface Options {
	value: string | number;
	label?: string;
}

interface SelectProps extends FormElement, SelectHTMLAttributes<HTMLSelectElement> {
	options: Options[];
}

const Select: React.FC<SelectProps> = ({
	formKey,
	label,
	register,
	error,
	className,
	options,
	...otherProps
}) => {
	const errorId = `${formKey}-error`;

	return (
		<div className={`field-element ${className || ''}`}>
			<label htmlFor={formKey}>{label}</label>
			<select
				ref={register ? register() : ''}
				aria-invalid={!!error}
				aria-describedby={errorId}
				id={formKey}
				defaultValue=""
				name={formKey}
				{...otherProps}
			>
				<option value="" disabled>
					- Please select -
				</option>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label || value}
					</option>
				))}
			</select>
			{!!error && (
				<span className="field-error no-icon" id={errorId}>
					{error}
				</span>
			)}
		</div>
	);
};

export default Select;
