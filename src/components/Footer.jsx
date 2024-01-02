import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-3 absolute bottom-0 w-full">
      <div className="w-[1000px] mx-auto flex justify-between">
        <div>
          <Link href="/">LocuraFutbolera</Link>
          <p className="text-gray-300">locurafutbolera@gmail.com</p>
        </div>
        <div className="flex flex-col">
          <Link href="https://www.instagram.com/felipebolgar/">Instagram</Link>
          <Link href="#">Donar</Link>
        </div>
      </div>
    </footer>
  );
}
