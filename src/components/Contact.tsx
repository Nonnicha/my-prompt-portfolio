export default function Contact() {
  return (
    <section className="py-24 bg-[#151515] relative overflow-hidden" id="contacts">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-0.5 w-12 bg-primary mr-4 shadow-[0_0_8px_rgba(171,93,238,0.8)]"></div>
              <h3 className="text-lg uppercase tracking-widest font-semibold text-gray-400">Contacts</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a project?</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Let's talk!</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>092-145-4487</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="material-symbols-outlined text-primary">email</span>
                <span>non@odds.team</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Bangkok, Thailand</span>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-secondary hover:bg-[#15b329] text-black font-bold rounded shadow-neon-green transition-all transform hover:translate-y-[-2px]">
              Submit
            </button>
          </div>
          
          <div className="flex flex-col justify-center space-y-10">
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-1 ml-1 group-focus-within:text-primary transition-colors">Name</label>
              <input className="w-full bg-card-dark border-b border-gray-600 focus:border-primary text-white outline-none px-4 py-3 rounded-t transition-colors" type="text"/>
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-1 ml-1 group-focus-within:text-primary transition-colors">Email</label>
              <input className="w-full bg-card-dark border-b border-gray-600 focus:border-primary text-white outline-none px-4 py-3 rounded-t transition-colors" type="email"/>
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-1 ml-1 group-focus-within:text-primary transition-colors">Message</label>
              <textarea className="w-full bg-card-dark border-b border-gray-600 focus:border-primary text-white outline-none px-4 py-3 rounded-t transition-colors resize-none" rows={3}></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
