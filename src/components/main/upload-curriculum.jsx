"use client";

import { uploadCurriculum } from "@/lib/actions";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "../ui/use-toast";

export default function UploadCurriculum() {
  const [filename, setFilename] = useState(null);
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(uploadCurriculum, initialState);

  useEffect(() => {
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

  return (
    <main className="bg-gray-50 rounded-lg p-5">
      <form action={dispath} className="flex flex-col gap-3 mb-5">
        <div className="flex flex-row gap-3">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full h-10 rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-800 outline-none  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
              placeholder="Agusto Baez"
            />
          </div>
          <div className="w-1/2 h-full hidden md:block">
            <SubmitButton />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mb-5">
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
          <div className="w-full h-full md:hidden">
            <SubmitButton />
          </div>
        </div>
      </form>
      <div className="space-y-3">
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
      className={`flex items-center justify-center w-full h-12 md:h-10 rounded-lg bg-gray-200 ${
        pending
          ? "text-gray-500 bg-gray-300"
          : "hover:bg-pink-100 hover:text-pink-500"
      }`}
    >
      <ArrowRightIcon className="w-6" />
    </button>
  );
}
