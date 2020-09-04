import React, { FormHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	submitCallback: (data: any, errors?: any) => void;
	defaultValues?: ObjectMap<string>;
}

interface FieldProps {
	register: () => void;
	setValue?: (key: string, value: string) => void;
	error: any;
}

const Form: React.FC<FormProps> = ({
	submitCallback,
	defaultValues,
	children,
	...otherProps
}) => {
	const { register, setValue, handleSubmit, errors } = useForm({
		defaultValues: defaultValues,
	});

	//Step through the Form children and attach the Register function
	//to our FormElements, identified with the formKey prop
	const RegisteredChildren = React.Children.toArray(children).map(child => {
		if (React.isValidElement(child) && !!child.props.formKey) {
			const props: FieldProps = {
				register: register,
				error: errors[child.props.formKey]?.message,
			};
			console.log("form element");
			return React.cloneElement(child, props);
		}
		return child;
	});
	

	return (
		<form
			className="app-form"
			onSubmit={handleSubmit(data => submitCallback(data, Object.keys(errors).length ? errors : undefined))}
			{...otherProps}
		>
			{RegisteredChildren}
		</form>
	);
};

export default Form;
