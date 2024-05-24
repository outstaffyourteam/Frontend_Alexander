import PieChartComponent from "./PieChartComponent";
import styles from "./index.module.css";

export default function SentimentAnalysis({ data }: any) {
  return (
    <div className={`${styles.splitBg} flex items-center justify-center px-4`}>
      <div className="flex w-full max-w-screen-lg flex-col justify-between gap-10 rounded-[25px] bg-grey-700 px-[24px] py-[32px] md:flex-row md:py-[27px] md:pl-[37px] md:pr-[48px]">
        <div className="flex flex-col gap-6 text-grey-300 md:w-7/12">
          <div className="flex items-center gap-4">
            <img src="ph_smiley.svg" />
            <h1 className="font-montserrat text-3xl font-bold text-orange md:text-5xl">
              Sentiment Analysis
            </h1>
          </div>
          <p>
            Webz.io sources and collects data from across the web and transforms
            it into machine-ready feeds that plug right into any platform. It
            deploys a wide array of crawlers that run in near real-time, drawing
            from millions of sources — covering everything from the biggest news
            sites, to obscure blogs and forums, all the way to the furthest
            reaches of the dark web.
          </p>
          <p>
            All stored in repositories, so machines consume live and historical
            data on demand. Webz.io gives machines data exactly the way they
            need it, so companies easily turn web data into customer value.
          </p>
        </div>
        <div className="flex justify-end md:w-4/12">
          <PieChartComponent data={data} />
        </div>
      </div>
    </div>
  );
}
