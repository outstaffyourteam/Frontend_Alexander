import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center bg-grey-900 pb-[174px] pt-[70px]">
      <div className="flex w-full max-w-screen-lg justify-center gap-3">
        <Link
          href="/"
          className="rounded-[7px] border border-grey-300 border-opacity-15 px-4 py-[13px] leading-none text-grey-300 text-opacity-50 hover:border-orange hover:border-opacity-100 hover:bg-orange hover:text-white"
        >
          Prev
        </Link>
        <Link
          href="/"
          className="rounded-[7px] border border-orange bg-orange px-4 py-[13px] leading-none text-white hover:border-orange hover:border-opacity-100 hover:bg-orange hover:text-white"
        >
          1
        </Link>
        <Link
          href="/"
          className="rounded-[7px] border border-grey-300 border-opacity-15 px-4 py-[13px] leading-none text-grey-300 text-opacity-50 hover:border-orange hover:border-opacity-100 hover:bg-orange hover:text-white"
        >
          2
        </Link>
        <Link
          href="/"
          className="rounded-[7px] border border-grey-300 border-opacity-15 px-4 py-[13px] leading-none text-grey-300 text-opacity-50 hover:border-orange hover:border-opacity-100 hover:bg-orange hover:text-white"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
