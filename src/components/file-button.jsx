import { currentSpecial } from "@/lib/auth";
import { getLastsFiles } from "@/lib/data";
import Link from "next/link";

function formatName(name) {
  const formattedName = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const withAcentoGuias = formattedName.replace(/\bGuias\b/g, "Guías");
  const withAcentoValvulas = withAcentoGuias.replace(
    /\bValvulas\b/g,
    "Válvulas"
  );

  return withAcentoValvulas;
}

export default async function FileButtons() {
  const isSpecial = await currentSpecial();

  const filesFiltered = async () => {
    const {
      lastGuidesFile,
      lastGuidesBikeFile,
      lastValvesFile,
      lastValvesBikeFile,
      lastValvesRacingFile,
      lastSleevesFile,
      lastExclusiveFile,
    } = await getLastsFiles();

    const array = [
      lastGuidesFile,
      lastGuidesBikeFile,
      lastValvesFile,
      lastValvesBikeFile,
      lastValvesRacingFile,
      lastSleevesFile,
    ];

    if (isSpecial) {
      array.push(lastExclusiveFile);
    }

    return array;
  };

  const files = await filesFiltered();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
      {files.map((file) => (
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
            <div className="absolute inset-0 pb-8 pl-5 pr-16 flex flex-col items-start justify-end z-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-gray-500 bg-opacity-50 text-white">
              <h3
                style={{ textShadow: "0px 4px 19px rgba(0,0,0,0.6)" }}
                className="text-xl md:text-3xl"
              >
                {file ? formatName(file.name) : "Nombre no disponible"}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
