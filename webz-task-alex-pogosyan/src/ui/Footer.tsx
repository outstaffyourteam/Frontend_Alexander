import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-b border-grey-700 border-opacity-20 bg-grey-300 px-4 py-9">
        <div className="flex w-full max-w-screen-lg flex-col items-center gap-16 text-white md:flex-row md:items-start md:justify-between md:gap-4">
          <div>
            <Image src="/footer/logo.png" width="190" height="39" alt="Logo" />
          </div>
          <div>
            <h3 className="mb-10 text-center font-roboto text-xl font-extrabold md:text-left">
              Site Links
            </h3>
            <ul className="flex flex-col gap-6 leading-none">
              <li className="text-center md:text-left">
                <Link href="/">Home</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">How it Works</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">Access Token</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">FAQ’s</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-10 text-center font-roboto text-xl font-extrabold md:text-left ">
              Others
            </h3>
            <ul className="flex flex-col gap-6 leading-none">
              <li className="text-center md:text-left">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/">News API</Link>
              </li>
            </ul>
          </div>
          <div>&nbsp;</div>
          <div>
            <h3 className="mb-10 text-center font-roboto text-xl font-extrabold text-white md:text-left">
              Social Media
            </h3>
            <div className="-mt-4 flex gap-4">
              <Link href="/">
                <img src="/footer/telegram.png" width="50"></img>
              </Link>
              <Link href="/">
                <img src="/footer/x.png" width="50"></img>
              </Link>
              <Link href="/">
                <img src="/footer/discord.png" width="50"></img>
              </Link>
              <Link href="/">
                <img src="/footer/web.png" width="50"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-grey-300">
        <p className="py-7 font-roboto leading-none text-grey-700">
          © 2024 by Webz.io, All Rights Reserved.
        </p>
      </div>
    </>
  );
}
