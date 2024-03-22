import { getFilteredCurriculums } from "@/lib/data";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { DeleteButton } from "./delete-button-cv";

const sortDate = (lastDate) => {
  const date = new Date(lastDate)
    .toISOString()
    .split("T")[0]
    .replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");

  return date;
};

export default async function CurriculumsTable({ query, currentPage }) {
  const curriculums = await getFilteredCurriculums(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        {curriculums.length > 0 ? (
          <>
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {curriculums?.map((cv) => (
                  <div
                    key={cv.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p>{cv.name}</p>
                        </div>
                        <div className="mb-2 flex items-center">
                          <p>{sortDate(cv.createdAt)}</p>
                        </div>
                      </div>
                      <div className={`flex justify-end gap-2`}>
                        <DeleteButton id={cv.id} />
                        <a
                          target="_blanck"
                          className="bg-gray-100 w-10 h-10 p-1 rounded-lg text-gray-600 hover:text-gray-800"
                          href={cv.link}
                        >
                          <ArrowDownTrayIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha
                    </th>
                    <th scope="col" className="relative py-5 pl-6 pr-3">
                      <span className="sr-only">Descargar CV</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {curriculums?.map((cv) => (
                    <tr
                      key={cv.id}
                      className="w-full border-b py-3 text-sm border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <p>{cv.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {sortDate(cv.createdAt)}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className={`flex justify-end gap-3`}>
                          <DeleteButton id={cv.id} />
                          <a
                            target="_blanck"
                            className="bg-gray-100 w-8 h-8 p-1 rounded-lg text-gray-600 hover:text-gray-800"
                            href={cv.link}
                          >
                            <ArrowDownTrayIcon />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="py-4 text-center rounded-md bg-gray-50 ">
            <h3 className="text-md font-medium text-gray-700">
              No se ha encontrado ningun curriculum
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
