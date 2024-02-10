"use client";

import { Fragment } from "react";
import Link from "next/link";
import WeskanLogo from "../weskan-logo";
import { useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowUpOnSquareStackIcon,
  Bars3Icon,
  Cog6ToothIcon,
  PowerIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { logout } from "@/lib/actions";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Productos", href: "https://weskan.mercadoshops.com.ar" },
  { name: "Catálogo", href: "/catalogo" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useCurrentUser();
  const pathname = usePathname();

  const signOut = () => {
    logout();
  };

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Show Desktop */}
              <Link href="/" className="w-14 h-14 hidden lg:flex">
                <WeskanLogo />
              </Link>

              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      pathname === item.href ? "text-pink-400 bg-pink-50" : ""
                    } text-sm py-2 px-4 rounded-lg font-semibold leading-6 text-gray-800 hover:text-pink-400 hover:bg-pink-50`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center sm:static sm:inset-auto p-2">
                {/* Profile dropdown */}
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Abrir Menu Usuario</span>
                        <img
                          className="h-10 w-10 object-cover rounded-full"
                          src={user?.image ? user?.image : `/avatar.png`}
                          alt="Imagen Perfil"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-[-20] lg:right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/perfil"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-800"
                              )}
                            >
                              <UserIcon className="w-5" />
                              Perfil
                            </Link>
                          )}
                        </Menu.Item>
                        {user.role === "ADMIN" ? (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/administrador"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-800"
                                )}
                              >
                                <Cog6ToothIcon className="w-5" />
                                <div>Administrador</div>
                              </Link>
                            )}
                          </Menu.Item>
                        ) : (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/curriculum"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-800"
                                )}
                              >
                                <ArrowUpOnSquareStackIcon className="w-5" />
                                <div>Subir CV</div>
                              </Link>
                            )}
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={signOut}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-800"
                              )}
                            >
                              <PowerIcon className="w-5" />
                              <div>Cerrar Sesión</div>
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                      href="https://weskan.online/iniciar-sesion"
                      className="text-sm font-semibold py-2 px-4 rounded-lg leading-6 text-gray-800 transition-transform hover:text-pink-400 hover:bg-pink-50"
                    >
                      Iniciar Sesión <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile menu button*/}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md p-4 text-gray-800"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Abrir Menu</span>
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
              <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Weskan</span>
                      <div className="h-10 w-10">
                        <WeskanLogo />
                      </div>
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Cerrar Menu</span>
                      <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:text-pink-400 hover:bg-pink-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      {!user && (
                        <div className="py-6">
                          <Link
                            href="/iniciar-sesion"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800 hover:text-pink-400 hover:bg-pink-50"
                          >
                            Iniciar Sesión
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
