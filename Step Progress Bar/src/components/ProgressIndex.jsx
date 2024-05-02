import React from 'react'

const ProgressIndex = ({ steps, activeStep, setActiveStep }) => {

    function handlePreviousStep() {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    }

    function handleNextStep() {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }

    function CalcCurrentStepWidth() {
        return `${(100 / (steps.length - 1)) * activeStep}%`;
    }
    console.log(CalcCurrentStepWidth());

    return (
        <div>
            <div className='flex justify-evenly items-center max-w-[80%] m-auto rounded-full border-2'>
                {
                    steps && steps.length > 0 ?
                        steps.map((step, index) => (
                            <div style={{ width: CalcCurrentStepWidth() }}
                                className={` flex-grow-1 flex justify-center items-center h-full text-xl py-2 font-bold rounded-full bg-violet-400 ${index <= activeStep ? " bg-teal-400 text-white" : ""}`}
                                key={index}>
                                {step}
                            </div>
                        ))
                        : null
                }
            </div>
            <div className='max-w-30 flex justify-evenly items-center mt-20'>
                <button disabled={activeStep === 0} onClick={handlePreviousStep} className=' border-2 py-2 px-4 text-xl font-semibold rounded-md'>Previous Step</button>
                <button disabled={activeStep === steps.length - 1} onClick={handleNextStep} className=' border-2 py-2 px-4 text-xl font-semibold rounded-md'>Next Step</button>
            </div>
        </div>
    )
}

export default ProgressIndex
