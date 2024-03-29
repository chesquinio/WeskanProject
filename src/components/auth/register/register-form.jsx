"use client";

import { register } from "@/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { SubmitButton } from "../buttons";

export default function RegisterForm() {
  const initialState = { errors: {}, message: null, success: null };
  const [state, dispath] = useFormState(register, initialState);

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={dispath} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                aria-describedby="name-error"
              />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

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

          <div
            id="form-status"
            aria-live="polite"
            aria-atomic="true"
            className="flex items-center h-8"
          >
            {state.message && (
              <div
                key={state.message}
                id="error-message"
                aria-live="polite"
                aria-atomic="true"
                className="flex justify-start items-center w-full space-x-1 bg-red-300 rounded py-2 px-4"
              >
                <ExclamationCircleIcon className="h-5 w-5 text-red-800" />
                <p className="text-sm font-semibold text-red-800">
                  {state.message}
                </p>
              </div>
            )}
            {state.success && (
              <div
                key={state.success}
                id="success-message"
                aria-live="polite"
                aria-atomic="true"
                className="flex justify-start items-center w-full space-x-1 bg-green-300 rounded py-2 px-4"
              >
                <CheckCircleIcon className="h-5 w-5 text-green-800" />
                <p className="text-sm font-semibold text-green-800">
                  {state.success}
                </p>
              </div>
            )}
          </div>
          <SubmitButton text="Registrarse" />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Ya tienes una cuenta?{" "}
          <Link
            href="/iniciar-sesion"
            className="font-semibold leading-6 text-pink-400 hover:text-pink-500"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </>
  );
}
