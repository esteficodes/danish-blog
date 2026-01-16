import Link from "next/link";
import Header from "@/components/Header";
import { getCategorisedArticles } from "@/lib/articles";

export const metadata = {
  title: "Digte | Jeg prøver på Dansk",
  description: "Mine digte og poesi",
};

const DigtePage = () => {
  const articles = getCategorisedArticles();
  const categories = Object.keys(articles);
  const digteArticles = articles["Digte"] || [];

  return (
    <>
      <Header categories={categories} />

      <main className="mx-auto w-11/12 md:w-1/2 mt-12 mb-20">
        <header className="mb-12 text-center">
          <h1 className="font-cormorantGaramond font-light text-5xl text-neutral-900 mb-4">
            Digte
          </h1>
          <p className="font-poppins text-neutral-500">
            Mine digte og poesi
          </p>
        </header>

        {digteArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-poppins text-neutral-500">
              Ingen digte i denne kategori endnu.
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
            {digteArticles.map((article) => (
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

export default DigtePage;

