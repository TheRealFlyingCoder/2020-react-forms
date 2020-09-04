import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	register?: () => any,
	formKey: string,
}

const Hidden: React.FC<InputProps> = ({ formKey, register, value, ...otherProps }) => {
	return (
		<input
			ref={register ? register() : ''}
			type="hidden"
			id={formKey}
			defaultValue={value}
			name={formKey}
			{...otherProps}
		/>
	);
};

export default Hidden;
