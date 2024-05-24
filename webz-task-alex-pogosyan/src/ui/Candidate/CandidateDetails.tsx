import styles from "./index.module.css";

export default function CandidateDetails() {
  return (
    <>
      <div className="pb-6">
        <h1 className="mb-3 text-center font-montserrat text-[34px] font-bold text-grey-300 md:text-left">
          Donald Trump
        </h1>
        <p className="text-center font-roboto text-[14px] leading-none text-grey-300 md:text-left">
          The Republicans
        </p>
      </div>

      <div className="mb-10 border-y border-grey-300 border-opacity-[0.15] py-10">
        <h1 className="mb-4 text-center font-montserrat text-2xl font-medium text-grey-300 md:text-left">
          About the candidate
        </h1>
        <p className="font-roboto text-grey-300 opacity-70">
          Former President Trump was the first candidate to declare his intent
          to run for the GOP nomination in 2024. He also became the first former
          president to face any kind of criminal charges after being indicted by
          a Manhattan grand jury in a case related to a payoff to a porn star.
          He now faces federal criminal charges, too, related to his alleged
          mishandling of classified documents that were discovered at his
          Mar-a-Lago resort. (Trump has denied wrongdoing in both cases.)
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-center font-montserrat text-2xl font-medium text-grey-300 md:text-left">
          Campaign positions
        </h1>
        <ul className={`${styles.customList} text-grey-300 opacity-70`}>
          <li>
            Support legislation that represents a “record investment” in police
          </li>
          <li>
            Pardon "a large portion” of the people convicted of federal offenses
            for their participation in the Jan. 6, 2021, attack on the U.S.
            Capitol.
          </li>
          <li>
            Sign an executive order instructing federal agencies to “cease all
            programs that promote the concept of sex and gender transition at
            any age"; punish doctors who provide gender-affirming care to
            minors.
          </li>
          <li>
            “Get something done” on abortion; has declined to specify how many
            weeks into a pregnancy he would support a ban; has said a federal
            ban would need to include exceptions for rape, incest and life of
            the mother.
          </li>
        </ul>
      </div>
    </>
  );
}
