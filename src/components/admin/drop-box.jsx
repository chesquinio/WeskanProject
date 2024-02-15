"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import { uploadFile } from "@/lib/actions";
import SelectMenu from "@/components/select-menu";
import { useToast } from "@/components/ui/use-toast";

const list = [
  {
    id: 1,
    name: "Guías y Asientos",
    value: "guias",
    category: "autos_y_vehículos_pesados",
    image: "/guias.webp",
  },
  {
    id: 2,
    name: "Guías de Motos",
    value: "guias-moto",
    category: "motos",
    image: "/guias-moto.webp",
  },
  {
    id: 3,
    name: "Camisas",
    value: "camisas",
    category: "motos",
    image: "/camisas.webp",
  },
  {
    id: 4,
    name: "Válvulas",
    value: "valvulas",
    category: "autos_y_vehículos_pesados",
    image: "/valvulas.webp",
  },
  {
    id: 5,
    name: "Válvulas de Motos",
    value: "valvulas-moto",
    category: "motos",
    image: "/valvulas-moto.webp",
  },
  {
    id: 6,
    name: "Válvulas Racing",
    value: "valvulas-racing",
    category: "motos",
    image: "/valvulas-racing.webp",
  },
  {
    id: 7,
    name: "Asientos",
    value: "asientos",
    category: "todas",
    image: "/asientos.webp",
  },
  {
    id: 8,
    name: "Tubos",
    value: "tubos",
    category: "todas",
    image: "/tubos.webp",
  },
  {
    id: 9,
    name: "Promociones Guías y Asientos",
    value: "promociones",
    category: "todas",
    image: "/promociones.webp",
  },
];

export default function DropBox() {
  const [filename, setFilename] = useState(null);
  const [selectedItem, setSelectedItem] = useState(list[1]);
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(uploadFile, initialState);
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
        className="flex flex-col bg-gray-50 rounded p-5 max-w-xl mx-auto"
      >
        <SelectMenu
          label="Elige una lista a subir:"
          list={list}
          handleSelectItem={handleSelectItem}
        />
        <input
          type="text"
          id="list_type"
          name="list_type"
          value={selectedItem.value}
          readOnly
          className="sr-only"
        />
        <input
          type="text"
          id="category"
          name="category"
          value={selectedItem.category}
          readOnly
          className="sr-only"
        />
        <div className="py-5">
          <label
            htmlFor="file"
            className="w-full h-40 border-2 font-medium text-gray-700 border-dashed border-pink-400 rounded-lg flex justify-center items-center cursor-pointer"
          >
            <span>
              {!filename
                ? "Seleciona un archivo."
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
        </div>
        <SubmitButton />
      </form>
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
