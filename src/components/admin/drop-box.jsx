"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useFormState } from "react-dom";
import { uploadFile } from "@/lib/actions";
import { useState } from "react";

export default function DropBox() {
  const [filename, setFilename] = useState(null);
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(uploadFile, initialState);

  return (
    <section>
      <form action={dispath} className="flex flex-col sm:flex-row gap-5">
        <label
          htmlFor="file"
          className="w-full h-52 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
        >
          <span>
            {!filename
              ? "Seleciona un archivo excel."
              : `Archivo ${filename} seleccionado.`}
          </span>
          <input
            id="file"
            type="file"
            name="file"
            accept=".xlsx, .xls"
            onChange={(e) => setFilename(e.target.files[0]?.name)}
            className="sr-only"
          />
        </label>

        <SubmitButton />
      </form>
      <div className="mt-4">
        {state.message && (
          <p className="inline text-red-800 bg-red-300 py-2 px-4 rounded">
            {state.message}
          </p>
        )}
        {state.success && (
          <p className="inline text-green-800 bg-green-300 py-2 px-4 rounded">
            {state.success}
          </p>
        )}
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormState();
  return (
    <button
      disabled={pending}
      className={`flex items-center justify-center w-full sm:w-12 h-12 sm:h-52 rounded-lg bg-gray-100 ${
        pending
          ? "text-gray-500 bg-gray-50"
          : "hover:bg-pink-100 hover:text-pink-500"
      }`}
    >
      <ArrowRightIcon className="w-6" />
    </button>
  );
}
