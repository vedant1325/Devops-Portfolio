import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Frontend Developer", "DevOps Engineer", "AI Graduate"];

export default function Portfolio() {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!deleting) {
        setDisplayedRole(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) {
          setDeleting(true);
        }
      } else {
        setDisplayedRole(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 60 : 120);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("hero")}>
            Vedant Dange
          </h1>
          {/* Desktop Menu - Hidden on mobile, flex on medium+ */}
          <ul className="hidden md:flex gap-8 text-white font-semibold">
            {["Home", "About", "Skills", "Experience", "Contact"].map((section) => (
              <li key={section} className="cursor-pointer hover:text-cyan-400 transition"
                  onClick={() => scrollToSection(section.toLowerCase())}>
                {section}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Neon Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-8 rounded-full 
             border-4 border-cyan-400 shadow-[0_0_60px_#22d3ee] overflow-hidden opacity-20" />
        <div className="absolute bottom-[-100px] right-[-100px] md:bottom-[-200px] md:right-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500 rounded-full blur-[150px] md:blur-[200px] opacity-30" />
      </div>

      {/* Hero */}
      <section id="hero" className= "flex flex-col items-center justify-center text-center px-6 py-28 pt-36 min-h-screen">
        {/* Profile Photo with moving light */}
        <motion.div
          className="relative w-36 h-36 md:w-48 md:h-48 mb-6 rounded-full border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.8)] overflow-hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/profile.jpeg"
            alt="Vedant Dange"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full pointer-events-none animate-light bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-50"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Vedant Dange
        </motion.h1>

        {/* Typing Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-2xl text-gray-300 font-medium h-10"
        >
          {displayedRole}
          <span className="text-cyan-400">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mt-4 md:mt-6 text-gray-400 font-medium text-sm md:text-base px-4"
        >
          Building scalable, secure, and automated cloud infrastructure using modern DevOps practices.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-10 w-full sm:w-auto px-10 sm:px-0"
        >
          <a
            href="https://github.com/vedant1325"
            target="_blank"
            className="px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-[0_0_20px_#22d3ee] text-center"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-dange-7954b327a/"
            target="_blank"
            className="px-7 py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition shadow-[0_0_20px_#ec4899] text-center"
          >
            LinkedIn
          </a>
          <a
            href="/Vedant_Dange_Full Stack Developer_DevOps.pdf"
            download
            className="px-7 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition shadow-[0_0_20px_#22eeaa] flex items-center gap-2 justify-center"
          >
            <Download size={20} /> Resume
          </a>
        </motion.div>
      </section>

      {/* About Me */}
      <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400"
        >
          About Me
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-base md:text-xl leading-relaxed"
        >
          Bridging the gap between Artificial Intelligence and Cloud Infrastructure. As a B.Tech graduate in AI and a DevOps practitioner, I specialize in building self-healing, automated environments.<br></br> I don't just deploy code; I architect the pipelines that make innovation possible.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {["React", "JavaScript", "Python", "AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Tailwind CSS", "MongoDB", "Linux", "Git"].map(skill => (
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={skill}
              className="rounded-xl md:rounded-2xl p-4 md:p-5 text-center text-sm md:text-base font-semibold border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-20 max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400"
        >
          Experience
        </motion.h2>
        <div className="space-y-6 md:space-y-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="rounded-2xl md:rounded-3xl p-5 md:p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">DevOps Engineer Intern – Hisan Labs</h3>
            <p className="text-gray-400 text-sm md:text-base">March 2025 – November 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-300 text-sm md:text-base space-y-1">
              <li>AWS infrastructure & load balancing</li>
              <li>CI/CD pipelines with Jenkins</li>
              <li>Docker & Kubernetes deployments</li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="rounded-2xl md:rounded-3xl p-5 md:p-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-pink-400">Frontend Developer Intern – LocationGuru</h3>
            <p className="text-gray-400 text-sm md:text-base">January 2025 – March 2025</p>
            <ul className="list-disc list-inside mt-3 text-gray-300 text-sm md:text-base space-y-1">
              <li>React.js UI development</li>
              <li>Tailwind CSS design systems</li>
              <li>Git collaboration workflows</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 text-center">
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          Contact
        </motion.h2>
        <div className="space-y-4 text-gray-300 text-sm md:text-base">
          <p className="flex justify-center items-center gap-2 flex-wrap px-4"><Mail className="text-cyan-400" size={20}/> vedantdange149@gmail.com</p>
          <p className="flex justify-center items-center gap-2"><Phone className="text-cyan-400" size={20}/> +91 7378850037</p>
          <p className="flex justify-center items-center gap-2"><MapPin className="text-cyan-400" size={20}/> Nagpur, India</p>
          <div className="flex justify-center gap-8 mt-8">
            <a href="https://github.com/vedant1325" target="_blank" className="hover:text-cyan-400 transition-colors"><Github size={32}/></a>
            <a href="https://www.linkedin.com/in/vedant-dange-7954b327a/" target="_blank" className="hover:text-cyan-400 transition-colors"><Linkedin size={32}/></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4 text-center">
          <p>© {new Date().getFullYear()} Vedant Dange 🌟</p>
          <p>Neon Dark Portfolio 💻✨</p>
        </div>
      </footer>

      {/* Tailwind Custom CSS */}
      <style>
        {`
          @keyframes light-slide {
            0% { transform: translateX(-100%) rotate(25deg); }
            100% { transform: translateX(100%) rotate(25deg); }
          }
          .animate-light {
            animation: light-slide 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
}