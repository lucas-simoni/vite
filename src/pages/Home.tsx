import reactLogo from 'assets/react.svg';
import { useCounter } from 'hooks/useCounter';
import { Outlet } from 'react-router-dom';

export default function Home() {
  const { count, increment } = useCounter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-800 text-zinc-100">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="mr-10 w-20" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="mr-10 w-20" alt="React logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20210506173343"
            className="w-20"
            alt="TypeScript logo"
          />
        </a>
      </div>
      <h1 className="mt-8 text-4xl font-bold">
        {import.meta.env.VITE_APP_TITLE}
      </h1>
      <div className="mt-8 flex flex-col items-center">
        <button
          className="rounded-lg border border-transparent bg-gray-900 py-2 px-4 transition ease-in-out hover:border-slate-700"
          onClick={increment}
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/app/index.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-400">Click on the logos to learn more!</p>
      <p className="mt-1 text-gray-600">
        Running in <b>{import.meta.env.MODE}</b> mode
      </p>
      <Outlet />
    </div>
  );
}
