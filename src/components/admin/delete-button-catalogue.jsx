"use client";

import { deleteCatalogue, deleteList } from "@/lib/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export function DeleteButton({ id }) {
  const initialState = { message: null, success: null };
  const [state, dispath] = useFormState(deleteCatalogue, initialState);
  const { refresh } = useRouter()
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
      refresh()
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
        className="h-12 w-12 px-3 rounded-lg hover:bg-white hover:bg-opacity-15 border-gray-500 border font-semibold text-sm"
      >
        <TrashIcon className="w-6 h-6 md:w-5 md:h-5" />
      </button>
    </form>
  );
}
