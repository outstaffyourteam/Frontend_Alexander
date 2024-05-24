import ArticleCard from "./ArticleCard";

export default function Articles({ posts }: any) {
  const positiveArticles = posts.filter(
    (post: any) => post.sentiment === "positive",
  );
  const negativeArticles = posts.filter(
    (post: any) => post.sentiment === "negative",
  );

  return (
    <div className="flex items-center justify-center bg-grey-900 px-4 pt-6 ">
      <div className="flex w-full max-w-screen-lg flex-col gap-6 md:flex-row">
        <div className="flex w-full flex-col gap-4 rounded-[25px] border border-green bg-gradient-to-b from-green/10 to-green/0 px-6 py-9">
          <div>
            <span className="font-bold text-green">
              {positiveArticles.length}
            </span>{" "}
            Positive Articles
          </div>
          {positiveArticles.map((article: any) => (
            <ArticleCard key={article.uuid} article={article} accent="green" />
          ))}
        </div>

        <div className="flex w-full flex-col gap-4 rounded-[25px] border border-red bg-gradient-to-b from-red/10 to-red/0 px-6 py-9">
          <div>
            <span className="font-bold text-red">
              {negativeArticles.length}
            </span>{" "}
            Negative Articles
          </div>

          {negativeArticles.map((article: any) => (
            <ArticleCard key={article.uuid} article={article} accent="red" />
          ))}
        </div>
      </div>
    </div>
  );
}
