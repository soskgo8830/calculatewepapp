import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';
import { GrPrevious, GrNext, GrPowerReset } from 'react-icons/gr';

function StepTwo({ step, setStep, expenses, setExpenses }) {
  const addExpense = () => {
    const newExpense = { id: expenses.length + 1, description: '', amount: '' };
    setExpenses([...expenses, newExpense]);
  };

  const removeExpense = (id) => {
    if (expenses.length === 1) {
      alert('최소한 1개의 정산내용이 필요합니다.');
      return;
    }

    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const handleDescriptionChange = (id, value) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, description: value } : expense
    );
    setExpenses(updatedExpenses);
  };

  const handleAmountChange = (id, value) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, amount: value } : expense
    );
    setExpenses(updatedExpenses);
  };

  const validateExpense = (expense) => {
    return expense.description !== '' && expense.amount !== '';
  };

  const handleNextClick = () => {
    const isValid = expenses.every(validateExpense);

    if (!isValid) {
      alert('모두 입력해주세요.');
    } else {
      setExpenses(expenses);
      setStep(3);
    }
  };

  const initHandler = () => {
    setExpenses([{ id: 1, description: '', amount: '' }]);
  };

  return (
    <div className='p-4'>
      <div className=''>
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className={`bg-white p-6 border-2 rounded-lg shadow-md text-center mb-4 ${
              !validateExpense(expense)
                ? 'border-red-500/50'
                : 'border-gray-300/50'
            }`}
          >
            <div className='mb-2'>
              <input
                type='text'
                placeholder='정산 내용을 입력해주세요.'
                className='border-2 rounded p-2 w-full text-black h-12'
                value={expense.description}
                onChange={(e) =>
                  handleDescriptionChange(expense.id, e.target.value)
                }
              />
            </div>
            <div className='mb-2'>
              <input
                type='number'
                placeholder='금액을 입력해주세요.'
                className='border-2 rounded p-2 w-full text-black h-12'
                value={expense.amount}
                onChange={(e) => handleAmountChange(expense.id, e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className='border-2 border-red-500/50 bg-red-200 hover:bg-red-300 font-semibold py-2 px-4 rounded'
                onClick={() => removeExpense(expense.id)}
                disabled={expenses.length === 1}
              >
                <BsTrash size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <button
          className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
          onClick={addExpense}
        >
          <IoIosAddCircleOutline size={30}></IoIosAddCircleOutline>
        </button>
      </div>

      <div className='mt-8'>
        <div className='flex p-2 mt-4'>
          <button
            className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
            onClick={() => setStep(1)}
          >
            <GrPrevious size={22}></GrPrevious>
          </button>
          <div className='flex-auto flex flex-row-reverse'>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={handleNextClick}
            >
              <GrNext size={22}></GrNext>
            </button>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={initHandler}
            >
              <GrPowerReset size={22}></GrPowerReset>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
