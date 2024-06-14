import FileButtons from "@/components/file-button";
import ListRequestForm from "@/components/main/list-request-form";
import { FileButtonsSkeleton } from "@/components/skeletons";
import { currentUser } from "@/lib/auth";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: `Listas`,
};

export default async function ListPage() {
  const user = await currentUser();

  return (
    <main className="m-5">
      {user ? (
        <>
          {user?.validated ? (
            <section className="w-full md:max-w-[1200px] mx-auto min-h-[calc(100dvh-120px)]">
              <h2 className="text-xl text-center font-bold text-gray-900 md:text-2xl xl:text-3xl md:leading-normal mt-10 mb-20">
                  Las listas de precios volveran en un instante...
                </h2>
              {/* <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900  md:text-4xl xl:text-5xl md:leading-normal mt-10 mb-20">
                  Conoce nuestra listas de precios.
                </h2>
              </div>
              <Suspense fallback={<FileButtonsSkeleton />}>
                <FileButtons />
              </Suspense> */}
            </section>
          ) : (
            <section className="w-full md:max-w-[900px] mx-auto min-h-[calc(100dvh-120px)]">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl xl:text-4xl md:leading-normal mt-10 mb-12">
                Solicitar acceso a listas de precios.
              </h2>
              <ListRequestForm />
            </section>
          )}
        </>
      ) : (
        <section className="flex grow flex-col gap-6 md:gap-10 justify-center min-h-[calc(100vh-120px)] mx-auto max-w-[900px]">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            ¿Quiéres conocer nuestras listas de precios?
          </h3>
          <div className="flex justify-center items-center">
            <Link
              href="/iniciar-sesion"
              className="text-lg md:text-xl font-medium leading-6 text-pink-400 hover:text-pink-500 flex items-center gap-3 hover:gap-5 transition-all"
            >
              Iniciar Sesión
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
