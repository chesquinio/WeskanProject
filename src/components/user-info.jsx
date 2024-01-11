export default function UserInfo({ user }) {
  return (
    <div className="max-w-[900px] rounded-lg py-4 px-8 mx-auto bg-gray-200">
      <h2 className="font-semibold text-gray-700 text-3xl pt-3 pb-8 text-center">
        Información personal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr]">
        <div className="flex justify-center items-center mb-6 md:mb-0 md:items-start md:justify-start">
          <img
            src={user.image ? user.image : "/avatar.png"}
            alt="Imagen Perfil"
            className="rounded-full w-24 h-24"
          />
        </div>
        <div className="grid grid-cols-1">
          <div className="mb-4">
            <span className="font-medium text-pink-500 mb-2">Nombre</span>
            <p className="text-gray-900">{user.name}</p>
          </div>
          <div className="mb-4">
            <span className="font-medium text-pink-500 mb-2">Email</span>
            <p className="text-gray-900">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
