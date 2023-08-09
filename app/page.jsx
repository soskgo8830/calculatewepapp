'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleGoCalculator = () => {
    router.push('/calculatorStep'); // 페이지 이동
  };

  return (
    <main>
      <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
        <div className='bg-white p-6 rounded-lg shadow-md text-center'>
          <div className='mb-4'>
            <Image
              className='mx-auto'
              src='/calculator.png'
              alt='calculator'
              width={300}
              height={100}
              priority
            />
          </div>
          <h1 className='text-2xl font-semibold mb-4 opacity-80'>
            Dutch Pay App
          </h1>
          <p className='text-left m-1 opacity-60'>
            각 단계별로 인원, 내역, 정산내용을 입력해주세요.
          </p>
          <p className='text-left m-1 opacity-60'>
            * 단계별 입력값을 잘못 입력 시 결과가 다를 수 있습니다.
          </p>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded m-3'
            onClick={handleGoCalculator}
          >
            정산하기
          </button>
        </div>
      </div>
    </main>
  );
}
