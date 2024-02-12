"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useFormState } from "react-dom";
import { useCurrentUser } from "@/hooks/use-current-user";
import { updateCategory } from "@/lib/actions";

export default function CategoryModal() {
  const user = useCurrentUser();
  const [open, setOpen] = useState(user?.category ? false : true);
  const cancelButtonRef = useRef(null);
  const prevState = { errors: {}, message: null };
  const [state, dispath] = useFormState(updateCategory, prevState);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
    }
  }, [state]);

  if (user && open) {
    return (
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-2xl">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-bold leading-6 text-gray-900 mb-4"
                        >
                          ¿Que tipo de negocio eres con el que quieres acceder
                          al catálogo?
                        </Dialog.Title>
                        <Dialog.Title
                          as="h5"
                          className="font-medium text-sm leading-6 text-gray-600"
                        >
                          Esto nos permitirá conocerte y brindarte una
                          experiencia más personalizada.
                        </Dialog.Title>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <form
                            action={dispath}
                            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-5 cursor-pointer"
                          >
                            <button type="submit" className="outline-none">
                              <img
                                src="/category1.png"
                                alt=""
                                className="hidden md:block rounded-lg mb-2 h-40 w-full object-scale-down bg-white"
                              />
                              <h4 className="mb-2 text-lg font-medium text-center text-gray-900">
                                Casa de repuestos
                              </h4>
                              <p className="text-gray-600 text-sm text-center">
                                Soy una casa de repuestos de autos/motos.
                              </p>
                            </button>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={user.email}
                              className="sr-only"
                            />
                            <input
                              id="category"
                              name="category"
                              type="text"
                              value="Casa de repuestos"
                              className="sr-only"
                            />
                          </form>
                          <form
                            action={dispath}
                            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-5 cursor-pointer"
                          >
                            <button type="submit" className="outline-none">
                              <img
                                src="/category2.png"
                                alt=""
                                className="hidden md:block rounded-lg mb-2  h-40 w-full object-scale-down bg-white"
                              />
                              <h4 className="mb-2 text-lg font-medium text-gray-900">
                                Rectificadora
                              </h4>
                              <p className="text-gray-600 text-sm text-center">
                                Soy una rectificadora de diferentes autopartes.
                              </p>
                            </button>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={user.email}
                              className="sr-only"
                            />
                            <input
                              id="category"
                              name="category"
                              type="text"
                              value="Rectificadora"
                              className="sr-only"
                            />
                          </form>
                          <form
                            action={dispath}
                            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-5 cursor-pointer"
                          >
                            <button type="submit" className="outline-none">
                              <img
                                src="/category3.png"
                                alt=""
                                className="hidden md:block rounded-lg mb-2 h-40 w-full object-scale-down bg-white"
                              />
                              <h4 className="mb-2 text-lg font-medium text-gray-900">
                                Vendedor
                              </h4>
                              <p className="text-gray-600 text-sm text-center">
                                Soy un vendedor o tengo un negocio de venta de
                                autopartes.
                              </p>
                            </button>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={user.email}
                              className="sr-only"
                            />
                            <input
                              id="category"
                              name="category"
                              type="text"
                              value="Vendedor"
                              className="sr-only"
                            />
                          </form>
                          <form
                            action={dispath}
                            className="bg-gray-100 hover:bg-gray-200 rounded-lg p-5 cursor-pointer"
                          >
                            <button type="submit" className="outline-none">
                              <img
                                src="/category4.png"
                                alt=""
                                className="hidden md:block rounded-lg mb-2 h-40 w-full object-scale-down bg-white"
                              />

                              <h4 className="mb-2 text-lg font-medium text-gray-900">
                                Reparación
                              </h4>
                              <p className="text-gray-600 text-sm text-center">
                                Necesito repuestos para la reparación de mis
                                propios vehículos.
                              </p>
                            </button>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={user.email}
                              className="sr-only"
                            />
                            <input
                              id="category"
                              name="category"
                              type="text"
                              value="Reparación"
                              className="sr-only"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  } else {
    return null;
  }
}
