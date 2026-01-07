"use client";

import { projects } from "@/data";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle,
  Info,
  Star,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use } from "react";

type NestedItem = string | string[];

type CaseStudy = {
  overview?: string;
  trusted_by?: string[];
  key_features?: NestedItem[];
  key_contributions?: NestedItem[];
  challenge?: string[];
  solution?: string[];
  architecture?: string[];
  outcome?: string[];
};

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  const caseStudy = project.case_study as CaseStudy;

  const renderList = (items?: NestedItem[]) => {
    if (!items) return null;

    return (
      <ul className="space-y-4">
        {items.map((item, idx) =>
          Array.isArray(item) ? (
            <ul
              key={idx}
              className="ml-6 space-y-2 list-disc list-inside text-slate-400"
            >
              {item.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
          ) : (
            <li
              key={idx}
              className="flex gap-4 text-slate-300 leading-relaxed"
            >
              <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              {item}
            </li>
          ),
        )}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-10"
      >
        {/* Back */}
        <Link
          href="/"
          className="flex items-center gap-2 text-cyan-400 mb-10 hover:underline w-fit"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {project.short_desc}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            Live Demo <ExternalLink size={18} />
          </a>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-[420px] bg-slate-800 rounded-2xl overflow-hidden mb-16 border border-slate-700 shadow-2xl">
          <motion.img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Overview */}
        {caseStudy.overview && (
          <section className="mb-12 max-w-4xl">
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Info className="text-blue-400" />
                Project Overview
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </section>
        )}

        {/* Trusted By */}
        {caseStudy.trusted_by && (
          <section className="mb-12">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Star className="text-yellow-400" />
                Trusted By
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.trusted_by.map((brand) => (
                  <span
                    key={brand}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main */}
          <div className="lg:col-span-8 space-y-10">
            {caseStudy.key_features && (
              <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="text-cyan-400" />
                  Key Features
                </h3>
                {renderList(caseStudy.key_features)}
              </section>
            )}

            {caseStudy.key_contributions && (
              <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Star className="text-yellow-400" />
                  Key Contributions
                </h3>
                {renderList(caseStudy.key_contributions)}
              </section>
            )}

            {caseStudy.challenge && (
              <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Layers className="text-red-400" />
                  Challenges
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {caseStudy.challenge.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            {caseStudy.solution && (
              <section className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Cpu className="text-purple-400" />
                  Solutions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {caseStudy.solution.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                {caseStudy.architecture && (
                  <div className="mt-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Architecture Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.architecture.map((arch) => (
                        <span
                          key={arch}
                          className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700"
                        >
                          {arch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(",").map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-slate-950 text-cyan-300 text-sm rounded-lg border border-slate-800"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {caseStudy.outcome && (
                <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-400" />
                    Outcome
                  </h3>
                  <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                    {caseStudy.outcome.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
