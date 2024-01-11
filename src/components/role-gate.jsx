import { currentRole } from "@/src/lib/auth";
import ContentError from "@/src/components/content-error";

export default async function RoleGate({ children, allowedRole }) {
  const role = await currentRole();

  if (role !== allowedRole) {
    return (
      <ContentError message="No tienes permisos para acceder a esta ruta!" />
    );
  }

  return <>{children}</>;
}
