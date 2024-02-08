"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useFormState } from "react-dom";
import { toast } from "../ui/use-toast";
import { updateUserOptions } from "@/lib/actions";

export default function EditUserModal({ user }) {
  const [open, setOpen] = useState(false);
  const [access, setAccess] = useState(user.typeRequest || "remove");
  const [role, setRole] = useState(user.role === "ADMIN" ? "admin" : "user");
  const initialState = { errors: {}, message: null, success: null };
  const [state, dispath] = useFormState(updateUserOptions, initialState);

  useEffect(() => {
    setOpen(false);
    if (state.message) {
      toast({
        variant: "destructive",
        title: "Algo salio mal!",
        description: state.message,
        status: "message",
      });
    } else if (state.success) {
      toast({
        description: state.success,
        status: "success",
      });
    }
  }, [state.message, state.success, toast]);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-8 h-8 bg-gray-100 rounded p-1 text-gray-500"
      >
        <PencilSquareIcon />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                  <form action={dispath}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
                          <PencilSquareIcon
                            className="h-6 w-6 text-pink-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 sm:ml-4 sm:mt-0 text-left sm:w-3/4">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-center text-gray-900 mb-4"
                          >
                            Ediitar el usuario {user.name}:
                          </Dialog.Title>
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-sm text-gray-600 mb-1 ml-1"
                            >
                              Email:
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={user.email}
                              readOnly
                              className="p-2 w-full text-gray-400 bg-gray-100 rounded outline-none"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="admin"
                              className="block text-sm text-gray-600 mb-1 ml-1"
                            >
                              Permisos:
                            </label>
                            <select
                              id="role"
                              name="role"
                              value={role}
                              onChange={(e) => setRole(e.target.value)}
                              className="p-2 w-full bg-gray-100 rounded text-gray-900 outline-pink-500"
                            >
                              <option value="admin">Administrador</option>
                              <option value="user">Usuario</option>
                            </select>
                            {state.errors?.admin &&
                              state.errors.admin.map((error) => (
                                <p
                                  className="mt-2 text-sm text-red-500"
                                  key={error}
                                >
                                  {error}
                                </p>
                              ))}
                          </div>

                          <div
                            className={`${
                              role !== "admin" ? "block" : "hidden"
                            } mb-4`}
                          >
                            <label
                              htmlFor="access"
                              className="block text-sm text-gray-600 mb-1 ml-1"
                            >
                              Accesos a listas:
                            </label>
                            <select
                              id="access"
                              name="access"
                              value={access}
                              onChange={(e) => setAccess(e.target.value)}
                              className="p-2 w-full bg-gray-100 rounded text-gray-900 outline-pink-500"
                            >
                              <option value="autos_y_vehículos_pesados">
                                Autos y vehículos pesados
                              </option>
                              <option value="motos">Motos</option>
                              <option value="todas">Todas</option>
                              <option value="remove">Ninguna</option>
                            </select>
                            {state.access?.password &&
                              state.errors.access.map((error) => (
                                <p
                                  className="mt-2 text-sm text-red-500"
                                  key={error}
                                >
                                  {error}
                                </p>
                              ))}
                          </div>

                          <div
                            className={`${
                              access !== "remove" && role !== "admin"
                                ? "block"
                                : "hidden"
                            } mb-4`}
                          >
                            <label
                              htmlFor="special"
                              className="block text-sm text-gray-600 mb-1 ml-1"
                            >
                              Acceso a lista de promociones:
                            </label>
                            <select
                              id="special"
                              name="special"
                              defaultValue={user.special ? "allowed" : "denied"}
                              className="p-2 w-full bg-gray-100 rounded text-gray-900 outline-pink-500"
                            >
                              <option value="allowed">Permitido</option>
                              <option value="denied">Denegado</option>
                            </select>
                            {state.errors?.special &&
                              state.errors.special.map((error) => (
                                <p
                                  className="mt-2 text-sm text-red-500"
                                  key={error}
                                >
                                  {error}
                                </p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-pink-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                      >
                        Enviar
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
