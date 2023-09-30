"use client";

import { FC, FormEventHandler, useCallback, useState } from "react";
import { useAddCartMutation } from "@/hooks/Cart";

type Props = {
  productId: string;
};

const AddCartInput: FC<Props> = (props) => {
  const addCart = useAddCartMutation();
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

  const addCartHandler: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      addCart.mutate({ productId: props.productId, count: addCartCounter });
    },
    [addCart, props.productId, addCartCounter],
  );

  return (
    <form
      className={`flex flex-col gap-4 items-center`}
      onSubmit={addCartHandler}
    >
      <div className={`flex border-2 text-2xl rounded py-2 px-4 w-1/2`}>
        <button className={`text-neutral-400`} onClick={decrementCartCounter}>
          -
        </button>
        <span className={`flex-1 text-center`}>{addCartCounter}</span>
        <button className={`text-neutral-400`} onClick={incrementCartCounter}>
          +
        </button>
      </div>
      <button className={`btn`}>Add to Cart</button>
    </form>
  );
};

export default AddCartInput;
