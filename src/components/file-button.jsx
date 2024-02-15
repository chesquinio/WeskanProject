import { getLastsFilesByUser } from "@/lib/data";
import { formatFileName } from "@/lib/utils";
import Link from "next/link";

export default async function FileButtons({ typeRequest, special }) {
  const { filteredFiles } = await getLastsFilesByUser({ typeRequest, special });
  console.log(filteredFiles);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
      {filteredFiles?.map((file) => (
        <div
          key={file ? file.id : null}
          className="group h-40 w-full lg:w-80 mx-auto"
        >
          <Link
            href={file ? file.link : "/"}
            className="block relative w-full h-full rounded-lg overflow-hidden group"
          >
            <img
              src={file ? `/${file.name}.webp` : "/weskan-logo.webp"}
              className="w-full h-full rounded object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
            />
            <div className="absolute inset-0 pb-8 pl-5 pr-16 flex flex-col items-start justify-end z-5 opacity-100 lg:group-hover:bg-opacity-60 transition-opacity bg-gray-500 bg-opacity-50 text-white">
              <h3
                style={{ textShadow: "0px 4px 19px rgba(0,0,0,0.6)" }}
                className="text-xl lg:text-3xl lg:group-hover:ml-3 transition-all"
              >
                {file ? formatFileName(file.name) : "Nombre no disponible"}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
