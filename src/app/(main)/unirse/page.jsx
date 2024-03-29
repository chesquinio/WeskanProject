import UploadCurriculum from "@/components/main/upload-curriculum";

export const metadata = {
  title: `Unirse`,
};

export default function JoinPage() {
  return (
    <main className="m-5">
      <section className="w-full md:max-w-[900px] mx-auto min-h-[calc(100dvh-120px)]">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl xl:text-5xl md:leading-normal mt-10 mb-20">
          Tu curriculum es de nuestro interés.
        </h2>
        <UploadCurriculum />
      </section>
    </main>
  );
}
