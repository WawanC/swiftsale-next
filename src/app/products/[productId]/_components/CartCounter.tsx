"use client";

import { useCallback, useState } from "react";

const CartCounter = () => {
  const [addCartCounter, setAddCartCounter] = useState(1);

  const incrementCartCounter = useCallback(() => {
    setAddCartCounter((counter) => counter + 1);
  }, []);

  const decrementCartCounter = useCallback(() => {
    setAddCartCounter((counter) => {
      if (counter === 1) return counter;
      return counter - 1;
    });
  }, []);

  return (
    <div className={`flex border-2 text-2xl rounded py-2 px-4 w-1/2`}>
      <button className={`text-neutral-400`} onClick={decrementCartCounter}>
        -
      </button>
      <span className={`flex-1 text-center`}>{addCartCounter}</span>
      <button className={`text-neutral-400`} onClick={incrementCartCounter}>
        +
      </button>
    </div>
  );
};

export default CartCounter;
