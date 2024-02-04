"use client";

import { editUser } from "@/lib/actions";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

export default function UserInfo({ user }) {
  const [edit, setEdit] = useState(false);
  const prevState = { errors: {}, message: null };
  const [state, dispath] = useFormState(editUser, prevState);

  return (
    <main className="flex flex-col space-y-3">
      <form action={dispath}>
        <div className="max-w-[900px] rounded-lg py-4 px-8 bg-gray-50">
          <div className="flex flex-row gap-6 px-4 sm:px-0">
            <div className="w-14 h-14">
              {!edit ? (
                <img
                  src={user?.image || "/avatar.png"}
                  alt="Imagen de Perfil"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <label
                  htmlFor="image"
                  className="flex justify-center items-center w-full h-full rounded-full bg-gray-200"
                >
                  <PencilIcon className="w-6 h-6 text-gray-700" />
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="sr-only"
                    accept=".jpg, .jpeg, .png"
                  />
                </label>
              )}
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                {user.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Información y datos personales.
              </p>
            </div>
            <div className="flex justify-end text-gray-700">
              <button type="button" onClick={() => setEdit(!edit)}>
                <PencilIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Nombre completo
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {!edit ? (
                    user.name
                  ) : (
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={user.name}
                      className="bg-transparent border px-2 rounded outline-pink-400"
                      aria-describedby="name-error"
                    />
                  )}
                  <div id="name-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.name &&
                      state.errors.name.map((error) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {!edit ? (
                    user.email
                  ) : (
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      readOnly
                      className="bg-transparent rounded outline-none"
                    />
                  )}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Categoría
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.category || "Ej: Minorista"}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Descripción
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {!edit ? (
                    user.description ? (
                      user.description
                    ) : (
                      "Escribe algo interesante..."
                    )
                  ) : (
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      defaultValue={user.description}
                      placeholder="Escribe algo..."
                      className="bg-transparent resize-none h-20 border px-2 py-1 rounded outline-pink-400"
                    />
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {state?.message && (
          <div>
            <p className="text-red-600 text-sm px-4">{state.message}</p>
          </div>
        )}
        {edit && (
          <div className="mt-2 mx-2">
            <SubmitButton />
          </div>
        )}
      </form>
      <div className="bg-white py-2 px-4 text-center text-sm text-gray-800 hover:text-pink-400 hover:bg-pink-100 font-medium rounded-lg transition">
        <a href={`mailto:ventas@weskan.com.ar`}>
          Solicitar acceso a lista de promociones
        </a>
      </div>
    </main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-2 px-4 rounded  text-center  text-white ${
        pending ? "bg-pink-300" : "bg-pink-400 hover:bg-pink-500"
      }`}
    >
      Guardar
    </button>
  );
}
