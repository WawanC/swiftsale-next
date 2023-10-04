"use client";

import { FormEventHandler, useMemo, useState } from "react";
import Link from "next/link";
import { useRegisterMutation } from "@/hooks/Auth";
import { useRouter } from "next/navigation";
import { getServerErrorMessage } from "@/utils/error";

const RegisterPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);

  const register = useRegisterMutation();
  const router = useRouter();

  const formSubmitHandler: FormEventHandler = async (e) => {
    e.preventDefault();
    setError(null);

    if (enteredPassword !== enteredPassword2) {
      setEnteredPassword("");
      setEnteredPassword2("");
      return setError("Password doesnt matched");
    }

    if (enteredPassword.trim().length < 6) {
      setEnteredPassword("");
      setEnteredPassword2("");
      return setError("Password must be at least 6 characters long");
    }

    if (enteredUsername.trim().length < 6) {
      setEnteredUsername("");
      setEnteredPassword("");
      setEnteredPassword2("");
      return setError("Username must be at least 6 characters long");
    }

    try {
      await register.mutateAsync({
        email: enteredEmail.trim(),
        username: enteredUsername.trim(),
        password: enteredPassword.trim(),
      });

      router.refresh();
      router.push("/login");
    } catch (e) {
      setEnteredPassword("");
      setEnteredPassword2("");
      console.error(e);
    }
  };

  const displayedError = useMemo(
    () => error || (register.isError && getServerErrorMessage(register.error)),
    [error, register.isError, register.error],
  );

  return (
    <main className={`flex-1 flex justify-center md:items-center md:py-8`}>
      <section
        className={`min-w-full md:min-w-[25%] 
        h-fit md:border-2 border-secondary md:rounded-lg md:shadow
        flex flex-col md:px-16 px-8 py-4 items-center gap-8`}
      >
        <h1 className={`text-4xl font-bold text-center`}>Create an Account</h1>

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
            <label htmlFor="email" className={`font-semibold`}>
              E-Mail :
            </label>
            <input
              type="text"
              id="email"
              required={true}
              className={`input`}
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

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

          <div className={`flex flex-col gap-2`}>
            <label htmlFor="password2" className={`font-semibold`}>
              Repeat Password :
            </label>
            <input
              type="password"
              id="password2"
              required={true}
              className={`input`}
              value={enteredPassword2}
              onChange={(e) => setEnteredPassword2(e.target.value)}
            />
          </div>

          <div className={`flex justify-center mt-4`}>
            <button type={"submit"} className={`btn`}>
              Register
            </button>
          </div>
        </form>

        <div className={`flex flex-col text-xl text-center`}>
          <p>Already have an account ?</p>
          <p>
            Login{" "}
            <Link href={"/login"} className={`underline`}>
              here
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
