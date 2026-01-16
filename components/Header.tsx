import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-neutral-100">
      <div className="mx-auto w-11/12 md:w-1/2 py-6">
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link 
            href="/" 
            className="font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
          >
            Hjem
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link
              href="/artikler"
              className="font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
            >
              Alle Artikler
            </Link>
            
            <Link
              href="/tanker"
              className="font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
            >
              Tanker
            </Link>
            
            <Link
              href="/digte"
              className="font-poppins text-sm text-neutral-600 hover:text-amber-700 transition duration-150"
            >
              Digte
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

