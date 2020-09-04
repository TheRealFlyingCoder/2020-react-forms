import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useStateValue } from 'StateProvider';
import styles from './Home.styles';
import ProgressBar from 'components/ProgressBar';
import FormStep from 'components/FormStep';
import { Input } from 'form';
import Routes from 'Routes';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
	const [{ currentStep }, setGlobalState] = useStateValue();

	const stepOneSubmit = (data: StepOne): void => {
		setGlobalState({ stepOneData: data, currentStep: currentStep + 1 });
	};

	const stepTwoSubmit = (data: StepTwo): void => {
		setGlobalState({ stepTwoData: data, currentStep: currentStep + 1 });
	};

	const stepThreeSubmit = (data: StepThree): void => {
		setGlobalState({ stepThreeData: data });
		history.push(Routes.Submit.path)
	};

	return (
		<main css={styles}>
			<ProgressBar steps={['Step 1', 'Step 2', 'Step 3']} />
			<div className="form-window">
				<FormStep formId="stepOne" title="Step One" active={currentStep === 1} submitCallback={stepOneSubmit}>
					<Input formKey="fName" autoComplete="given-name" label="First name" />
				</FormStep>
				<FormStep formId="stepTwo" title="Step Two" active={currentStep === 2} submitCallback={stepTwoSubmit}>
					<Input formKey="lName" autoComplete="family-name" label="Last name" />
				</FormStep>
				<FormStep formId="stepThree" title="Step Three" active={currentStep === 3} submitCallback={stepThreeSubmit}>
					<Input formKey="email" type="email" autoComplete="email" label="Email" />
				</FormStep>
			</div>
		</main>
	);
};

export default Home;
