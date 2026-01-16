import Link from "next/link";
import Header from "@/components/Header";
import { getArticleData, getAllArticleIds } from "@/lib/articles";

export async function generateStaticParams() {
  const articles = getAllArticleIds();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleData = await getArticleData(slug);
  return {
    title: `${articleData.title} | Jeg prøver på Dansk`,
    description: `Læs ${articleData.title} på Jeg prøver på Dansk`,
  };
}

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);

  return (
    <>
      <Header />
      
      <main className="mx-auto w-11/12 md:w-1/2 mt-12 mb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="font-poppins text-amber-700 hover:text-amber-900 transition duration-150"
          >
            ← Tilbage til forsiden
          </Link>
        </div>

        <article className="prose prose-neutral max-w-none">
          <header className="mb-8 border-b border-neutral-200 pb-8">
            <p className="font-poppins text-sm text-amber-700 uppercase tracking-wider mb-2">
              {articleData.category}
            </p>
            <h1 className="font-cormorantGaramond font-light text-5xl text-neutral-900 mb-4">
              {articleData.title}
            </h1>
            <p className="font-poppins text-neutral-500 text-sm">
              {articleData.date}
            </p>
          </header>

          <div
            className="font-poppins text-neutral-700 leading-relaxed article-content"
            dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
          />
        </article>
      </main>
    </>
  );
};

export default ArticlePage;

