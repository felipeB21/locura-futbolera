import Image from "next/image";
import Link from "next/link";

const games = [
  {
    name: "Cuanto sabe LA COBRA",
    path: "cuanto-sabe-lacobra",
    img: "/games/lacobraaa.jpg",
  },
  {
    name: "Cuanto sabe Davo",
    path: "cuanto-sabe-davo",
    img: "/games/davo.jpg",
  },
  {
    name: "Cuanto sabe el Chat",
    path: "cuanto-sabe-el-chat",
    img: "/games/elchat.avif",
  },
  {
    name: "Cuanto saben Los Futbolitos",
    path: "cuanto-saben-los-futbolitos",
    img: "/games/losfutbolitos.png",
  },
];

export default function MainPage() {
  return (
    <section className="grid grid-cols-3 gap-6 mx-auto">
      {games.map((gmes) => (
        <article
          className="bg-neutral-950 w-max rounded-xl hover:bg-orange-600 duration-150"
          key={gmes.path}
        >
          <Link href={`games/${gmes.path}`}>
            <div className="flex items-center justify-between py-2 px-4 w-[320px]">
              <h4 className="text-xl">{gmes.name}</h4>
              <Image
                className="w-[100px] h-[100px] object-cover rounded-xl"
                src={gmes.img}
                alt={gmes.name}
                width={100}
                height={100}
              />
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
