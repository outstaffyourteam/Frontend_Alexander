import Header from "@/ui/Header";
import { search } from "@/webz";
import styles from "./index.module.css";
import NavBack from "@/ui/NavBack";
import PageTitle from "@/ui/PageTitle";
import CandidateProfile from "@/ui/Candidate/CandidateProfile";
import SentimentAnalysis from "@/ui/SentimentAnalysis";
import Articles from "@/ui/Articles/Articles";
import Pagination from "@/ui/Pagination";
import Footer from "@/ui/Footer";

export default async function Home() {
  const results = await search(
    "title:Trump AND (election OR polls) AND sentiment:(positive OR negative)AND language:english",
  );
  const positiveArticles = results.posts.filter(
    (post: any) => post.sentiment === "positive",
  );
  const negativeArticles = results.posts.filter(
    (post: any) => post.sentiment === "negative",
  );
  const sentimentData = [
    Math.round((positiveArticles.length / results.posts.length) * 100),
    Math.round((negativeArticles.length / results.posts.length) * 100),
  ];

  return (
    <>
      <Header />
      <NavBack />
      <PageTitle />
      <CandidateProfile />
      <SentimentAnalysis data={sentimentData} />
      <Articles posts={results.posts} />
      <Pagination />
      <Footer />
    </>
  );
}
