"use client";

import { deleteCurriculum } from "@/lib/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useToast } from "../ui/use-toast";

export function DeleteButton({ id }) {
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(deleteCurriculum, initialState);
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

  return (
    <form action={dispath}>
      <input
        type="text"
        name="id"
        id="id"
        className="sr-only"
        defaultValue={id}
      />
      <button
        type="submit"
        className="h-10 w-10 md:w-8 md:h-8 bg-red-100 text-red-500 flex items-center justify-center rounded-lg"
      >
        <TrashIcon className="w-6 h-6 md:w-5 md:h-5" />
      </button>
    </form>
  );
}
