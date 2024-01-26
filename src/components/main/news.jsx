"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function News() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const isSessionStorageAvailable =
      typeof window !== "undefined" && window.sessionStorage;

    if (isSessionStorageAvailable && sessionStorage.getItem("news") === null) {
      sessionStorage.setItem("news", true);
      setOpen(true);
    }
  }, []);

  if (open) {
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
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
                        <NewspaperIcon
                          className="h-6 w-6 text-pink-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-bold leading-6 text-gray-900"
                        >
                          ¡Novedades en Weskan!
                        </Dialog.Title>
                        <div className="mt-5">
                          <h4 className="mb-2 text-lg font-medium text-gray-900">
                            Hemos actualizado nuestra web!
                          </h4>
                          <p className="text-gray-600">
                            Ahora contamos con un nuevo diseño, el cual aporta
                            una simplicidad y claridad a la hora de conocernos y
                            tener un contacto más cercano con nuestros clientes.
                          </p>
                        </div>
                        <div className="hidden sm:block mt-5">
                          <h4 className="mb-2 text-lg font-medium text-gray-900">
                            Nuevo sistema de registro de cuentas.
                          </h4>
                          <p className="text-gray-600">
                            Si sos cliente de Weskan, o deseas ver las listas de
                            precios, ahora deberás crear una cuenta (aunque ya
                            poseas una de la anterior web), e iniciar sesión.
                          </p>
                        </div>
                        <div className="hidden sm:block mt-5">
                          <h4 className="mb-2 text-lg font-medium text-gray-900">
                            Listas de precios mas accesibles.
                          </h4>
                          <p className="text-gray-600">
                            Nuestras listas de precios ahora se encuentran en el
                            apartado catálogo, donde podran descargar cada una
                            de las listas que deseen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-pink-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:mt-0 sm:w-auto outline-none"
                      onClick={() => {
                        setOpen(false);
                        sessionStorage.setItem("news", true);
                      }}
                      ref={cancelButtonRef}
                    >
                      Entendido
                    </button>
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
