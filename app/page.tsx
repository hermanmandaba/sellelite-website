import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex items-center justify-between w-full max-w-4xl">
        <Image
          src="/logo.svg"
          alt="SellElite Agency Logo"
          width={150}
          height={50}
        />
        <nav className="flex gap-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4 font-heading">Bienvenue chez SellElite Agency</h1>
        <p className="text-lg text-gray-600 font-body">
          Création de sites vitrines modernes et optimisés pour PME et infopreneurs.
        </p>
      </main>

      <footer className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} SellElite Agency. Tous droits réservés.
      </footer>
    </div>
  );
}
