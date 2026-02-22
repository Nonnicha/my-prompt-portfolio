export default function About() {
  const experiences = [
    { title: 'Ruby on Rails', level: 'Working' },
    { title: 'React', level: 'Working' },
    { title: 'Next.js', level: 'Working' },
    { title: 'Agile / Scrum', level: 'Working' },
    { title: 'springboot (Kotlin)', level: 'Basic' },
    { title: 'Flutter', level: 'Basic' },
  ];

  return (
    <section className="py-20 bg-[#151515]" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-6 relative">
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary to-transparent opacity-30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative bg-card-dark border border-primary/20 rounded-lg p-6 hover:border-primary/60 transition-colors group">
                <div className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-[#151515]"></div>
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-semibold text-white">{exp.title}</div>
                  <div className="text-xs text-secondary font-mono tracking-wider uppercase">{exp.level}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About me</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-12 max-w-2xl font-light text-lg">
              Full Stack Developer with 2+ years experience. Computer Engineering graduate from Khon Kaen University (2025). Skilled in Agile/Scrum and building end-to-end scalable solutions.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-card-dark border border-primary/30 p-6 rounded-lg text-center hover:bg-primary/5 transition-colors">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">2 <span className="text-secondary">+</span></div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">Years of<br/>Experience</div>
              </div>
              <div className="bg-card-dark border border-primary/30 p-6 rounded-lg text-center hover:bg-primary/5 transition-colors">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">10 <span className="text-secondary">+</span></div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">Successful<br/>Projects</div>
              </div>
              <div className="bg-card-dark border border-primary/30 p-6 rounded-lg text-center hover:bg-primary/5 transition-colors">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">100 <span className="text-secondary">%</span></div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">Commitment<br/>rate</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
