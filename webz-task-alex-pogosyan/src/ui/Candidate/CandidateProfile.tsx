import Link from "next/link";
import CandidateDetails from "./CandidateDetails";

export default function CandidateProfile() {
  return (
    <div className="flex items-center justify-center px-4 py-14">
      <div className="flex w-full max-w-screen-lg flex-col gap-[76px] md:flex-row">
        <div className="relative md:basis-5/12">
          <img src="/trump.jpg" />
          <div className="md:hidden">
            <CandidateDetails />
          </div>
          <div className="mt-[10px] flex flex-col items-center gap-3 rounded-[10px] bg-grey-900 py-4 text-grey-300">
            <p>Campaign Website</p>
            <Link className="text-orange" href="https://www.donaldtrump.com/">
              https://www.donaldtrump.com/
            </Link>
            <p>Social Media</p>
            <div className="flex items-center gap-2">
              <Link href="/">
                <img src="/fb.svg" />
              </Link>
              <Link href="/">
                <img src="/x.svg" />
              </Link>
              <Link href="/">
                <img src="/insta.svg" />
              </Link>
              <Link href="/">
                <img src="/yt.svg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden md:block md:basis-7/12">
          <CandidateDetails />
        </div>
      </div>
    </div>
  );
}
