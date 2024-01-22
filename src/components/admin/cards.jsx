import {
  CommandLineIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { getCardData } from "@/lib/data";

const iconMap = {
  admins: CommandLineIcon,
  customers: UserGroupIcon,
  request: ClockIcon,
  files: InboxIcon,
};

export default async function CardWrapper() {
  const { totalUsers, totalAdmins, totalRequest, totalFiles } =
    await getCardData();
  return (
    <>
      <Card title="Usuarios" value={totalUsers} type="customers" />
      <Card title="Solicitudes" value={totalRequest} type="request" />
      <Card title="Catalogos Subidos" value={totalFiles} type="files" />
      <Card title="Administradores" value={totalAdmins} type="admins" />
    </>
  );
}

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
