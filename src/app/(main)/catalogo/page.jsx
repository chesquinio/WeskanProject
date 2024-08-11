import CatalogueButtons from "@/components/catalogue-buttons";

export const metadata = {
  title: `Catalogo`,
};

export default async function CataloguePage() {
  return (
    <main className="m-5">
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl xl:text-5xl md:leading-normal mt-10 mb-20">
          Nuestros catálogos.
        </h2>
        <CatalogueButtons />
      </section>
    </main>
  );
}
