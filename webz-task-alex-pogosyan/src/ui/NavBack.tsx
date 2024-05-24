import Link from "next/link";

export default function NavBack() {
  return (
    <div className="flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-screen-lg">
        <Link className="flex text-orange" href="/">
          <img src="/left-arrow.svg" /> Go back
        </Link>
      </div>
    </div>
  );
}
