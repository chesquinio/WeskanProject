import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationCircleIcon, FolderIcon } from "@heroicons/react/24/outline";
import { useFormState } from "react-dom";
import { toast } from "../ui/use-toast";
import SelectMenu from "../select-menu";
import { createNewList } from "@/lib/actions";

const categories = [
    {
        id: 1,
        name: 'Motos',
        value: 'motos',
    },
    {
        id: 2,
        name: 'Autos y vehículos pesados',
        value: 'autos_y_vehículos_pesados',
    },
    {
        id: 3,
        name: 'Todas',
        value: 'todas',
    },
]

export default function NewListModal() {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [selectedItem, setSelectedItem] = useState(categories[1]);
  const initialState = { errors: {}, message: null, success: null };
  const [state, dispath] = useFormState(createNewList, initialState);

  useEffect(() => {
    if (state.success) {
      setOpen(false)
      toast({
        description: state.success,
        status: "success",
      });
    }
  }, [state.success, toast]);

  const cancelButtonRef = useRef(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="w-full rounded-lg p-3 text-center text-white bg-pink-300 hover:bg-pink-400"
      >
        Nueva Lista
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
                          <FolderIcon
                            className="h-6 w-6 text-pink-500"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 sm:ml-4 sm:mt-0 text-left sm:w-3/4">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-center text-gray-900 mb-4"
                          >
                            Crea una nueva lista:
                          </Dialog.Title>
                          <div className="mb-4">
                            <label
                              htmlFor="subject"
                              className="block text-sm text-gray-600 mb-3 ml-1"
                            >
                              Nombre:
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Válvulas"
                              className="py-2 text-sm px-5 rounded-md w-full border ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="category"
                              className="hidden"
                            >
                              Categoria:
                            </label>
                            <SelectMenu 
                                label={"Categoría:"} 
                                list={categories} 
                                handleSelectItem={handleSelectItem}
                                text={'small'} 
                            />
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={selectedItem.value}
                                readOnly
                                className="sr-only"
                            />
                          </div>
                          <div className="mb-4">
                            <span
                              htmlFor="subject"
                              className="block text-sm text-gray-600 mb-3 ml-1"
                            >
                              Archivo:
                            </span>
                            <label
                                htmlFor="list"
                                className="w-full h-10 border text-sm text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
                            >
                                <span>
                                {!listName
                                    ? "Seleciona un archivo."
                                    : `Archivo ${listName} seleccionado.`}
                                </span>
                                <input
                                    id="list"
                                    type="file"
                                    name="list"
                                    accept=".xlsx, .xls"
                                    onChange={(e) => setListName(e.target.files[0]?.name)}
                                    className="sr-only"
                                />
                            </label>
                          </div>
                          <div className="mb-4">
                            <span
                              htmlFor="subject"
                              className="block text-sm text-gray-600 mb-3 ml-1"
                            >
                              Imagen:
                            </span>
                            <label
                                htmlFor="image"
                                className="w-full h-10 border text-sm text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
                            >
                                <span>
                                {!imageName
                                    ? "Seleciona una imagen."
                                    : `Imagen ${imageName} seleccionado.`}
                                </span>
                                <input
                                    id="image"
                                    type="file"
                                    name="image"
                                    accept=".png, .jpeg, .jpg, .webp"
                                    onChange={(e) => setImageName(e.target.files[0]?.name)}
                                    className="sr-only"
                                />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        id="form-status"
                        aria-live="polite"
                        aria-atomic="true"
                        className="flex items-center h-8"
                    >
                        {(state?.message) && (
                        <div
                            key={state.message}
                            id="error-message"
                            aria-live="polite"
                            aria-atomic="true"
                            className="flex justify-start items-center w-full space-x-1 bg-red-300 rounded py-2 px-4"
                        >
                            <ExclamationCircleIcon className="h-5 w-5 text-red-800" />
                            <p className="text-sm font-semibold text-red-800">
                            {state.message}
                            </p>
                        </div>
                        )}
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
