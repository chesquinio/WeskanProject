import Link from "next/link";

export default async function ContentError({ message }) {
  return (
    <main className="m-5 w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <h2 className="font-medium text-xl">{message}</h2>
      <Link
        href="/"
        className="text-white bg-pink-400 rounded py-2 px-4 hover:bg-pink-500"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
