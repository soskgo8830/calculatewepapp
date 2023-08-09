import React, { useState, useRef } from 'react';
import { GrPrevious, GrNext, GrPowerReset } from 'react-icons/gr';
import { AiOutlineCalculator } from 'react-icons/ai';

function StepThree({ step, setStep, people, expenses }) {
  const [selectedPeopleMap, setSelectedPeopleMap] = useState({});
  const [calculatedExpenses, setCalculatedExpenses] = useState([]);
  const [showCalculated, setShowCalculated] = useState(false);
  const resultRef = useRef(null);
  const [accountNumber, setAccountNumber] = useState('');

  const handlePersonToggle = (expenseId, personId) => {
    setSelectedPeopleMap((prevSelectedPeople) => {
      const updatedSelectedPeople = { ...prevSelectedPeople };
      if (updatedSelectedPeople[expenseId]?.includes(personId)) {
        updatedSelectedPeople[expenseId] = updatedSelectedPeople[
          expenseId
        ].filter((id) => id !== personId);
      } else {
        updatedSelectedPeople[expenseId] = [
          ...(updatedSelectedPeople[expenseId] || []),
          personId,
        ];
      }
      return updatedSelectedPeople;
    });
  };

  const calculateTotalExpensesForPerson = (personId) => {
    return calculatedExpenses.reduce((total, calculatedExpense) => {
      if (calculatedExpense.selectedPeople.includes(personId)) {
        return total + calculatedExpense.totalPerPerson;
      }
      return total;
    }, 0);
  };

  const handleCalculate = () => {
    const selectedPeopleExist = Object.values(selectedPeopleMap).some(
      (selectedPeople) => selectedPeople.length > 0
    );

    if (!selectedPeopleExist) {
      alert('선택된 인원이 없습니다.');
      return;
    }

    const newCalculatedExpenses = expenses.map((expense) => {
      const selectedPeople = selectedPeopleMap[expense.id] || [];

      const calculatedExpense = {
        ...expense,
        selectedPeople,
      };

      const totalPerPerson =
        calculatedExpense.amount / calculatedExpense.selectedPeople.length;

      calculatedExpense.totalPerPerson = totalPerPerson;

      return calculatedExpense;
    });

    setCalculatedExpenses(newCalculatedExpenses);
    setShowCalculated(true);
  };

  const handleReset = () => {
    setShowCalculated(false);
    setSelectedPeopleMap({});
  };

  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCopyToClipboard = () => {
    if (resultRef.current) {
      const range = document.createRange();
      range.selectNode(resultRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      document.execCommand('copy');
      window.getSelection().removeRange(range);

      alert('정산 내역이 복사되었습니다.');
    }
  };

  return (
    <div className='p-4'>
      <div className='mb-3'>
        <input
          type='text'
          placeholder='계좌번호를 입력해주세요.'
          className={
            'border-2 rounded p-2 w-full text-black h-12 border-gray-300/50'
          }
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className='bg-white p-6 border-2 border-gray-300/50 rounded-lg shadow-md mb-4'
        >
          <h3 className='text-lg font-semibold'>
            정산 내용: {expense.description}
          </h3>
          <div className='flex flex-wrap mt-2'>
            {people.map((person) => (
              <label
                key={person.id}
                className='mb-3 flex items-center space-x-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6'
              >
                <input
                  type='checkbox'
                  className='h-6 w-6'
                  checked={(selectedPeopleMap[expense.id] || []).includes(
                    person.id
                  )}
                  onChange={() => handlePersonToggle(expense.id, person.id)}
                />
                <span className='text-sm'>{person.name}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className='mt-8'>
        <div className='flex p-2 mt-4'>
          <button
            className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
            onClick={() => setStep(2)}
          >
            <GrPrevious size={22}></GrPrevious>
          </button>
          <div className='flex-auto flex flex-row-reverse'>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={handleCalculate}
            >
              <AiOutlineCalculator size={22}></AiOutlineCalculator>
            </button>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={handleReset}
            >
              <GrPowerReset size={22}></GrPowerReset>
            </button>
          </div>
        </div>
      </div>
      {showCalculated && (
        <div className='mt-8 border-2 border-gray-300/50 bg-white p-6 rounded-lg shadow-md'>
          <div ref={resultRef}>
            <h2 className='text-xl font-semibold mb-4 mt-4'>정산 내역</h2>
            {calculatedExpenses.map((calculatedExpense) => (
              <div key={calculatedExpense.id} className='mb-4'>
                <p>- ( {calculatedExpense.description} )</p>
                <p>
                  💰 총 금액: {addCommasToNumber(calculatedExpense.amount)}원
                </p>
                <p>
                  참여인원:{' '}
                  {calculatedExpense.selectedPeople
                    .map(
                      (personId) =>
                        people.find((person) => person.id === personId).name
                    )
                    .join(', ')}
                </p>
                <p>
                  개인 정산 금액:{' '}
                  {addCommasToNumber(
                    calculatedExpense.totalPerPerson.toFixed(0)
                  )}
                  원
                </p>
                <br />
              </div>
            ))}

            <hr />
            <h2 className='text-xl font-semibold mb-4 mt-4'>정산 내역 결과</h2>
            {people.map((person) => (
              <div key={person.id} className='mb-2'>
                <p>
                  💸 {person.name} :{' '}
                  {addCommasToNumber(
                    calculateTotalExpensesForPerson(person.id).toFixed(0)
                  )}
                  원
                </p>
              </div>
            ))}
            <div>🏧 계좌번호 : {accountNumber}</div>
          </div>
          <div className='flex justify-center mt-5'>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={handleCopyToClipboard}
            >
              정산내역 복사
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepThree;
