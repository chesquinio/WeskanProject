import {
  allowedRequest,
  changeToAdmin,
  changeToUser,
  deniedRequest,
} from "@/lib/actions";
import { getRoleById, getValidatedById } from "@/lib/data";
import {
  CheckCircleIcon,
  CommandLineIcon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export async function AllowedButton({ id, email, movile }) {
  const allowedRequestById = allowedRequest.bind(null, id, email);
  const { validated } = await getValidatedById(id);

  return (
    <form action={allowedRequestById}>
      <button
        disabled={validated}
        className={`flex items-center space-x-1 text-sm rounded-full py-1.5 px-4 ${
          validated
            ? "bg-pink-500 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-500"
        }`}
      >
        {!movile ? <span>Permitido</span> : ""}
        <CheckCircleIcon className="w-5" />
      </button>
    </form>
  );
}

export async function DeniedButton({ id, email, movile }) {
  const deniedRequestById = deniedRequest.bind(null, id, email);
  const { validated } = await getValidatedById(id);

  return (
    <form action={deniedRequestById}>
      <button
        disabled={!validated}
        className={`flex items-center space-x-1 text-sm rounded-full py-1.5 px-4 ${
          !validated
            ? "bg-pink-500 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-500"
        }`}
      >
        {!movile ? <span>Denegado</span> : ""}
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
