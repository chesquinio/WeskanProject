"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function UploadCurriculum() {
  const [filename, setFilename] = useState(null);
  const initialState = useFormState({ message: null, success: null });

  return (
    <main className="bg-gray-50 rounded-lg p-5">
      <form className="flex flex-col md:flex-row gap-3 mb-5">
        <label
          htmlFor="file"
          className="w-full h-40 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
        >
          <span>
            {!filename
              ? "Sube tu curriculum. (Formato .pdf)"
              : `Archivo ${filename} seleccionado.`}
          </span>
          <input
            id="file"
            type="file"
            name="file"
            accept=".pdf"
            onChange={(e) => setFilename(e.target.files[0]?.name)}
            className="sr-only"
          />
        </label>
        <SubmitButton />
      </form>
      <div>
        <p className="text-gray-600 text-sm tracking-wide">
          Sube tu curriculum vitae si consideras que tienes las habilidades para
          sumarte al equipo, hay perfiles que pueden ser muy iteresantes y no
          dudaremos en contactarte de ser el caso.
        </p>
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
      className={`flex items-center justify-center w-full md:w-12 md:h-auto h-12 rounded-lg bg-gray-200 ${
        pending
          ? "text-gray-500 bg-gray-300"
          : "hover:bg-pink-100 hover:text-pink-500"
      }`}
    >
      <ArrowRightIcon className="w-6" />
    </button>
  );
}
