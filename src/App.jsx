import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  useEffect(function () {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    if (data.slip.advice !== advice) {
      setAdvice(data.slip.advice);
      setCount(c => c + 1);
    } else getAdvice();
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-16 text-3xl'>
      <div className='w-4/5 md:w-1/2 text-center bg-[#E2E9E5] rounded-3xl px-5 py-20 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
        <p className='text-2xl tracking-wider mb-20 text-[#136F48]'>
          Advice #{count}
        </p>
        <div className='flex items-center justify-center h-auto mb-10 p-8'>
          <h1 className='text-5xl text-[#0E2B1E] '>&ldquo;{advice}&rdquo;</h1>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-[#136F48]'>
          You read total <strong>{count}</strong> advices
        </p>
        <button
          className='bg-[#31927A] text-white font-bold px-8 py-4 rounded-lg'
          type='button'
          onClick={getAdvice}>
          Get Advice
        </button>
      </div>
    </div>
  );
}

export default App;
