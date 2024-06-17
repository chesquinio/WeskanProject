"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { authenticate } from "@/lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { SubmitButton } from "../buttons";
import { useSearchParams } from "next/navigation";
import Social from "./social";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Este email ya se encuentra en uso!"
      : "";

  const prevState = { errors: {}, message: null };
  const [state, dispath] = useFormState(authenticate, prevState);

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={dispath} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                aria-describedby="email-error"
              />
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <Link
                  href="/recuperar"
                  className="font-semibold text-pink-500 hover:text-pink-400"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                aria-describedby="password-error"
              />
            </div>
            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="h-px w-full bg-gray-300" />
            <p className="mx-4 text-sm text-nowrap">O continúa con</p>
            <div className="h-px w-full bg-gray-300" />
          </div>
          <div className="mt-2">
            <Social />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Si tienes problemas iniciando sesión, prueba registrandote con 
              tu misma cuenta y volviendo a iniciar.
            </p>
          </div>
          <div
            id="form-status"
            aria-live="polite"
            aria-atomic="true"
            className="flex items-center h-8"
          >
            {(state.message || urlError) && (
              <div
                key={state.message || urlError}
                id="error-message"
                aria-live="polite"
                aria-atomic="true"
                className="flex justify-start items-center w-full space-x-1 bg-red-300 rounded py-2 px-4"
              >
                <ExclamationCircleIcon className="h-5 w-5 text-red-800" />
                <p className="text-sm font-semibold text-red-800">
                  {state.message || urlError}
                </p>
              </div>
            )}
          </div>
          <SubmitButton text="Iniciar" />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No tienes una cuenta?{" "}
          <Link
            href="/registrarse"
            className="font-semibold leading-6 text-pink-500 hover:text-pink-400"
          >
            Registrate aquí
          </Link>
        </p>
      </div>
    </>
  );
}
