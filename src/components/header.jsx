"use client";

import { Fragment } from "react";
import Link from "next/link";
import WeskanLogo from "./weskan-logo";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  PowerIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { DesktopLinks, MovileLinks } from "./nav-links";
import { logout } from "@/src/lib/actions";
import { useCurrentUser } from "../hooks/use-current-user";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const user = useCurrentUser();

  const signOut = () => {
    logout();
  };

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="w-14 h-14">
                  <WeskanLogo />
                </div>
                <DesktopLinks />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/perfil"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-700"
                              )}
                            >
                              <UserIcon className="w-5" />
                              Perfil
                            </Link>
                          )}
                        </Menu.Item>
                        {user.role === "ADMIN" && (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/administrador"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-700"
                                )}
                              >
                                <Cog6ToothIcon className="w-5" />
                                <div>Administrador</div>
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
                                "flex w-full items-center gap-2 px-4 py-2 text-md text-gray-700"
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
                  <div className="">
                    <Link
                      href="/iniciar-sesion"
                      className="bg-pink-400 text-white text-base font-medium rounded py-2 px-4 hover:bg-pink-500"
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <MovileLinks />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
