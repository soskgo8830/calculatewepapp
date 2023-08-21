'use client';
import React, { useState } from 'react';
import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepThree';
import StepHeader from '@/components/StepHeader';

function CalculatorStep() {
  const [step, setStep] = useState(1);
  const [people, setPeople] = useState([{ id: 1, name: '', isRequired: true }]);
  const [expenses, setExpenses] = useState([
    { id: 1, description: '', amount: '', isRequired: true },
  ]);

  const stepProps = {
    step,
    setStep,
    people,
    setPeople,
  };

  const stepTwoProps = {
    step,
    setStep,
    expenses,
    setExpenses,
  };

  const stepThreeProps = {
    step,
    setStep,
    people,
    expenses,
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
      className='bg-gray-100'
    >
      <div
        style={{ maxWidth: '700px', width: '100%' }}
        className='bg-white p-6 rounded-lg shadow-md m-4'
      >
        <StepHeader step={step} />
        {step === 1 && <StepOne {...stepProps} />}
        {step === 2 && <StepTwo {...stepTwoProps} />}
        {step === 3 && <StepThree {...stepThreeProps} />}
      </div>
    </div>
  );
}

export default CalculatorStep;
