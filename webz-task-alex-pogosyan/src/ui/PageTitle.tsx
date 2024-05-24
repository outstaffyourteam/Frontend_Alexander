import Image from "next/image";

export default function PageTitle() {
  return (
    <div className="flex items-center justify-center bg-grey-700 px-4 py-9">
      <div className="flex w-full max-w-screen-lg flex-col justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="font-montserrat text-5xl font-black text-orange">
            2024 Presidential Candidates
          </h1>
          <p className="font-roboto text-grey-300 opacity-80">
            Donald Trump is the presumptive Republican presidential nominee who
            will face President Joe Biden in November. These were his GOP
            primary challengers.
          </p>
        </div>
        <div>
          <Image src="/map.svg" width="315" height="148" alt="US Map" />
        </div>
      </div>
    </div>
  );
}
