export default function Associates() {
  const brands = [
    { id: 1, name: "yamaha", img: "/yamaha.webp" },
    { id: 2, name: "nissan", img: "/nissan.webp" },
    { id: 3, name: "renault", img: "/renault.webp" },
    { id: 4, name: "volkswagen", img: "/volkswagen.webp" },
    { id: 5, name: "volvo", img: "/volvo.webp" },
    { id: 6, name: "honda", img: "/honda.webp" },
    { id: 7, name: "toyota", img: "/toyota.webp" },
    { id: 8, name: "susuki", img: "/susuki.webp" },
    { id: 9, name: "ford", img: "/ford.webp" },
    { id: 10, name: "kawasaki", img: "/kawasaki.webp" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-semibold leading-8 text-gray-600">
          Colaboramos y trabajamos con empresas del sector.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-16 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {brands.map((brand) => (
            <img
              key={brand.id}
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
              src={brand.img}
              alt={brand.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
