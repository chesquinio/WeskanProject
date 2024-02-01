"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/lib/actions";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { DefaultLoading } from "@/components/spinners";

export default function NewVerificationForm() {
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("No se ha encontrado el token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Ha ocurrido un error!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {!success && !error && (
          <div className="flex justify-center items-center">
            <DefaultLoading />
          </div>
        )}
        {!success && error && (
          <div
            key={error}
            id="error-message"
            aria-live="polite"
            aria-atomic="true"
            className="flex justify-start items-center w-full space-x-1 bg-red-300 rounded py-2 px-4"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-red-800" />
            <p className="text-sm font-semibold text-red-800">{error}</p>
          </div>
        )}
        {success && (
          <div
            key={success}
            id="success-message"
            aria-live="polite"
            aria-atomic="true"
            className="flex justify-start items-center w-full space-x-1 bg-green-300 rounded py-2 px-4"
          >
            <CheckCircleIcon className="h-5 w-5 text-green-800" />
            <p className="text-sm font-semibold text-green-800">{success}</p>
          </div>
        )}
        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            href="/iniciar-sesion"
            className="font-semibold leading-6 text-pink-500 hover:text-pink-400"
          >
            Volver a iniciar sesión
          </Link>
        </p>
      </div>
    </>
  );
}
