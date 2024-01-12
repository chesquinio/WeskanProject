import {
  allowedRequest,
  changeToAdmin,
  changeToUser,
  deniedRequest,
} from "@/lib/actions";
import { getRoleById } from "@/lib/data";
import {
  CheckCircleIcon,
  CommandLineIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export function AllowedButton({ id, movile }) {
  const allowedRequestById = allowedRequest.bind(null, id);

  return (
    <form action={allowedRequestById}>
      <button className="flex items-center space-x-1 text-white text-sm rounded-full bg-pink-400 py-1.5 px-4 hover:bg-pink-500">
        {!movile ? <span>Permitir</span> : ""}
        <CheckCircleIcon className="w-5" />
      </button>
    </form>
  );
}

export function DeniedButton({ id, movile }) {
  const deniedRequestById = deniedRequest.bind(null, id);

  return (
    <form action={deniedRequestById}>
      <button className="flex items-center space-x-1 text-gray-500 text-sm rounded-full bg-gray-100 py-1.5 px-4 hover:bg-gray-200">
        {!movile ? <span>Denegar</span> : ""}
        <XCircleIcon className="w-5" />
      </button>
    </form>
  );
}

export async function AdminButton({ id, movile }) {
  const changeToAdminById = changeToAdmin.bind(null, id);
  const { role } = await getRoleById(id);

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

export async function UserButton({ id, movile }) {
  const changeToUserById = changeToUser.bind(null, id);
  const { role } = await getRoleById(id);

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
