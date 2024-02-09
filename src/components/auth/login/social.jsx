"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

export default function Social() {
  const onClick = async (event, provider) => {
    event.preventDefault();

    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full">
      <button
        onClick={(event) => onClick(event, "google")}
        className="flex justify-center items-center gap-3 w-full py-2 px-4 text-gray-600 font-medium rounded bg-transparent border border-gray-400 hover:bg-gray-100 hover:shadow-sm hover:shadow-gray-600 transition-all"
      >
        <FcGoogle className="w-5 h-5" /> Google
      </button>
    </div>
  );
}
