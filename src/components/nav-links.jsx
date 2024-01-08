"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Productos", href: "/productos" },
  { name: "Catalogo", href: "/catalogo" },
];

export function DesktopLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${
              pathname === item.href
                ? "border-b-2 rounded-none text-gray-800"
                : "text-gray-600 hover:border-b hover:text-gray-800"
            } px-3 py-2 text-base font-medium border-pink-400`}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MovileLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-2 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={`
              ${
                pathname === item.href
                  ? "border-b-2 border-pink-400 rounded-none text-gray-800"
                  : "text-gray-600 hover:border-b border-pink-400"
              } block px-3 py-2 text-lg font-medium
            `}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
}
