import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="m-5">
        <section className="flex grow flex-col gap-4 md:flex-row min-h-[calc(100vh-120px)]">
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
                aquí.
              </Link>
            </p>
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
            <p className="text-lg text-balance text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate animi fugit itaque perspiciatis incidunt laboriosam
              quis, esse ducimus rerum atque ipsam ex? Et error mollitia
              accusantium, aliquid ullam ipsam excepturi!
            </p>
            <p className="text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              perferendis impedit! Id dolor nostrum assumenda nisi eligendi
              itaque! Cum quia consequuntur excepturi veniam, voluptate corporis
              cumque pariatur porro, harum dolore tempora quod voluptatum
              mollitia cupiditate blanditiis tempore quis aspernatur
              reprehenderit.
            </p>
            <p className="text-balance text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              perferendis impedit! Id dolor nostrum assumenda nisi eligendi
              itaque! Cum quia consequuntur excepturi veniam, voluptate corporis
              cumque pariatur porro, harum dolore tempora quod voluptatum
              mollitia cupiditate blanditiis tempore quis aspernatur
              reprehenderit.
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
      </main>
    </>
  );
}
