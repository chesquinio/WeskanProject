import Link from "next/link";

export default function HomePage() {
  return (
    <main className="m-5">
      <section className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
          <h1 className="text-2xl font-bold text-gray-800 md:text-4xl xl:text-5xl md:leading-normal">
            No somos únicos, sí los primeros.
          </h1>
          <p
            className={`text-xl text-gray-800 md:text-2xl xl:text-3xl md:leading-normal`}
          >
            Bienvenidos a <strong className="text-pink-400">Weskan.</strong>{" "}
            Vendedores de autopartes de todo el país.
          </p>
          <p
            className={`text-lg text-gray-800 md:text-xl xl:text-2xl md:leading-normal`}
          >
            Conoce nuestros productos{" "}
            <Link
              href="/productos"
              className="text-pink-400 border-b border-pink-400"
            >
              aquí
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/main-image.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <img
            src="/main-image.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </section>
    </main>
  );
}
