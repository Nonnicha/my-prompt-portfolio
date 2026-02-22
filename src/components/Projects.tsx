import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-24 relative bg-background-dark" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(171,93,238,0.5)]"></div>
        </motion.div>

        {/* BKK Foodbank */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32 border-b border-gray-800 pb-16"
        >
          <div className="order-2 md:order-1 flex gap-4">
            <div className="w-1/2 rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 border border-gray-800">
              <img
                alt="BKK Foodbank App Interface"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARJlAIcSsxJ2hDbVlBcJDVH_tCQtATzZdYUpCBnLUNvFnPYEYA_iAB0afZwUKIN9eQ7LeN7K913It_XAUa6eZEsCnaMVKnBAdzq4DHDE7C6BM372pXffd_kVPQ_whwf6o9xxY4nldXxGjK7x5AWHaiwzBlS8Ul84e7ufgj5rl_Zz9z0lR7vyu0lU-iUyM2VHOgivZKbVqGbbghGkY1azX39OBLl0aK6IYOIfjTQuEceXmWkmpoeaDbHJBlvwtAGqp5P_SiOMonA28"
              />
            </div>
            <div className="w-1/2 rounded-lg overflow-hidden shadow-2xl transform hover:translate-y-2 transition-transform duration-500 mt-8 border border-gray-800">
              <img
                alt="BKK Foodbank Dashboard Interface"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQyEcjLpb_9T4krWzUDGZN90NiQtArZNJftgJPFbtxMnR8_KkwIFhueBMFtYG-QPtEl5tJxSXS2P0JRM7cx8X3-0aiIJpKd6BdXdDESLxdwwTa_qUbitvC4FcNlmh_EAuo5qvoqQ4dwGtRtHrv6rTlU6quC54un0eu7FX7zoK4oArM1sDQ8YCYUAf4WnFQ67kqJkEBscHnVJ60rPzkBEu5_He1ARHFBByU4rUAynVq6vStXMlhcsFggm1QGxmO58S3qaVWJYIZWZ4"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-white mb-1">BKK Foodbank</h3>
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest font-mono">
              Nov 2024 – Mar 2025
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "TypeScript", "Vite", "Express.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-xs font-mono rounded text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[#E0E0E0] mb-8 text-sm leading-relaxed">
              A large-scale web system for all 51 Bangkok districts to manage
              donations under Governor Chadchart Sittipunt.
            </p>
            <div className="flex gap-6 items-center">
              <a
                className="px-6 py-2.5 bg-tertiary hover:bg-red-700 text-white font-bold rounded shadow-lg shadow-red-500/20 transition-all"
                href="#"
              >
                View Details
              </a>
            </div>
          </div>
        </motion.div>

        {/* BMA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32 border-b border-gray-800 pb-16"
        >
          <div className="order-1">
            <h3 className="text-2xl font-bold text-white mb-1">
              BMA Metropolitan Administration
            </h3>
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest font-mono">
              Apr 2025 – May 2025
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ruby on Rails", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-xs font-mono rounded text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[#E0E0E0] mb-8 text-sm leading-relaxed">
              Web platform for vocational schools supporting course management
              and enrollment.
            </p>
            <div className="flex gap-6 items-center">
              <a
                className="px-6 py-2.5 bg-tertiary hover:bg-red-700 text-white font-bold rounded shadow-lg shadow-red-500/20 transition-all"
                href="#"
              >
                View Details
              </a>
            </div>
          </div>
          <div className="order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700 bg-[#0d1117] font-mono text-xs p-4 text-green-400 relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="mb-2 text-gray-500">
                // BMA Course Enrollment Controller
              </div>
              <div className="space-y-1">
                <p>
                  <span className="text-purple-400">class</span>{" "}
                  EnrollmentsController &lt; ApplicationController
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">def</span> create
                </p>
                <p className="pl-8">
                  @course = Course.find(params[:course_id])
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">if</span>{" "}
                  @course.available_seats &gt; 0
                </p>
                <p className="pl-12">current_student.enroll!(@course)</p>
                <p className="pl-12">
                  render json: {"{"} status:{" "}
                  <span className="text-yellow-300">'success'</span> {"}"}
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">else</span>
                </p>
                <p className="pl-12">
                  render json: {"{"} error:{" "}
                  <span className="text-yellow-300">'Full'</span> {"}"}, status:
                  :unprocessable_entity
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">end</span>
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">end</span>
                </p>
                <p>
                  <span className="text-purple-400">end</span>
                </p>
                <p className="text-secondary font-bold mt-2">
                  &gt; Course Management System Active.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Friendslog */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700 bg-card-dark group">
              <img
                alt="Friendslog Interface"
                className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2GXhlWOjnAuG-YhGIWEAsetRC4MGhDfr7Y3kmH7Rxf43KEWbxOds83k8qtmoeM9mnvo5LBvPkD3rRfDz5J27lMs2vZxqtzccIbEeZk_xPoFRsIHA-9ycbpk1GjQZFL8LrOMdrZhkMGWmoC1Lce297Tm53HL0K4p2Ykx61Rz6zOECKib7h-agfA4MU6tgYk454BjLhHL7yQNjSFGroD5FPKKmxiR08W0JJWnIxLmAT9Qp0xTuOvaj_VCGsKDsFc-HW3LxIiB9GEFY"
              />
              <div className="p-6 bg-card-dark">
                <h4 className="text-xl font-bold text-white mb-2">
                  Internal Workforce Management
                </h4>
                <p className="text-gray-400 text-sm">
                  Efficient time tracking for developer teams.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-white mb-1">Friendslog</h3>
            <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest font-mono">
              Software Developer Intern, 2024
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Ruby on Rails", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-xs font-mono rounded text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[#E0E0E0] mb-8 text-sm leading-relaxed">
              Internal workforce time tracking application.
            </p>
            <div className="flex gap-6 items-center">
              <a
                className="px-6 py-2.5 bg-tertiary hover:bg-red-700 text-white font-bold rounded shadow-lg shadow-red-500/20 transition-all"
                href="#"
              >
                View Details
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
