'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';

function StepOne({ step, setStep, setPeople }) {
  const router = useRouter();
  const [people, setPeopleState] = useState([
    { id: 1, name: '', isRequired: true },
  ]);

  const addPerson = () => {
    const newPerson = { id: people.length + 1, name: '', isRequired: true };
    setPeopleState([...people, newPerson]);
  };

  const handleNameChange = (id, value) => {
    const updatedPeople = people.map((person) =>
      person.id === id
        ? { ...person, name: value, isRequired: value === '' }
        : person
    );
    setPeopleState(updatedPeople);
  };

  const removePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeopleState(updatedPeople);
  };

  const preHandler = () => {
    router.push('/');
  };

  const nextHandler = () => {
    const hasEmptyRequiredFields = people.some(
      (person) => person.isRequired && person.name === ''
    );

    if (hasEmptyRequiredFields) {
      // 유효성 검사 실패 처리
    } else {
      setPeople(people);
      setStep(2);
    }
  };

  const initHandler = () => {
    setPeopleState([{ id: 1, name: '', isRequired: true }]);
  };

  return (
    <div className='p-4'>
      <div className='border p-4 mb-4 rounded'>
        {people.map((person) => (
          <div key={person.id} className='flex mb-2'>
            <input
              type='text'
              placeholder='정산인원을 입력해주세요.'
              className={`border rounded p-1 w-full text-black ${
                person.isRequired && person.name === '' ? 'border-red-500' : ''
              }`}
              value={person.name}
              onChange={(e) => handleNameChange(person.id, e.target.value)}
            />
            <button
              className='text-red-500 ml-2'
              onClick={() => removePerson(person.id)}
            >
              <BsTrash size={30} />
            </button>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <button
          className='bg-green-500 text-white font-bold py-2 px-4 rounded'
          onClick={addPerson}
        >
          <IoIosAddCircleOutline size={22}></IoIosAddCircleOutline>
        </button>
      </div>

      <div className='mt-8 p-4'>
        <div className='flex p-2 mt-4'>
          <button
            className='text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold bg-gray-100 text-gray-700 border border-gray-600'
            onClick={preHandler}
          >
            이전
          </button>
          <div className='flex-auto flex flex-row-reverse'>
            <button
              className='text-base focus:outline-none flex justify-center px-4 py-2 rounded font-bold bg-gray-100 text-gray-700 border border-gray-600 ml-3'
              onClick={nextHandler}
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

export default StepOne;
