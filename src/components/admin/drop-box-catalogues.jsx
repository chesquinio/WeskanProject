"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { updateCatalogue } from "@/lib/actions";
import SelectMenu from "@/components/select-menu";
import { useToast } from "@/components/ui/use-toast";
import NewCatalogueModal from "./new-catalogue-modal";

export default function DropBoxCatalogues({ latestCatalogue }) {
  const [filename, setFilename] = useState(null);
  const [selectedItem, setSelectedItem] = useState(latestCatalogue[0]);
  const [imageName, setImageName] = useState(null);
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(updateCatalogue, initialState);
  const { toast } = useToast();

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

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <section>
      <form
        action={dispath}
        className="flex flex-col bg-gray-50 rounded p-5 w-auto"
      >
        <SelectMenu
          label="Catálogos de productos:"
          list={latestCatalogue}
          handleSelectItem={handleSelectItem}
        />
        <input
          type="text"
          id="name"
          name="name"
          value={selectedItem?.name}
          readOnly
          className="sr-only"
        />
        <input
          type="text"
          id="oldFile"
          name="oldFile"
          value={selectedItem?.file}
          readOnly
          className="sr-only"
        />
        <div className="flex flex-row gap-5 w-full py-5 text-center">
          <div className="w-1/2">
            <label
              htmlFor="file2"
              className="h-40 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
            >
              <span>
                {!filename
                  ? "Seleciona un archivo."
                  : `Archivo ${filename} seleccionado.`}
              </span>
              <input
                id="file2"
                type="file"
                name="file2"
                accept=".xlsx, .xls, .pdf"
                onChange={(e) => setFilename(e.target.files[0]?.name)}
                className="sr-only"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="image1"
              className="h-40 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
            >
              <span>
                {!imageName
                  ? "Seleciona una imagen."
                  : `Imagen ${imageName} seleccionado.`}
              </span>
              <input
                id="image1"
                type="file"
                name="image1"
                accept=".png, .jpeg, .jpg, .webp"
                onChange={(e) => setImageName(e.target.files[0]?.name)}
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <SubmitButton />
      </form>
      <div className="mt-4">
        <NewCatalogueModal />
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center w-full h-12 rounded-lg bg-gray-200 ${
        pending
          ? "text-gray-500 bg-gray-300"
          : "hover:bg-pink-100 hover:text-pink-500"
      }`}
    >
      <ArrowRightIcon className="w-6" />
    </button>
  );
}
