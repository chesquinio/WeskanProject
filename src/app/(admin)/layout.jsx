import SideNav from "@/src/components/admin/sidenav";
import RoleGate from "@/src/components/role-gate";
import { UserRole } from "@prisma/client";

export default async function AdminLayout({ children }) {
  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </RoleGate>
  );
}
