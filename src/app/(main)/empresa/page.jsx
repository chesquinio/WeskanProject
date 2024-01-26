export default function CompanyPage() {
  return (
    <main className="m-5">
      <section className="flex grow flex-col gap-4 md:flex-row min-h-[calc(100vh-120px)]">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl xl:text-5xl md:leading-normal">
            Una historia de años.
          </h2>
          <p
            className={`text-cl text-gray-800 md:text-2xl xl:text-3xl md:leading-normal`}
          >
            La actividad comenzo en <b className="text-pink-400">1948</b>,
            convirtiéndonos asi de los primeros en fabricar{" "}
            <b className="text-pink-400">guías de válvulas</b> para motor.
          </p>
          <p
            className={`text-lg text-gray-800 md:text-xl xl:text-2xl md:leading-normal`}
          >
            Weskan de Establecimientos Metalúrgicos Gays S.A. fue fundada por
            <strong>Juan Bautista Gays.</strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/mapa-weskan.png"
            className="block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop and mobile version"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Descubre nuestras generaciones.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La empresa a crecido a lo largo de tres importantes generaciones
              en estas últimas decadas.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="/founder.jpg"
                  alt="Juan Bautista Gays"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Juan Bautista Gays
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-pink-400">
                    Fundador
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="/2-generation.jpg"
                  alt="Mario Gays"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Mario Gays
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-pink-400">
                    2° Generación
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="/3-generation.jpg"
                  alt="Eduardo Gays"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Eduardo Gays
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-pink-400">
                    3° Generación
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
