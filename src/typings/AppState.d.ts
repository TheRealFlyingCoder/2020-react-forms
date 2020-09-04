interface AppState {
    persistenceId?: string,
    currentStep: number,
    stepOneData: StepOne | null,
    stepTwoData: StepTwo | null,
    stepThreeData: StepThree | null
}

interface StepOne {
    fName: string,
}

interface StepTwo {
    lName: string,
}

interface StepThree {
    email: string,
}