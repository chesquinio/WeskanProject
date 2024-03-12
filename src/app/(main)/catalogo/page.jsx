export const metadata = {
  title: `Catalogo`,
};

const catalogs = [
  {
    id: 1,
    title: "General de motos",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de todos nuestros productos de motos.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/Catalogo+Gral+Moto+Revision+011.pdf",
  },
  {
    id: 2,
    title: "Guías de válvulas",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestras guías.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/CATALOGOS+GUIAS.pdf",
  },
  {
    id: 3,
    title: "Asientos de válvulas",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestros asientos.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/CATALOGOS+ASIENTOS.pdf",
  },
  {
    id: 4,
    title: "Válvulas",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestras válvulas.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/CATALOGO+VALVULAS.pdf",
  },
  {
    id: 5,
    title: "Tubos",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestros tubos.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/CATALOGO+TUBOS.pdf",
  },
  {
    id: 6,
    title: "Retenes",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestros retenes.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/CATALOGO+RETENES.pdf",
  },
  {
    id: 7,
    title: "Camisas",
    descripction:
      "Aquí podras encontrar información de medidas y tamaños de nuestras camisas.",
    image: "./catalog-main-image.webp",
    file: "https://weskan.s3.sa-east-1.amazonaws.com/document/Cat%C3%A1logo+Camisas++Urbano-Racing.pdf",
  },
];

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
      <section className="max-w-7xl mx-auto py-24 sm:py-32">
        <h3 className="font-bold text-4xl text-gray-900">
          Nuestros catálogos.
        </h3>
        <div className="flex flex-col">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="relative w-full h-96 md:h-[340px] bg-pink-300 rounded-lg my-10 md:my-16"
            >
              <div className="w-full h-full">
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute flex flex-col gap-3 justify-between rounded-br-lg md:rounded-br-none md:rounded-tl-lg rounded-bl-lg bottom-0 md:top-0 left-0 text-white bg-black bg-opacity-75 backdrop-blur p-5 w-full md:w-[360px] h-auto md:h-full">
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">{catalog.title}</h4>
                  <p className="text-sm text-gray-300">
                    {catalog.descripction}
                  </p>
                </div>
                <a
                  href={catalog.file}
                  target="_blank"
                  className="w-full px-4 py-2.5 text-center rounded-lg hover:bg-white hover:bg-opacity-15 border-gray-500 border font-semibold text-sm"
                >
                  Ver catálogo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
