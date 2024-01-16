"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Inicio", href: "/administrador", icon: HomeIcon },
  {
    name: "Solicitudes",
    href: "/administrador/solicitudes",
    icon: DocumentDuplicateIcon,
  },
  { name: "Usuarios", href: "/administrador/usuarios", icon: UserGroupIcon },
  {
    name: "Catálogos",
    href: "/administrador/catalogos",
    icon: DocumentTextIcon,
  },
  { name: "Página Web", href: "/", icon: GlobeAltIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-pink-100 text-pink-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
