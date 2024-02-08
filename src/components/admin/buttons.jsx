"use client";

import {
  allowedRequest,
  changeToAdmin,
  changeToUser,
  deniedRequest,
} from "@/lib/actions";
import {
  CheckCircleIcon,
  CommandLineIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export function AllowedButton({ id, email, movile }) {
  const allowedRequestById = allowedRequest.bind(null, id, email);

  return (
    <form action={allowedRequestById}>
      <button
        className={`flex items-center space-x-1 text-sm rounded-full py-1.5 px-4 bg-pink-400 hover:bg-pink-500 text-white`}
      >
        {!movile ? <span>Permitir</span> : ""}
        <CheckCircleIcon className="w-5" />
      </button>
    </form>
  );
}

export function DeniedButton({ id, email, movile }) {
  const deniedRequestById = deniedRequest.bind(null, id, email);

  return (
    <form action={deniedRequestById}>
      <button
        className={`flex items-center space-x-1 text-sm rounded-full py-1.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-500`}
      >
        {!movile ? <span>Denegar</span> : ""}
        <XCircleIcon className="w-5" />
      </button>
    </form>
  );
}

export function AdminButton({ id, role, movile }) {
  const changeToAdminById = changeToAdmin.bind(null, id);

  return (
    <form action={changeToAdminById}>
      <button
        disabled={role === "ADMIN"}
        className={`flex items-center space-x-1 rounded-full py-1.5 px-4 ${
          role === "ADMIN"
            ? "bg-pink-500 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-500"
        }`}
      >
        {!movile ? <span>Administrador</span> : ""}
        <CommandLineIcon className="w-5" />
      </button>
    </form>
  );
}

export function UserButton({ id, role, movile }) {
  const changeToUserById = changeToUser.bind(null, id);

  return (
    <form action={changeToUserById}>
      <button
        disabled={role === "USER"}
        className={`flex items-center space-x-1 rounded-full py-1.5 px-4 ${
          role === "USER"
            ? "bg-pink-500 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-500"
        }`}
      >
        {!movile ? <span>Usuario</span> : ""}
        <UserCircleIcon className="w-5" />
      </button>
    </form>
  );
}
