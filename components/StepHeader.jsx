'use client';
import React, { useState } from 'react';

import { BsPersonAdd } from 'react-icons/bs';
import { MdAddCard } from 'react-icons/md';
import { AiOutlineCalculator } from 'react-icons/ai';

function StepHeader({ step }) {
  const stepColor = () => {
    if (step === 1) {
      return (
        <div className='flex items-center'>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <BsPersonAdd size={30}></BsPersonAdd>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              인원추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
          <div className='flex items-center text-gray-500 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 p-2'>
              <MdAddCard size={30}></MdAddCard>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500'>
              내역추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
          <div className='flex items-center text-gray-500 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 p-2'>
              <AiOutlineCalculator size={30}></AiOutlineCalculator>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500'>
              정산
            </div>
          </div>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className='flex items-center'>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <BsPersonAdd size={30}></BsPersonAdd>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              인원추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600'></div>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <MdAddCard size={30}></MdAddCard>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              내역추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
          <div className='flex items-center text-gray-500 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300 p-2'>
              <AiOutlineCalculator size={30}></AiOutlineCalculator>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500'>
              정산
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='flex items-center'>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <BsPersonAdd size={30}></BsPersonAdd>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              인원추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600'></div>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <MdAddCard size={30}></MdAddCard>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              내역추가
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600'></div>
          <div className='flex items-center text-blue-600 relative'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-blue-600 p-2'>
              <AiOutlineCalculator size={30}></AiOutlineCalculator>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600'>
              정산
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className='p-5'>
      <div className='mx-4 p-4'>{stepColor()}</div>
    </div>
  );
}

export default StepHeader;
