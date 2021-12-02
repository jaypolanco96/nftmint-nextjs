import Link from "next/link";
import Image from "next/image";
import logo from "../images/lotus.png";

export default function Main() {
  return (
    <div>
      <section>
        <header>
          <Link href="/">
            <Image
              position="relative"
              src={logo}
              alt="logo"
              height={50}
              width={70}
            />
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/test">Whitepaper</Link>
            </li>
            <li>
              <Link href="/test">Team</Link>
            </li>
            <li>
              <Link href="/test">Community</Link>
            </li>
          </ul>
        </header>
      </section>
    </div>
  );
}
