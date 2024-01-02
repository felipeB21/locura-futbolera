import Image from "next/image";
import Link from "next/link";

const games = [
  {
    name: "Adivina el Jugador",
    path: "adivina-el-jugador",
    img: "/games/E6oTZCUX0AA9ZZV.jpg",
  },
  {
    name: "Arma tu once ideal",
    path: "arma-tu-once-ideal",
    img: "/games/15686557861380.webp",
  },
  {
    name: "Quiz futbol Argentino",
    path: "quiz-futbol-argentino",
    img: "/games/clubes-argentinos.webp",
  },
  {
    name: "Quiz futbol Europeo",
    path: "quiz-futbol-europeo",
    img: "/games/15235447139465.jpg",
  },
];

export default function MainPage() {
  return (
    <section className="grid grid-cols-3 gap-5 w-[1000px] mx-auto">
      {games.map((gmes) => (
        <article
          className="bg-neutral-950 w-max rounded-xl hover:bg-orange-600 duration-150"
          key={gmes.path}
        >
          <Link href={gmes.path}>
            <div className="flex items-center justify-between py-2 px-4 w-[300px]">
              <h4 className="text-xl text-center py-3">{gmes.name}</h4>
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
