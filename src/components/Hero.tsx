export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" id="home">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center text-white">
            Hello <span className="text-secondary text-4xl leading-none ml-1">.</span>
          </h2>
          <div className="flex items-center mb-4">
            <div className="h-0.5 w-12 bg-primary mr-4 shadow-[0_0_8px_rgba(171,93,238,0.8)]"></div>
            <h3 className="text-2xl md:text-3xl font-light text-[#E0E0E0]">I'm Chanon</h3>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 drop-shadow-[0_0_15px_rgba(171,93,238,0.3)]">
            Full Stack Developer
          </h1>
          <div className="flex gap-4">
            <a className="px-6 py-3 bg-secondary hover:bg-[#15b329] text-black font-bold rounded shadow-neon-green transition-all transform hover:translate-y-[-2px]" href="#contacts">
                Got a project?
            </a>
            <a className="px-6 py-3 bg-transparent border border-gray-600 hover:border-white text-white font-medium rounded hover:bg-white/5 transition-all" href="#">
                Download Resume
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="absolute left-0 top-10 opacity-30 text-primary">
            <svg fill="none" height="80" stroke="currentColor" strokeWidth="2" viewBox="0 0 50 100" width="40">
              <path d="M40 10 L10 50 L40 90"></path>
            </svg>
          </div>
          <div className="absolute right-0 bottom-10 opacity-30 text-primary">
            <svg fill="none" height="80" stroke="currentColor" strokeWidth="2" viewBox="0 0 50 100" width="40">
              <path d="M10 10 L40 50 L10 90"></path>
            </svg>
          </div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/50 flex items-center justify-center p-4 shadow-[0_0_30px_rgba(171,93,238,0.2)]">
            <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-primary opacity-80 animate-spin-slow shadow-[0_0_15px_rgba(171,93,238,0.5)]" style={{ animationDuration: '10s' }}></div>
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-card-dark">
              <img alt="Chanon Wiriyathanachit - Full Stack Developer" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="src/assets/nonnicha.svg"/>
            </div>
            <div className="absolute inset-0 bg-primary blur-[80px] opacity-10 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-20">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500">
          {['Ruby on Rails', 'React', 'Next.js', 'Flutter', 'Java', 'PostgreSQL', 'Agile'].map(skill => (
            <div key={skill} className="text-sm md:text-base font-semibold uppercase tracking-wider text-gray-400 hover:text-primary cursor-default transition-colors">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
