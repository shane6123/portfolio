// src/app/projects/[id]/page.tsx
"use client";
import React, { use } from "react";
import { projects } from "@/data";
import { ArrowLeft, ExternalLink, Layers, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
 const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
      <Link href="/" className="flex items-center gap-2 text-cyan-400 mb-8 hover:underline w-fit">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <p className="text-xl text-slate-400 mb-8">{project.short_desc}</p>

        {/* Main Image Area */}
        <div className="w-full h-64 md:h-96 bg-slate-800 rounded-xl overflow-hidden mb-12 border border-slate-700 relative group">
           {/* Placeholder for actual image */}
           <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-500">
             <span className="text-lg">Project Screenshot: {project.image}</span>
           </div>
           <a 
             href={project.link} 
             target="_blank"
             className="absolute bottom-4 right-4 bg-cyan-500 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition z-10"
           >
             Live Demo <ExternalLink size={16}/>
           </a>
        </div>

        {/* The Detailed Explanation Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column: The Story */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="text-cyan-400" /> The Challenge
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </section>

            <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="text-purple-400" /> The Solution
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {project.caseStudy.solution}
              </p>
              
              <div className="mt-4">
                <h4 className="font-bold text-slate-200 mb-2">Key Architecture Decisions:</h4>
                <ul className="space-y-2">
                  {project.caseStudy.architecture.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {arch}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Tech & Stats */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-cyan-300 text-sm rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-400" /> Outcome
              </h3>
              <p className="text-slate-300 text-sm italic">
                "{project.caseStudy.outcome}"
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}