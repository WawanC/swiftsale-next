"use client";

import { ChangeEventHandler, useCallback, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const [enteredKeyword, setEnteredKeyword] = useState(
    searchParams.get("search") || "",
  );
  const router = useRouter();
  const timer = useRef<NodeJS.Timeout>();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      clearTimeout(timer.current);
      setEnteredKeyword(e.target.value.trim());

      const searchKeyword = e.target.value.trim();
      if (searchKeyword.length < 1) {
        router.push("/products");
      } else {
        timer.current = setTimeout(async () => {
          router.push(`/products?search=${searchKeyword}`);
        }, 500);
      }
    },
    [router],
  );

  const focusHandler = useCallback(() => {
    const searchKeyword = enteredKeyword.trim();
    if (searchKeyword.length < 1) return;
    router.push(`/products?search=${searchKeyword}`);
  }, [enteredKeyword, router]);

  return (
    <input
      type="text"
      className={`min-w-[50%] rounded text-xl p-1 px-4 text-accent outline-none`}
      placeholder={"Search Products..."}
      value={enteredKeyword}
      onChange={changeHandler}
      onFocus={focusHandler}
    />
  );
};

export default SearchBar;
