import React, { useEffect,  useState } from "react";
import "./index.css";

interface IRun {
  run: boolean;
  current: any;
}

function App() {
  const [name, setName] = useState<string>("Arridho Pradana");
  const [nim, setNim] = useState<string>("1907113990");
  const [runName, setRunName] = useState<IRun>({ run: false, current: [] });
  const [runNim, setRunNim] = useState<IRun>({ run: false, current: [] });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRunName({ ...runName, run: true, current: name.split("") });
    setRunNim({ ...runNim, run: true, current: nim.split("") });
    // setRunName({ ...runName, run: true });
  };

  // const idx = useRef(0);
  // const ascii = useRef(32);

  // useEffect(() => {
  //   function tock() {
  //     setRunName({
  //       ...runName,
  //       current: runName.current + name[idx.current],
  //     });
  //   }

  //   function tick() {
  //     if (ascii.current <= name.charCodeAt(idx.current)) {
  //       let addChar = setInterval(tock, 2000);
  //       setRunName({
  //         ...runName,
  //         current: runName.current + name[idx.current],
  //       });
  //       idx.current++;
  //       return () => clearInterval(addChar);
  //     }
  //   }
  //   if (idx.current < name.length && runName.run) {
  //     let addChar = setInterval(tick, 500);
  //     return () => clearInterval(addChar);
  //   }
  // }, [runName]);

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 flex h-screen items-center justify-center">
      <div className="flex flex-row">
        <form className="mr-10" onSubmit={handleSubmit}>
          <label className="relative block mb-4">
            <span className="sr-only">Search</span>
            <input
              className="placeholder:italic placeholder:text-gray-600 block w-80 rounded-xl py-4 px-8 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              placeholder={name}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="relative block mb-4">
            <span className="sr-only">Search</span>
            <input
              className="placeholder:italic placeholder:text-gray-600 block w-80 rounded-xl py-4 px-8 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              placeholder={nim.toString()}
              type="number"
              name="nim"
              onChange={(e) => setNim(e.target.value)}
            />
          </label>
          <button className="block w-80 rounded-xl py-4 px-8 bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 text-white">
            Start
          </button>
        </form>
        <div className="w-80 bg-white rounded-xl px-8 flex flex-col justify-evenly">
          <div>
            <h1 className="uppercase text-sm font-light">Name</h1>
            {runName.run === true && (
              <p className="text-xl font-semibold">
                {runName.current.map((e: any, i: number) => {
                  return <ClockName key={i} letter={e.charCodeAt(0)} />;
                })}
              </p>
            )}
          </div>
          <div>
            <h1 className="uppercase text-sm font-light">NIM</h1>
            {runNim.run === true && (
              <p className="text-xl font-semibold">
                {runNim.current.map((e: any, i: number) => {
                  return <ClockNim key={i} number={e.charCodeAt(0)} />;
                })}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ClockName = ({ letter }: any) => {
  const [currentCount, setCount] = useState(32);
  const timer = () => setCount(currentCount + 1);

  useEffect(() => {
    if (currentCount >= letter) {
      return;
    }
    const id = setInterval(timer, 100);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCount]);

  return <span>{String.fromCharCode(currentCount)}</span>;
};

const ClockNim = ({ number }: any) => {
  const [currentCount, setCount] = useState(48);
  const timer = () => setCount(currentCount + 1);

  useEffect(() => {
    if (currentCount >= number) {
      return;
    }
    const id = setInterval(timer, 500);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCount]);

  return <span>{String.fromCharCode(currentCount)}</span>;
};

export default App;
