"use client";

import { FormEventHandler, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLoginMutation } from "@/hooks/Auth";
import { useRouter } from "next/navigation";
import { getServerErrorMessage } from "@/utils/error";
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";

const LoginPage = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const login = useLoginMutation();
  const router = useRouter();

  const formSubmitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login.mutateAsync({
        username: enteredUsername.trim(),
        password: enteredPassword.trim(),
      });
      router.replace("/");
    } catch (e) {
      setEnteredPassword("");
      console.error(e);
    }
  };

  useEffect(() => {
    router.prefetch("/", { kind: PrefetchKind.FULL });
  }, [router]);

  const displayedError = useMemo(
    () => error || (login.isError && getServerErrorMessage(login.error)),
    [error, login.isError, login.error],
  );

  return (
    <main className={`flex-1 flex justify-center md:items-center`}>
      <section
        className={`min-w-full md:min-w-[25%] h-fit 
        md:border-2 border-secondary md:rounded-lg md:shadow
        flex flex-col p-8 md:p-16 items-center gap-8`}
      >
        <h1 className={`text-4xl font-bold`}>Sign-In</h1>

        <form
          className={`flex flex-col gap-4 w-full text-xl`}
          onSubmit={formSubmitHandler}
        >
          {displayedError && (
            <div className={`flex justify-center`}>
              <span className={`text-xl text-red-500`}>{displayedError}</span>
            </div>
          )}
          <div className={`flex flex-col gap-2`}>
            <label htmlFor="username" className={`font-semibold`}>
              Username :
            </label>
            <input
              type="text"
              id="username"
              required={true}
              className={`input`}
              value={enteredUsername}
              onChange={(e) => setEnteredUsername(e.target.value)}
            />
          </div>

          <div className={`flex flex-col gap-2`}>
            <label htmlFor="password" className={`font-semibold`}>
              Password :
            </label>
            <input
              type="password"
              id="password"
              required={true}
              className={`input`}
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
          </div>

          <div className={`flex justify-center mt-4`}>
            <button type={"submit"} className={`btn`}>
              Login
            </button>
          </div>
        </form>

        <div className={`flex flex-col text-xl text-center`}>
          <p>Don&apos;t have an account yet ?</p>
          <p>
            Register{" "}
            <Link href={"/register"} className={`underline`}>
              here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
