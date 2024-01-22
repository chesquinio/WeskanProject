import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function UserInfo({ user }) {
  return (
    <div className="max-w-[900px] rounded-lg py-4 px-8 bg-gray-50">
      <div className="flex flex-row gap-6 px-4 sm:px-0">
        <div className="w-14 h-14">
          <img src={user.image || "/avatar.png"} alt="Imagen de Perfil" />
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {user.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Información y datos personales.
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nombre completo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Rubro
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.category || "Ej: Minorista"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Descripcion
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.description || "Escribe una descripciín..."}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
