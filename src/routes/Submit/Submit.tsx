import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Submit.styles';
import { useStateValue } from 'StateProvider';

const Submit: React.FC<RouteComponentProps> = () => {
    const [{stepOneData, stepThreeData, stepTwoData}] = useStateValue();
    
    return (
        <main css={styles}>
            <h1>Submit</h1>
            <p>form data:</p>
            <p>First Name: {stepOneData?.fName}</p>
            <p>Last Name: {stepTwoData?.lName}</p>
            <p>Email: {stepThreeData?.email}</p>
        </main>
    );    
};

export default Submit;