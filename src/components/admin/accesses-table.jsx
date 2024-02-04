import { getFilteredUsers } from "@/lib/data";
import { AllowedButton, DeniedButton } from "./buttons";
import { currentUser } from "@/lib/auth";

export default async function AccessesTable({ query, currentPage }) {
  const users = await getFilteredUsers(query, currentPage);
  const { id } = await currentUser();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        {users.length > 0 ? (
          <>
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
                            className="w-8 h-8 mr-2 rounded-full"
                            alt={`${user.name}'s Profile Image`}
                          />
                          <p>{user.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div>
                        <p className="text-lg font-normal">Categoría</p>
                        <p className="font-normal">
                          {user.category || "No definido"}
                        </p>
                      </div>
                      <div
                        className={`flex justify-end gap-2 ${
                          user.id === id ? "hidden" : "block"
                        }`}
                      >
                        <AllowedButton id={user.id} email={user.email} movile />
                        <DeniedButton id={user.id} email={user.email} movile />
                      </div>
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
                      Categoría
                    </th>
                    <th scope="col" className="relative py-5 pl-6 pr-3">
                      <span className="sr-only">Acceso</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users?.map((user) => (
                    <tr
                      key={user.id}
                      className="w-full border-b py-3 text-sm border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.image ? user.image : "/avatar.png"}
                            className="md:hidden xl:block w-8 h-8 rounded-full"
                            alt={`${user.name}'s Profile Picture`}
                          />
                          <p>{user.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {user.category || "No definido"}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div
                          className={`flex justify-end gap-3 ${
                            user.id === id ? "hidden" : "block"
                          }`}
                        >
                          <AllowedButton id={user.id} email={user.email} />
                          <DeniedButton id={user.id} email={user.email} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="py-4 text-center rounded-md bg-gray-50 ">
            <h3 className="text-md font-medium text-gray-700">
              No se ha encontrado ninguna solicitud
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
