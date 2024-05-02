import React, { useState } from 'react'
import ProgressIndex from './ProgressIndex';

const StepProgressTest = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

    return (
        <div>
        <h1 className='text-3xl font-bold my-10'>Step Progress bar</h1>
        <ProgressIndex steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}/>
            <div>

            </div>
        </div>
    )
}

export default StepProgressTest
