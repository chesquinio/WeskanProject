"use client";

import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import WeskanLogo from "../weskan-logo";
import NavLinks from "./nav-links";
import { logout } from "@/lib/actions";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-pink-500 p-4 md:h-40"
        href="/administrador"
      >
        <div className="w-12 md:w-16 h-12 md:h-16">
          <WeskanLogo circle />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <button
          onClick={() => logout()}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-pink-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Cerrar Sesión</div>
        </button>
      </div>
    </div>
  );
}
