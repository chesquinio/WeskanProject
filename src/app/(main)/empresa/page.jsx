export default function CompanyPage() {
  return (
    <main className="m-5">
      <section className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-200 px-6 py-10 md:w-2/5 md:px-20">
          <h2 className="text-2xl font-bold text-gray-800 md:text-4xl xl:text-5xl md:leading-normal">
            Una historia de años.
          </h2>
          <p
            className={`text-cl text-gray-800 md:text-2xl xl:text-3xl md:leading-normal`}
          >
            La actividad comenzo en <b className="text-pink-400">1948</b>,
            convirtiéndonos asi de los primeros en fabricar{" "}
            <b className="text-pink-400">guías de válvulas</b> para motor.
          </p>
          <p
            className={`text-lg text-gray-800 md:text-xl xl:text-2xl md:leading-normal`}
          >
            Weskan de Establecimientos Metalúrgicos Gays S.A. fue fundada por
            <strong>Juan Bautista Gays.</strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/mapa-weskan.png"
            className="block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop and mobile version"
          />
        </div>
      </section>
    </main>
  );
}
