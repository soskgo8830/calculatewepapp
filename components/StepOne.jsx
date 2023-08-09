import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';
import { GrPrevious, GrNext, GrPowerReset } from 'react-icons/gr';

function StepOne({ step, setStep, setPeople }) {
  const router = useRouter();
  const [people, setPeopleState] = useState([
    { id: 1, name: '', isRequired: true },
  ]);

  const addPerson = () => {
    const newPerson = { id: new Date().getTime(), name: '', isRequired: true };
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
    if (people.length === 1) {
      alert('최소한 1명 이상의 정산인원이 필요합니다.');
      return;
    }

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
      alert('모두 입력해주세요.');
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
      <div className='bg-white p-6 border-2 border-gray-300/50 rounded-lg shadow-md'>
        {people.map((person) => (
          <div key={person.id} className='flex mb-2'>
            <input
              type='text'
              placeholder='정산 인원을 입력해주세요.'
              className={`border-2 rounded p-2 w-full text-black h-12 ${
                person.isRequired && person.name === ''
                  ? 'border-red-500/50'
                  : 'border-gray-300/50'
              }`}
              value={person.name}
              onChange={(e) => handleNameChange(person.id, e.target.value)}
            />
            <button
              className='border-2 border-red-500/50 bg-red-200 hover:bg-red-300 font-semibold py-2 px-4 rounded ml-2'
              onClick={() => removePerson(person.id)}
              disabled={people.length === 1}
            >
              <BsTrash size={30} />
            </button>
          </div>
        ))}
      </div>
      <div className='text-center mt-5'>
        <button
          className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
          onClick={addPerson}
        >
          <IoIosAddCircleOutline size={30}></IoIosAddCircleOutline>
        </button>
      </div>

      <div className='mt-8'>
        <div className='flex p-2 mt-4'>
          <button
            className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
            onClick={preHandler}
          >
            <GrPrevious size={22}></GrPrevious>
          </button>
          <div className='flex-auto flex flex-row-reverse'>
            <button
              className='border-2 border-gray-500/50 bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded m-3'
              onClick={nextHandler}
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

export default StepOne;
