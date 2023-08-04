'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleGoCalculator = () => {
    router.push('/calculatorStep'); // 페이지 이동
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-48">
        <Image
          className='relative rounded-lg'
          src='/calculator.png'
          alt='calculator'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <div
          className='group border-neutral-700 rounded-lg border px-5 py-4 '
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleGoCalculator}
        >
          <h2 className={`text-1xl font-semibold`}>
            정산하러가기
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`pt-2 max-w-[40ch] text-sm opacity-50`}>
            각 단계별로 값 입력해주세요.
          </p>
        </div>
      </div>
    </main>
  );
}
