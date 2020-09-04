import React, { useState } from 'react';
import { useStateValue } from 'StateProvider';
import styles from './ProgressBar.styles';

const ProgressBar: React.FC<{ steps: string[] }> = ({ steps }) => {
	const [{ currentStep }, setGlobalState] = useStateValue();
	const [open, setOpen] = useState<boolean>(false);

	const getStep = (step: number, label: string): JSX.Element => (
		<li key={label} className={step < currentStep ? 'complete' : step === currentStep ? 'current' : ''}>
			<span className="step">{step}</span>
			{step < currentStep ? (
				<button onClick={() => setGlobalState({ currentStep: step })}>{label}</button>
			) : (
				label
			)}
		</li>
	);

	return (
		<div css={styles(open)}>
			<div className="indicator">
				<div className="step">
					<label htmlFor="requestProgress">
						<span>{currentStep}</span> of {steps.length}
					</label>
					<progress id="requestProgress" value={currentStep} max={steps.length}>
						{100 * (steps.length / currentStep)}%
					</progress>
				</div>
				<p className="step-title">{steps[currentStep - 1]}</p>
				<button className="dropdown" onClick={() => setOpen(!open)} type="button">
					View Steps
				</button>
			</div>
			<ol className="step-list">{steps.map((step, index) => getStep(index + 1, step))}</ol>
		</div>
	);
};

export default ProgressBar;
