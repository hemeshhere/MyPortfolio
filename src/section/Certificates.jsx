import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import ParticlesBackground from "../components/ParticlesBackground";

const Certificates = () => {
  // Removed image fields, focusing purely on the data
  const certificates = [
    {
      id: 1,
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "Oct 2025",
      ref: "NPTEL25CS117S145870",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS117S145870201510526007",
    },
    {
      id: 2,
      title: "Adobe Hackathon - Round 2",
      issuer: "Unstop",
      date: "Oct 2025",
      ref: "5e24d709-ff15-4746",
      link: "https://unstop.com/certificate-preview/5e24d709-ff15-4746-86d6-5b92349a96d9",
    },
    {
      id: 3,
      title: "Deloitte Australia - Technology Job Simulation",
      issuer: "Forage",
      date: "Aug 2025",
      ref: "9PBTqmSxAf6zZTseP",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_A6N74JYPjpe9hTgoj_1755586469446_completion_certificate.pdf",
    },
  ];

  // Background glowing orbs
  const glows = [
    "-top-20 -left-20 w-[400px] h-[400px] opacity-20 blur-[120px]",
    "bottom-10 right-10 w-[350px] h-[350px] opacity-15 blur-[130px] delay-200",
    "top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-10 blur-[100px] delay-500",
  ];

  return (
    <section
      id="certificates"
      className="w-full min-h-screen relative bg-black text-white overflow-hidden py-24 flex items-center"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ParticlesBackground />
      </div>
      <div className="absolute inset-0 pointer-events-none z-0">
        {glows.map((c, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 0.3}s` }}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <motion.div
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <TbCertificate className="text-3xl text-[#1cd8d2]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
              Verified Credentials
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            A chronological log of my specialized training, hackathon participations, and professional certifications.
          </p>
        </motion.div>

        {/* The Cyber-Timeline */}
        <div className="relative">
          {/* Main vertical track line */}
          <div className="absolute left-4 md:left-[8.5rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1cd8d2]/50 via-[#00bf8f]/20 to-transparent"></div>

          <div className="flex flex-col gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                
                {/* 1. Date Node (Left side on desktop, top on mobile) */}
                <div className="md:w-32 flex-shrink-0 flex items-center mb-4 md:mb-0 pt-2 md:pr-8 z-10">
                  <div className="hidden md:block text-right w-full">
                    <span className="text-sm font-mono font-bold text-[#00bf8f] group-hover:text-[#1cd8d2] transition-colors duration-300">
                      {cert.date}
                    </span>
                  </div>

                  {/* Glowing Geometric Node */}
                  <div className="absolute left-[11px] md:left-[8.15rem] top-2 md:top-3 w-4 h-4 rounded-sm rotate-45 bg-black border-2 border-[#1cd8d2] group-hover:bg-[#1cd8d2] shadow-[0_0_15px_rgba(28,216,210,0.5)] group-hover:shadow-[0_0_25px_rgba(28,216,210,0.9)] transition-all duration-300 transform group-hover:scale-125" />
                  
                  {/* Mobile Date text */}
                  <span className="md:hidden ml-10 text-sm font-mono font-bold text-[#1cd8d2]">
                    {cert.date}
                  </span>
                </div>

                {/* 2. Content Data Plate */}
                <div className="ml-10 md:ml-0 flex-1 relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00bf8f]/40 backdrop-blur-md rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,191,143,0.1)] group-hover:-translate-y-1 overflow-hidden">
                  
                  {/* Subtle hover gradient wash inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2]/0 to-[#00bf8f]/0 group-hover:from-[#1cd8d2]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-mono font-semibold tracking-widest text-[#00bf8f] bg-[#00bf8f]/10 border border-[#00bf8f]/20 rounded-full uppercase">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider hidden sm:block">
                        REF // {cert.ref}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-6 group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>

                    {/* Action Link */}
                    <div className="mt-auto">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 group-hover:text-[#1cd8d2] transition-colors duration-300"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          [
                        </span>
                        VERIFY_RECORD
                        <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          ]
                        </span>
                        <FaExternalLinkAlt className="ml-1 text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;