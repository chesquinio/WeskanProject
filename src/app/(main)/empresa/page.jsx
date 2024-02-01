import {
  ArrowPathIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

export const metadata = {
  title: `Empresa`,
};

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
            src="/mapa-weskan.webp"
            className="block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop and mobile version"
          />
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-pink-400">
                  Fabricaciíon a medida
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                  Establecimiento metalúrgico.
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Desde hace unos años que mejoramos nuestras instalaciones a
                  una fabrica mas modernas y con más capacidad de produccion,
                  con la finalidad de crecer, y esta mejora constante siempre
                  estuvo.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/empresa3.webp"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="mb-4">
                  La empresa inicia sus actividades con fundiciones propias, de
                  donde obtenía la materia prima básica para su producción,
                  constituyendo una industria de relevancia para la época y
                  precursora en el sector metalúrgico-autopartista de país.
                </p>
                <p>
                  A inicios del siglo actual, <b>Weskan</b> comienza un{" "}
                  <b>proceso de mejora continua</b>, iniciado un camino de
                  <b>innovacion tecnologica</b> que consistió en:
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <ArrowPathIcon
                      className="mt-1 h-5 w-5 flex-none text-pink-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Renovación.
                      </strong>{" "}
                      De su maquinaria de producción con tecnología CNC de
                      última generación.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-pink-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Nuevos sistemas.
                      </strong>{" "}
                      De sus procesos, adecuándolos a los nuevos conceptos de
                      trabajos de celdas productivas, para acelerar tiempos y
                      bajar costos.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <UserGroupIcon
                      className="mt-1 h-5 w-5 flex-none text-pink-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Capacitación permanente.
                      </strong>{" "}
                      De su personal jerárquico y de producción para la
                      implementación y aprovechamiento de los nuevos conceptos
                      productivos.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  En octubre del 2013 la empresa se muda a su nuevo predio
                  ubicado en el Parque de Actividades Económicas de Rafaela
                  (PAER). La nueva propiedad, cuenta con 7000 M2, siendo 700 M2
                  los cubiertos por la empresa en la actualidad. La edificación,
                  se basó en los nuevos parámetros de construcción sustentable,
                  tanto en el diseño como en la edificación, con materiales de
                  bajo impacto ambiental, tratando de aprovechar al máximo la
                  luz natural en todos los sectores de la misma.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Dar vuelta la página.
                </h2>
                <p className="mt-6">
                  Weskan da todo por ofrecer un buen producto de buena calidad,
                  por eso apostamos a la mejora continua en todas las áreas de
                  la empresa, pero siempre con especial énfasis en los recursos
                  humanos.
                </p>
              </div>
            </div>
          </div>
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

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12 rounded-full"
            src="/weskan-logo.webp"
            alt="Logo Weskan"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Ningún producto puede tener una calidad superior a la calidad
                de las personas que lo fabrican.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="/founder.jpg"
                alt="Juan Bautista Gays"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  Juan Bautista Gays
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Fundador de Weskan S.A.</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
