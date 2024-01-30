import Associates from "@/components/main/associates";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const valuesInfo = [
  {
    id: 1,
    title: "Progresando e innovando.",
    description:
      "Uno de los valores que nos caracteriza, es la confianza de lo que fabricamos, por tal motivo es el cual mejoramos y buscamos la manera de ofrecer un mejor producto, en pos del desarrollo.",
  },
  {
    id: 2,
    title: "Aprendiendo un poco más.",
    description:
      "En Weskan nos encontramos entrenando y capacitacitando a nuestro personal, para que puedan día a día desarrollar habilidades que les permitan realizar las tareas de una forma mas eficiente.",
  },
  {
    id: 3,
    title: "Un ambiente colaborativo.",
    description:
      "Un mejor producto se puede ofrecer gracias a que todos entendemos la finalidad y necesidad del mismo, y esto se logra ayudandonos mutuamente a entender cada etapa del proceso de fabricación.",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="m-5">
        <section className="flex grow flex-col gap-4 md:flex-row min-h-[calc(100vh-120px)]">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
            <h1 className="text-2xl font-bold text-gray-900 md:text-4xl xl:text-5xl md:leading-normal">
              No somos únicos, sí los primeros.
            </h1>
            <p
              className={`text-xl text-gray-800 md:text-2xl xl:text-3xl md:leading-normal`}
            >
              Bienvenidos a <strong className="text-pink-400">Weskan.</strong>{" "}
              Vendedores de autopartes de todo el país.
            </p>
            <Link
              href="https://weskan.mercadoshops.com.ar/"
              target="_blank"
              className="text-lg md:text-xl xl:text-2xl leading-6 text-gray-800 hover:text-pink-400 flex items-center gap-3 hover:gap-5 transition-all"
            >
              <p>Ver nuestros productos</p>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <img
              src="/main-image.png"
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <img
              src="/main-image.png"
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing mobile version"
            />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row mx-5 sm:mx-10 lg:mx-auto lg:max-w-7xl py-24 sm:py-32">
          <div className="flex flex-col lg:w-2/3 gap-5">
            <h3 className="font-bold text-4xl text-gray-900">
              Nuestros objetivos.
            </h3>
            <p className="text-lg text-balance text-gray-600 tracking-wide">
              Somos más que una empresa del sector, somos un equipo de trabajo
              eficiente que busca ofrecer el mejor producto.
            </p>
            <p className="text-balance text-gray-600 tracking-wider">
              Nos concentramos en la fabricación y venta de productos
              especializados como válvulas, guías de válvulas, asientos de
              válvulas, pistones o tapas de cilindros. Actualmente, estamos
              centrados en consolidar nuestra posición en el mercado nacional,
              para destacarnos como proveedores líderes en soluciones
              metalúrgicas de alta calidad.
            </p>
            <p className="text-balance text-gray-600 tracking-wider">
              Nosotros tenemos el compromiso de ser líderes locales y
              expandirnos globalmente, manteniendo siempre nuestro compromiso
              con la calidad, la innovación y la satisfacción del cliente en la
              fabricación y comercialización de nuestros productos distintivos.
            </p>
          </div>
          <div className="flex flex-col lg:w-1/3 lg:ml-10 mt-12 gap-5">
            <div>
              <span className="text-5xl font-semibold text-gray-900">
                +1 millón
              </span>
              <p className="text-gray-600">Ventas concretadas</p>
            </div>
            <div>
              <span className="text-5xl font-semibold text-gray-900">+500</span>
              <p className="text-gray-600">Productos listados</p>
            </div>
            <div>
              <span className="text-5xl font-semibold text-gray-900">+20</span>
              <p className="text-gray-600">Trabajadores</p>
            </div>
          </div>
        </section>
        <section className="md:mx-5 py-24 sm:py-32">
          <div className="w-full max-h-[600px]">
            <img
              src="/all-products.jpg"
              alt="Guias y Asientos de Valvulas"
              className="rounded-2xl"
            />
          </div>
        </section>
        <section className="flex flex-col mx-5 sm:mx-10 md:max-w-3xl md:mx-auto lg:max-w-5xl xl:max-w-7xl py-24 sm:py-32">
          <div className="flex flex-col w-full md:w-1/2 gap-5 mb-12">
            <h3 className="font-bold text-4xl text-gray-900">
              Nuestro valor agregado.
            </h3>
            <p className="text-lg text-balance text-gray-600 tracking-wide">
              No solo fabricamos autopartes, sino que abastecemos a miles de
              clientes que buscan una solución.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {valuesInfo.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <h5 className="font-semibold text-gray-800">{item.title}</h5>
                <p className="text-gray-600 tracking-wider">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* <section>
          <Associates />
        </section> */}
      </main>
    </>
  );
}
