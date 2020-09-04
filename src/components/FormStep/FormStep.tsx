import React from 'react';
import Form from 'form';
import { useStateValue } from 'StateProvider';

interface FormStepProps {
	active: boolean;
	title: string;
	description?: string;
	formId: string;
	submitCallback: (data: any) => void;
}

const FormStep: React.FC<FormStepProps> = ({ active, formId, title, description, children, submitCallback }) => {
	const [{ currentStep }, setGlobalState] = useStateValue();
	return (
		<div className={`form-step ${active ? 'active' : ''}`}>
			<h2>{title}</h2>
			{description && <p>{description}</p>}
			<Form id={formId} submitCallback={submitCallback}>
				{children}
				<div className="formButtons">
					{currentStep > 1 && (
						<button type="button" onClick={() => setGlobalState({ currentStep: currentStep - 1 })}>Back</button>
					)}
					<button type="submit">Submit</button>
				</div>
			</Form>
		</div>
	);
};

export default FormStep;
