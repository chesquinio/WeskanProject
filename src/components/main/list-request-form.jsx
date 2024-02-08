"use client";

import { useEffect, useState } from "react";
import SelectMenu from "../select-menu";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "../ui/use-toast";
import { listRequest } from "@/lib/actions";
import { useCurrentUser } from "@/hooks/use-current-user";

const list = [
  {
    id: 1,
    name: "Autos y Vehiculos Pesados",
    value: "autos_y_vehículos_pesados",
    image: "/car.png",
  },
  {
    id: 2,
    name: "Motos",
    value: "motos",
    image: "/motorbike.png",
  },
  {
    id: 3,
    name: "Todas",
    value: "todas",
    image: "/both.png",
  },
];

export default function ListRequestForm() {
  const [selectedItem, setSelectedItem] = useState(list[1]);
  const { id, activeRequest, typeRequest } = useCurrentUser();
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(listRequest, initialState);

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

  const typeRequestFormated = () => {
    return typeRequest.split("_").join(" ");
  };

  return (
    <section className="bg-gray-100 rounded-lg flex flex-col md:flex-row gap-5 w-full p-10">
      <form action={dispath} className="w-full md:w-1/2">
        <SelectMenu
          label="Elije una lista a solicitar"
          list={list}
          handleSelectItem={handleSelectItem}
        />
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          readOnly
          className="sr-only"
        />
        <input
          type="text"
          id="request_type"
          name="request_type"
          value={selectedItem.value}
          readOnly
          className="sr-only"
        />
        <SubmitButton activeRequest={activeRequest} />
      </form>
      {activeRequest ? (
        <div className="flex justify-center items-center text-center rounded-lg p-5 bg-pink-300 w-full md:w-1/2">
          <p className="text-white font-medium text-lg">
            Tienes una solicitud para acceder a <b>{typeRequestFormated()}</b>{" "}
            activa
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center w-1/2 h-32 rounded-lg bg-white">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="object-cover h-32"
          />
        </div>
      )}
    </section>
  );
}

function SubmitButton({ activeRequest }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || activeRequest}
      className={`flex items-center justify-center w-full py-2 px-4 mt-5 rounded-lg bg-pink-400 text-white ${
        pending || activeRequest ? "bg-slate-300" : "hover:bg-pink-500"
      }`}
    >
      Solicitar
    </button>
  );
}
