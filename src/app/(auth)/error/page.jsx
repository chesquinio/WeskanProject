export default function ErrorPage() {
  return (
    <main className="grid h-dvh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-pink-500">Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Problema con la authentication
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          No pudimos iniciar sesión correctamente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Volver al inicio
          </Link>
          <Link href="#" className="text-sm font-semibold text-gray-900">
            Contactar a soporte <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
