import Link from "next/link";
import Header from "@/components/Header";
import { getCategorisedArticles } from "@/lib/articles";

export const metadata = {
  title: "Tanker | Jeg prøver på Dansk",
  description: "Mine tanker og refleksioner",
};

const TankerPage = () => {
  const articles = getCategorisedArticles();
  const categories = Object.keys(articles);
  const tankerArticles = articles["Tanker"] || [];

  return (
    <>
      <Header />

      <main className="mx-auto w-11/12 md:w-1/2 mt-12 mb-20">
        <header className="mb-12 text-center">
          <h1 className="font-cormorantGaramond font-light text-5xl text-neutral-900 mb-4">
            Tanker
          </h1>
          <p className="font-poppins text-neutral-500">
            Mine tanker og refleksioner
          </p>
        </header>

        {tankerArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-poppins text-neutral-500">
              Ingen artikler i denne kategori endnu.
            </p>
            <Link
              href="/"
              className="font-poppins text-amber-700 hover:text-amber-900 transition duration-150 mt-4 inline-block"
            >
              ← Tilbage til forsiden
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {tankerArticles.map((article) => (
              <article
                key={article.id}
                className="border-b border-neutral-200 pb-6 last:border-0"
              >
                <Link href={`/${article.id}`} className="group block">
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
        )}
      </main>
    </>
  );
};

export default TankerPage;

