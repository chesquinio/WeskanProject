import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-gray-300 py-5">
        <div className="w-4/5 m-auto">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:w-5/12 gap-8 ml-3 mt-5 text-white">
              <span className="flex items-center text-lg font-ligh cursor-default">
                <MapPinIcon className="text-gray-300 w-4" />
                <p className="text-gray-300 ml-2 inline text-sm">
                  J.D.Perón 2189, Rafaela, Santa Fe
                </p>
              </span>
              <a
                className="flex items-center text-xl font-light"
                href="https://www.instagram.com/weskangv/"
                target="_BLANCK"
              >
                <InstagramIcon className="text-gray-300 w-4" />
                <p className="text-gray-300 hover:text-pink-400 ml-2 font-normal inline text-sm">
                  /weskangv
                </p>
              </a>
              <a
                className="flex items-center text-xl font-light"
                href="https://www.facebook.com/weskanracing"
                target="_BLANCK"
              >
                <FacebookIcon className="text-gray-300 w-4" />
                <p className="text-gray-300 hover:text-pink-400 ml-2 font-normal inline text-sm">
                  /weskanracing
                </p>
              </a>
              <a
                className="flex items-center text-xl font-light"
                href="mailto:ventas@weskan.com.ar"
              >
                <MailIcon className="text-gray-300 w-4" />
                <p className="text-gray-300 hover:text-pink-400 ml-2 font-normal inline text-sm">
                  ventas@weskan.com.ar
                </p>
              </a>
            </div>
            <div className="lg:hidden h-px bg-gray-400 my-8"></div>
            <div className="hidden lg:block w-px bg-gray-400 mx-8"></div>
            <div className="flex flex-col gap-2 justify-center items-center lg:w-5/12">
              <p className="text-sm mx-auto w-4/5 text-center">
                © Copyright 2023 - Weskan S.A. - Todos los derechos reservados
              </p>
              <div className="flex flex-row gap-3 text-sm font-light text-center">
                <Link href="/terminos-y-condiciones">
                  Términos y Condiciones
                </Link>
                <a href="https://www.privacypolicies.com/live/276ad946-7f98-41ae-aeea-ccedc1fc013d">
                  Politica de Privacidad
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto h-px w-full xl:w-10/12 bg-gray-400 my-8"></div>
          <div className="mb-4">
            <p className="text-sm mx-auto w-4/5 text-center">
              Desarrollador Web: Francis Willener
            </p>
            <div className="flex justify-center items-center gap-3 mt-3">
              <a
                href="mailto:willenerfrancis0@gmail.com"
                className="bg-gray-400 text-gray-800 py-1 px-1.5 rounded-full text-moredark hover:text-blue-400 hover:bg-gray-300 transition-all"
              >
                <MailIcon className="w-5" />
              </a>
              <a
                href="https://github.com/chesquinio"
                target="_BLANCK"
                className="bg-gray-400 text-gray-800 py-1 px-1.5 rounded-full text-moredark hover:text-blue-400 hover:bg-gray-300 transition-all"
              >
                <GithubIcon className="w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/francis-willener/"
                target="_BLANCK"
                className="bg-gray-400 text-gray-800 py-1 px-1.5 rounded-full text-moredark hover:text-blue-400 hover:bg-gray-300 transition-all"
              >
                <LinkedinIcon className="w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
