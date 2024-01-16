import { getLastFile } from "@/lib/data";
import Link from "next/link";

export default async function FileButton() {
  const path = await getLastFile();

  return (
    <div className="w-full h-60 group flex flex-col">
      <Link
        href={`../${path}`}
        className="block relative w-full h-full rounded overflow-hidden group"
      >
        <img
          src="/file-button-image.webp"
          className="w-full h-full rounded object-cover object-center transition-transform transform scale-100 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 pb-8 pl-5 pr-16 flex flex-col items-start justify-end z-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-pink-200 bg-opacity-50 text-white">
          <h3
            style={{ textShadow: "0px 4px 19px rgba(190,102,188,0.6)" }}
            className="text-3xl md:text-5xl"
          >
            Catalogo
          </h3>
        </div>
      </Link>
    </div>
  );
}
