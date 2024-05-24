import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-center border-b border-grey-300 border-opacity-[0.12] px-4  ">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Image src="/logo.png" width="190" height="39" alt="Logo" />
        <ul className="hidden space-x-4 text-grey-300 md:flex">
          <li>
            <Link className="hover:text-grey-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-grey-500" href="/">
              How It Works
            </Link>
          </li>
          <li>
            <Link className="hover:text-grey-500" href="/">
              Access Token
            </Link>
          </li>
          <li>
            <Link className="hover:text-grey-500" href="/">
              FAQ's
            </Link>
          </li>
          <li>
            <Link className="hover:text-grey-500" href="/">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className="invisible block rounded-3xl bg-orange px-4 py-4 leading-none text-white md:visible "
        >
          Get API Access Token
        </Link>
        <img className="md:hidden" src="/menu-3.svg" />
      </div>
    </header>
  );
}
