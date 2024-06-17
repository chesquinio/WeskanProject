import { getLastsCatalogues } from "@/lib/data"
import { DeleteButton } from "./admin/delete-button-catalogue"

export default async function CatalogueButtons({ admin }) {
  const catalogues = await getLastsCatalogues()

  return (
    <div className="flex flex-col">
          {catalogues.map((catalog) => (
            <div
              key={catalog.id}
              className="relative w-full h-96 md:h-[340px] bg-pink-300 rounded-lg my-10 md:my-16"
            >
              <div className="w-full h-full">
                <img
                  src="/catalog-main-image.webp"
                  alt={catalog.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute flex flex-col gap-3 justify-between rounded-br-lg md:rounded-br-none md:rounded-tl-lg rounded-bl-lg bottom-0 md:top-0 left-0 text-white bg-black bg-opacity-75 backdrop-blur p-5 w-full md:w-[360px] h-auto md:h-full">
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-xl">{catalog.name}</h4>
                  <p className="text-sm text-gray-300">
                    {catalog.description}
                  </p>
                </div>
                <div className="w-full flex flex-row gap-3">
                  <a
                    href={catalog.file}
                    target="_blank"
                    className="w-full flex justify-center items-center px-4 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-15 border-gray-500 border font-semibold text-sm"
                  >
                    Ver catálogo
                  </a>
                  {admin && (
                    <DeleteButton id={catalog.id} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}
