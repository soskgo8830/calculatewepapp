import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';

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
    <div>
      <div className='m-4'>
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className={`border p-4 mb-4 rounded ${
              !validateExpense(expense) ? 'border-red-500' : 'border'
            }`}
          >
            <div className='mb-2'>
              <input
                type='text'
                placeholder='정산 내용을 입력해주세요.'
                className='w-full p-1 text-black'
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
                className='w-full p-1 text-black'
                value={expense.amount}
                onChange={(e) => handleAmountChange(expense.id, e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className='text-red-500 '
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
          className='bg-green-500 text-white font-bold py-2 px-4 rounded'
          onClick={addExpense}
        >
          <IoIosAddCircleOutline size={22}></IoIosAddCircleOutline>
        </button>
      </div>

      <div className='mt-8 p-4'>
        <div className='flex p-2 mt-4'>
          <button
            className='text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold bg-gray-100 text-gray-700 border border-gray-600'
            onClick={() => setStep(1)}
          >
            이전
          </button>
          <div className='flex-auto flex flex-row-reverse'>
            <button
              className='text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold bg-gray-100 text-gray-700 border border-gray-600 ml-3'
              onClick={handleNextClick}
            >
              다음
            </button>
            <button
              className='text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold bg-gray-100 text-gray-700 border border-gray-600'
              onClick={initHandler}
            >
              초기화
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
