import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import ParticlesBackground from "../components/ParticlesBackground";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.Tech - Computer Science & Engineering",
      institution: "Lovely Professional University, Punjab, India",
      score: "CGPA: 7.43",
      duration: "Since Aug 2023",
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      institution: "M.K.D.A.V Public School, Medininagar",
      score: "Percentage: 74%",
      duration: "Apr 2021 - Mar 2022",
    },
    {
      id: 3,
      degree: "Matriculation (10th Grade)",
      institution: "M.K.D.A.V Public School, Medininagar",
      score: "Percentage: 88.4%",
      duration: "Apr 2019 - Mar 2020",
    },
  ];

  return (
    <section
      id="education"
      className="w-full min-h-screen relative bg-black text-white overflow-hidden py-24 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGraduationCap className="text-3xl sm:text-4xl text-[#00bf8f]" />
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-sm">
              Education
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My academic journey and the foundational steps of my career in technology.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg hover:shadow-[0_0_30px_rgba(28,216,210,0.15)] transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative border-l-2 border-white/10 ml-2 md:ml-4 space-y-12 pb-2">
            
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative pl-8 md:pl-10 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-[3px] border-[#00bf8f] shadow-[0_0_12px_rgba(0,191,143,0.5)] group-hover:scale-125 group-hover:bg-[#1cd8d2] group-hover:border-[#1cd8d2] group-hover:shadow-[0_0_15px_rgba(28,216,210,0.8)] transition-all duration-300" />
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-xl md:text-[22px] font-bold text-gray-100 group-hover:text-[#1cd8d2] transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-base text-gray-400">
                    {edu.institution} <span className="text-gray-600 mx-1">|</span>{" "}
                    <span className="text-gray-200 font-bold">{edu.score}</span>
                  </p>
                  <div className="mt-2 inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/20 shadow-sm transition-all duration-300 group-hover:border-[#1cd8d2]/40 group-hover:bg-[#1cd8d2]/10">
                    <span className="text-[#00bf8f] group-hover:text-[#1cd8d2] transition-colors duration-300 text-xs sm:text-sm font-semibold tracking-wide">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;