import React, { useState } from "react";
function useCount() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increaseBy = (increaser: number) => setCount(count + increaser);
  const decreaseBy = (decreaser: number) => setCount(count - decreaser);

  return { count, increment, decrement, increaseBy, decreaseBy };
}
export default useCount;
