"use client";
import { navLinks, services, experiences, projects, skills, education, aboutText } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Layout, 
  Server, 
  Smartphone, 
  Cloud, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ArrowLeft,
  Mail,
  Database,
  Settings, 
  GraduationCap,
  CheckCircle2,
  Code2
} from "lucide-react";

// Icon Mapper to match data strings to Lucide Components
const IconMap: any = { Layout, Server, Smartphone, Cloud, Database, Settings, Code2 };

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Shane<span className="text-white">.Dev</span></h1>
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-cyan-400 transition text-sm uppercase tracking-wider font-medium text-slate-400">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto" id="about">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Shane Alam.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">{aboutText.heading}</h2>
          
          <div className="max-w-3xl text-slate-400 text-lg leading-relaxed mb-8 space-y-4">
            <p>{aboutText.bio}</p>
            <div className="pt-2">
                <h3 className="text-slate-200 font-semibold mb-2">Key Highlights:</h3>
                <ul className="list-disc pl-5 space-y-1 text-base">
                    {aboutText.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 transition">Check my work</a>
            <div className="flex gap-4 items-center px-4">
              <Link href="https://github.com/shane6123" target="_blank"><Github className="hover:text-cyan-400 cursor-pointer" /></Link>
              <Link href="https://www.linkedin.com/in/shanealam/" target="_blank"><Linkedin className="hover:text-cyan-400 cursor-pointer" /></Link>
              <a href="mailto:shanealam6123@gmail.com"><Mail className="hover:text-cyan-400 cursor-pointer" /></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. SPECIALIZATION SECTION (01) */}
      <section className="py-20 px-6 bg-slate-900/20 relative" id="specialization">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                <span className="text-cyan-400 font-mono">01.</span> My Specialization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
                const Icon = IconMap[service.icon];
                return (
                <motion.div 
                    key={index}
                    whileHover={{ y: -8 }}
                    className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group shadow-2xl shadow-black/40 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 text-slate-300 transition-colors relative z-10 border border-slate-800 group-hover:border-cyan-500/20">
                      {Icon ? <Icon size={28} /> : <Server size={28} />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed relative z-10">{service.description}</p>
                </motion.div>
                )
            })}
            </div>
        </div>
      </section>

      {/* 3. WORK EXPERIENCE (02) */}
      <section className="py-20 px-6 max-w-4xl mx-auto" id="work">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-cyan-400 font-mono">02.</span> Work History
        </h2>
        <div className="space-y-12 border-l border-slate-800 ml-3 pl-8 relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
              <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">{exp.company_name} | {exp.date}</p>
              <ul className="space-y-2 text-slate-400">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-2 text-[10px]">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SKILLS SECTION (03) */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900/20" id="skills">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[128px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="text-cyan-400 font-mono">03.</span> Technical Arsenal
          </h2>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend - Large Card */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-cyan-500/30 transition-all duration-300 lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-950 text-cyan-400 rounded-xl border border-slate-800"><Layout size={22} /></div>
                    <h3 className="text-xl font-bold text-slate-100">Frontend Ecosystem</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skills.frontend.items.map((skill: string) => (
                        <span key={skill} className="px-3 py-2 text-sm font-medium bg-slate-950/50 text-slate-400 border border-slate-800/80 rounded-lg group-hover:border-cyan-500/20 group-hover:text-cyan-100 group-hover:bg-cyan-500/5 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Backend */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-950 text-purple-400 rounded-xl border border-slate-800"><Server size={22} /></div>
                    <h3 className="text-xl font-bold text-slate-100">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skills.backend.items.map((skill: string) => (
                        <span key={skill} className="px-3 py-2 text-sm font-medium bg-slate-950/50 text-slate-400 border border-slate-800/80 rounded-lg group-hover:border-purple-500/20 group-hover:text-purple-100 group-hover:bg-purple-500/5 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

             {/* Database */}
             <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-950 text-green-400 rounded-xl border border-slate-800"><Database size={22} /></div>
                    <h3 className="text-xl font-bold text-slate-100">Database</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skills.database.items.map((skill: string) => (
                        <span key={skill} className="px-3 py-2 text-sm font-medium bg-slate-950/50 text-slate-400 border border-slate-800/80 rounded-lg group-hover:border-green-500/20 group-hover:text-green-100 group-hover:bg-green-500/5 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Cloud - Large Card */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-orange-500/30 transition-all duration-300 lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-950 text-orange-400 rounded-xl border border-slate-800"><Cloud size={22} /></div>
                    <h3 className="text-xl font-bold text-slate-100">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skills.cloud.items.map((skill: string) => (
                        <span key={skill} className="px-3 py-2 text-sm font-medium bg-slate-950/50 text-slate-400 border border-slate-800/80 rounded-lg group-hover:border-orange-500/20 group-hover:text-orange-100 group-hover:bg-orange-500/5 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Tools */}
            <div className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-pink-500/30 transition-all duration-300 lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-950 text-pink-400 rounded-xl border border-slate-800"><Settings size={22} /></div>
                    <h3 className="text-xl font-bold text-slate-100">Tools & Integrations</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skills.tools.items.map((skill: string) => (
                        <span key={skill} className="px-3 py-2 text-sm font-medium bg-slate-950/50 text-slate-400 border border-slate-800/80 rounded-lg group-hover:border-pink-500/20 group-hover:text-pink-100 group-hover:bg-pink-500/5 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION (04) */}
      <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-cyan-400 font-mono">04.</span> Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group cursor-pointer perspective-1000">
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2">
                <div className="h-56 bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition duration-500 z-10" />
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 bg-slate-800 group-hover:scale-105 transition-transform duration-500">
                     <Layout size={48} className="mb-2 opacity-50" />
                     <span className="font-mono text-xs uppercase tracking-widest opacity-70">View Case Study</span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-slate-900">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                    {project.short_desc}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0,3).map(t => (
                        <span key={t} className="px-2.5 py-1 text-xs font-medium rounded bg-cyan-950 text-cyan-300 border border-cyan-900/30 font-mono">{t}</span>
                      ))}
                    </div>
                    <span className="text-sm text-cyan-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowLeft className="rotate-180" size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. EDUCATION SECTION (05) */}
      <section className="py-20 px-6 max-w-4xl mx-auto" id="education">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono">05.</span> Education
        </h2>
        <div className="grid gap-6">
            {education.map((edu, index) => (
                <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-slate-900 transition-colors">
                    <div className="flex gap-6">
                        <div className="mt-1 text-cyan-400 p-3 bg-slate-950 rounded-xl border border-slate-800 h-fit">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-slate-300 font-medium mb-2">{edu.school}</p>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-md">{edu.desc}</p>
                        </div>
                    </div>
                    <div className="text-left md:text-right pl-[76px] md:pl-0">
                        <span className="block text-cyan-400 font-mono text-sm mb-1">{edu.date}</span>
                        <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold">{edu.grade}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 7. CONTACT */}
      <section className="py-32 px-6 text-center max-w-2xl mx-auto" id="contact">
        <p className="text-cyan-400 font-mono mb-6">06. What's Next?</p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question regarding my tech stack or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col items-center gap-6">
            <a href="mailto:shanealam6123@gmail.com" className="px-10 py-5 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition duration-300 font-mono text-sm">
               Say Hello
            </a>
            <div className="text-slate-500 mt-8 text-sm font-mono">
                <p>+91 9598798529</p>
                <p>Lucknow, India</p>
            </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-xs font-mono">
        <p>Designed & Built by Shane Alam</p>
      </footer>
    </main>
  );
}