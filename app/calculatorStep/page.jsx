/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';

import StepOne from '@/components/StepOne';
import StepTwo from '@/components/StepTwo';
import StepThree from '@/components/StepThree';
import StepHeader from '@/components/StepHeader';

function calculatorStep() {
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
    <div>
      <StepHeader step={step}></StepHeader>
      {step === 1 && <StepOne {...stepProps} />}
      {step === 2 && <StepTwo {...stepTwoProps} />}
      {step === 3 && <StepThree {...stepThreeProps} />}
    </div>
  );
}

export default calculatorStep;
