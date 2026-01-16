import ArticleItemList from "@/components/ArticleListItem";
import Header from "@/components/Header";
import { getCategorisedArticles } from "@/lib/articles";

const HomePage = () => {
  const articles = getCategorisedArticles();
  const categories = Object.keys(articles);

  return (
    <>
      <Header />
      
      <main className="mx-auto w-11/12 md:w-1/2 mt-12 flex flex-col gap-16 mb-20">
        <header className="font-cormorantGaramond font-light text-5xl sm:text-6xl text-neutral-900 text-center">
          <h1>Jeg prøver på Dansk</h1>
          <p className="font-poppins text-base text-neutral-500 mt-4 italic">
            Mine ydmyge forsøg på at håndtere det danske sprog
          </p>
        </header>

        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
              <ArticleItemList
                category={category}
                articles={articles[category]}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
