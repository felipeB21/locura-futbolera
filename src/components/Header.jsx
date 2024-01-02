import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/LOCURA.png";

const my_links = [
  { name: "Instagram", path: "#" },
  { name: "Donar", path: "#" },
];

export default function Header() {
  return (
    <header className="bg-neutral-950 py-3 fixed top-0 w-full">
      <div className="flex items-center justify-between w-[1200px] mx-auto">
        <div className="w-auto h-auto">
          <Link href="/">
            <Image src={Logo} alt="LOCURA" width={120} height={80} />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            {my_links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
