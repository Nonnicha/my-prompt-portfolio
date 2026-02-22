export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background-dark/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors uppercase">
          CHANON WIRIYATHANACHIT
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a className="text-gray-300 hover:text-primary transition-colors" href="#home">Home</a>
          <a className="text-gray-300 hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-gray-300 hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-gray-300 hover:text-primary transition-colors" href="#contacts">Contacts</a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
