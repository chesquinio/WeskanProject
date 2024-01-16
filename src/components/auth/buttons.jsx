import { useFormStatus } from "react-dom";

export function SubmitButton({ text }) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${
          pending ? "bg-pink-300" : "bg-pink-400 hover:bg-pink-500"
        }`}
      >
        {text}
      </button>
    </div>
  );
}
