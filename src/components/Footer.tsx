export default function Footer() {
  return (
    <footer className="bg-background-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-lg font-bold text-white mb-2">Chanon Wiriyathanachit</h3>
        <p className="text-sm text-gray-500 mb-8">© Chanon Wiriyathanachit. All rights reserved.</p>
        
        <div className="flex justify-center space-x-6">
          <a className="w-10 h-10 rounded-full bg-card-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg" href="mailto:non@odds.team">
            <span className="material-symbols-outlined text-xl">email</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-card-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg" href="#">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a className="w-10 h-10 rounded-full bg-card-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg" href="#">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
