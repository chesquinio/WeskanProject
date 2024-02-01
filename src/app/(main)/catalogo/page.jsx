import FileButtons from "@/components/file-button";
import { FileButtonsSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export const metadata = {
  title: `Catalogo`,
};

export default async function CataloguePage() {
  return (
    <main className="m-5">
      <section className="flex grow flex-col gap-4 md:flex-row min-h-[calc(100vh-120px)]">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
          <h1 className="text-2xl font-bold text-gray-900 md:text-4xl xl:text-5xl md:leading-normal">
            Productos para todos los motores.
          </h1>
          <p
            className={`text-cl text-gray-800 md:text-2xl xl:text-3xl md:leading-normal`}
          >
            Aquí podras encontrar un listado con todos nuestros
            <b className="text-pink-400"> productos</b> en un
            <b className="text-pink-400"> solo lugar</b>, simplificando el
            proceso de pedidos y solicitudes.
          </p>
          <p
            className={`text-lg text-gray-800 md:text-xl xl:text-2xl md:leading-normal`}
          >
            Contamos con <strong>cientos de productos</strong> en fabricación.
          </p>
        </div>
        <div className="flex items-center justify-center opacity-60 p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/catalogue-image.webp"
            className="hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <img
            src="/catalogue-image-mobile.webp"
            className="block md:hidden rounded-lg"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] py-24 sm:py-32">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Conoce nuestra listas de precios.
        </h2>
        <Suspense fallback={<FileButtonsSkeleton />}>
          <FileButtons />
        </Suspense>
      </section>
    </main>
  );
}
