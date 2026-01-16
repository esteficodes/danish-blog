import Link from "next/link";
import Header from "@/components/Header";
import { getCategorisedArticles } from "@/lib/articles";

export const metadata = {
  title: "Alle Artikler | Jeg prøver på Dansk",
  description: "Se alle artikler på bloggen",
};

const AllArticlesPage = () => {
  const articles = getCategorisedArticles();
  const categories = Object.keys(articles);

  // Flatten all articles into a single array with category info
  const allArticles = categories.flatMap((category) =>
    articles[category].map((article) => ({ ...article, category }))
  );

  // Sort by date (newest first)
  allArticles.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("-").map(Number);
    const [dayB, monthB, yearB] = b.date.split("-").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <Header categories={categories} />

      <main className="mx-auto w-11/12 md:w-1/2 mt-12 mb-20">
        <header className="mb-12 text-center">
          <h1 className="font-cormorantGaramond font-light text-5xl text-neutral-900 mb-4">
            Alle Artikler
          </h1>
          <p className="font-poppins text-neutral-500">
            {allArticles.length} artikler i alt
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {allArticles.map((article) => (
            <article
              key={article.id}
              className="border-b border-neutral-200 pb-6 last:border-0"
            >
              <Link
                href={`/${article.id}`}
                className="group block"
              >
                <p className="font-poppins text-xs text-amber-700 uppercase tracking-wider mb-1">
                  {article.category}
                </p>
                <h2 className="font-cormorantGaramond text-2xl text-neutral-900 group-hover:text-amber-700 transition duration-150 mb-2">
                  {article.title}
                </h2>
                <p className="font-poppins text-sm text-neutral-500">
                  {article.date}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default AllArticlesPage;

