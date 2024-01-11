import { getAllUsers } from "@/src/lib/data";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function UsersTable() {
  const users = await getAllUsers();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <img
                        src={user.image ? user.image : "/avatar.png"}
                        className="w-14 h-14 mr-2 rounded-full"
                        alt={`${user.name}'s Profile Image`}
                      />
                      <p>{user.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {user.role === "ADMIN" ? (
                      <p className="flex justify-center gap-2 rounded-full bg-pink-400 px-3 py-1.5 text-xs font-medium text-white">
                        <UserCircleIcon className="h-4 w-4" /> Administrador
                      </p>
                    ) : (
                      <p className="flex justify-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                        <UserCircleIcon className="h-4 w-4" /> Usuario
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end gap-2"></div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Usuario
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rol
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b-2 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.image ? user.image : "/avatar.png"}
                        className="w-14 h-14 rounded-full"
                        alt={`${user.name}'s Profile Picture`}
                      />
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{user.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div>
                      {user.role === "ADMIN" ? (
                        <p className="flex justify-center gap-2 rounded-full bg-pink-400 px-3 py-2 text-xs font-medium text-white">
                          <UserCircleIcon className="h-4 w-4" /> Administrador
                        </p>
                      ) : (
                        <p className="flex justify-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
                          <UserCircleIcon className="h-4 w-4" /> Usuario
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
