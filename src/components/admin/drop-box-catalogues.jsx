"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { updateCatalogue } from "@/lib/actions";
import SelectMenu from "@/components/select-menu";
import { useToast } from "@/components/ui/use-toast";
import NewCatalogueModal from "./new-catalogue-modal";

// const list = [
//   {
//     id: 1,
//     name: "Guías y Asientos",
//     value: "guias",
//     category: "autos_y_vehículos_pesados",
//     image: "/guias.webp",
//   },
//   {
//     id: 2,
//     name: "Guías de Motos",
//     value: "guias-moto",
//     category: "motos",
//     image: "/guias-moto.webp",
//   },
//   {
//     id: 3,
//     name: "Camisas",
//     value: "camisas",
//     category: "motos",
//     image: "/camisas.webp",
//   },
//   {
//     id: 4,
//     name: "Válvulas",
//     value: "valvulas",
//     category: "autos_y_vehículos_pesados",
//     image: "/valvulas.webp",
//   },
//   {
//     id: 5,
//     name: "Válvulas de Motos",
//     value: "valvulas-moto",
//     category: "motos",
//     image: "/valvulas-moto.webp",
//   },
//   {
//     id: 6,
//     name: "Válvulas Racing",
//     value: "valvulas-racing",
//     category: "motos",
//     image: "/valvulas-racing.webp",
//   },
//   {
//     id: 7,
//     name: "Asientos",
//     value: "asientos",
//     category: "todas",
//     image: "/asientos.webp",
//   },
//   {
//     id: 8,
//     name: "Tubos",
//     value: "tubos",
//     category: "todas",
//     image: "/tubos.webp",
//   },
//   {
//     id: 9,
//     name: "Promociones Guías y Asientos",
//     value: "promociones",
//     category: "todas",
//     image: "/promociones.webp",
//   },
// ];

export default function DropBoxCatalogues({ latestCatalogue }) {
  const [filename, setFilename] = useState(null);
  const [selectedItem, setSelectedItem] = useState(latestCatalogue[0]);
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
        <div className="py-5">
          <label
            htmlFor="file2"
            className="w-full h-40 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
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
