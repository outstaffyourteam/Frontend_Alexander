import clsx from "clsx";
import Link from "next/link";

export default function ArticleCard({ article, accent }: any) {
  const formattedDate = new Date(article.published).toLocaleDateString();

  return (
    <div className="rounded-[10px] bg-white px-3.5 pb-5 pt-3.5 ">
      {article.thread.main_image ? (
        <div className="mb-5 overflow-hidden rounded-lg">
          <img src={article.thread.main_image} alt="alt" />
        </div>
      ) : null}
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`${clsx({
            "bg-red": accent === "red",
            "bg-green": accent === "green",
          })} rounded-[28px] px-[13px] py-[7px] leading-tight text-white`}
        >
          Article
        </div>
        <p className="font-roboto text-sm text-grey-300 text-opacity-50">
          Posted by Admin {formattedDate}
        </p>
      </div>
      <h1 className="mb-4 font-montserrat text-2xl font-bold text-grey-300 ">
        {article.title}
      </h1>
      <p className="mb-6 text-grey-300 text-opacity-50">{article.text}</p>
      <Link
        href={article.url}
        className={clsx({
          "text-red": accent === "red",
          "text-green": accent === "green",
        })}
      >
        View Original Article →
      </Link>
    </div>
  );
}
