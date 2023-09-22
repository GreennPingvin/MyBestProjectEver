import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(count + 1);
  };

  return (
    <div className={cls.Counter}>
      <h1 className={cls.red}>{count}</h1>
      <button className={cls.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
