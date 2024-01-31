"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

export default function Social() {
  const onClick = (event, provider) => {
    event.preventDefault();

    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <>
      <h5 className="text-sm text-gray-600 font-medium mb-2">
        Inicia sesión con Google
      </h5>
      <div className="flex items-center w-full">
        <button
          onClick={(event) => onClick(event, "google")}
          className="flex justify-center w-full py-2 px-4 rounded bg-transparent border border-gray-300 hover:border-pink-400"
        >
          <FcGoogle className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
