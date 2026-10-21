
"use client";

import { useState } from "react";

const skills = [
  { name: "MS Excel", icon: "📊", category: "Research & Productivity" },
  { name: "Communication", icon: "💬", category: "Professional Skills" },
  { name: "HTML & CSS", icon: "🌐", category: "Web Development" },
  { name: "Next.js", icon: "⚡", category: "Web Development" },
  { name: "Canva", icon: "🎨", category: "Design" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "TypeScript", icon: "💻", category: "Web Development" },
  { name: "Scientific Research", icon: "🔬", category: "Academics" },
  { name: "Plant Biotechnology", icon: "🌱", category: "Academics" },
  { name: "Data Analysis", icon: "📈", category: "Research & Productivity" },
];

const projects = [
  {
    number: "01",
    icon: "🧬",
    category: "BOTANY & MOLECULAR RESEARCH",
    title: "In Vitro DNA Damage Study in Sugarcane",
    description:
      "Studied the mutagenic effect of sodium azide on sugarcane DNA, exploring its potential role in inducing genetic variation and supporting plant improvement research.",
    tags: ["Sugarcane", "DNA Damage", "Sodium Azide"],
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    icon: "🌿",
    category: "ENVIRONMENTAL RESEARCH",
    title: "Wastewater Treatment & Sustainability",
    description:
      "An environmental research direction focused on wastewater reclamation, heavy-metal contamination, and sustainable treatment approaches for protecting water resources.",
    tags: ["Wastewater", "Heavy Metals", "Sustainability"],
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    number: "03",
    icon: "💻",
    category: "WEB DEVELOPMENT & AI",
    title: "Personal Portfolio Website",
    description:
      "A personal website project that brings together my academic background, research interests, technical skills, and growing interest in web development and artificial intelligence.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-violet-500/20 via-blue-500/10 to-transparent",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:afsahayub45@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 88px;
        }

        body {
          margin: 0;
          background: #07111f;
        }

        .gradient-text {
          background: linear-gradient(110deg, #60a5fa, #38bdf8, #a5b4fc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .grid-pattern {
          background-image: linear-gradient(
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            );
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .glass-card {
          background: rgba(15, 29, 49, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.12);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(14px);
        }

        ::selection {
          background: rgba(59, 130, 246, 0.4);
          color: white;
        }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07111f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/25">
              AA
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                Afsah Ayub
              </p>
              <p className="text-[11px] text-slate-400">
                PhD Student · Developer in Progress
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Contact Me ↗
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-white transition hover:border-blue-400/40 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b1728] px-5 py-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex scroll-mt-20 items-center py-24 sm:py-32"
      >
        <div className="grid-pattern absolute inset-0" />
        <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-blue-300">
                BOTANY · TECHNOLOGY · AI
              </span>
            </div>

            <p className="mb-4 text-lg font-medium text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Afsah
              <br />
              <span className="gradient-text">Ayub.</span>
            </h1>

            <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
              PhD Botany Student{" "}
              <span className="text-blue-400">|</span> Researcher{" "}
              <span className="text-blue-400">|</span> Aspiring Web Developer
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              I&apos;m a PhD student at the University of Sargodha with an
              interest in plant science and environmental research. I&apos;m
              also learning web development and AI, combining scientific
              curiosity with new digital skills to explore creative solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                View My Projects
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/5"
              >
                Get in Touch ↗
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/[0.08] pt-7">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-lg">🎓</span>
                PhD Research
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-lg">🌱</span>
                Plant Science
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-lg">🤖</span>
                Learning AI
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/15 via-transparent to-indigo-500/15 blur-2xl" />

            <div className="glass-card relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  My Profile
                </span>
                <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
                  BOTANY PhD
                </span>
              </div>

              <div className="relative mx-auto my-9 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-400/10 shadow-2xl shadow-blue-900/30">
                <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.07]" />
                <span className="gradient-text text-5xl font-black tracking-tight">
                  AA
                </span>
                <span className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#101d30] bg-blue-600 text-xl shadow-lg">
                  🌱
                </span>
              </div>

              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-white">Afsah Ayub</h3>
                <p className="mt-2 text-sm text-slate-400">
                  PhD Botany Student
                </p>
                <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Curious mind. Scientific thinker. Lifelong learner.
                </p>
              </div>

              <div className="relative mt-7 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <span className="text-xl">🎓</span>
                  <div>
                    <p className="text-xs text-slate-500">University</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      University of Sargodha
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <span className="text-xl">💻</span>
                  <div>
                    <p className="text-xs text-slate-500">Currently learning</p>
                    <p className="mt-1 text-sm font-semibold text-blue-300">
                      Next.js, Python & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-20 hidden rounded-2xl border border-white/10 bg-[#111f32] p-3 shadow-xl sm:block">
              <span className="text-xl">🧬</span>
            </div>
            <div className="absolute -right-4 bottom-20 hidden rounded-2xl border border-white/10 bg-[#111f32] p-3 shadow-xl sm:block">
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 border-y border-white/[0.06] bg-[#0a1626] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              ABOUT ME
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Rooted in science.
              <br />
              <span className="gradient-text">Growing through technology.</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I am Afsah Ayub, a PhD Botany student at the University of
                Sargodha, Pakistan. My academic journey has developed my
                interest in plant science, molecular research, and
                environmental sustainability.
              </p>
              <p>
                One of my research projects involved an in vitro DNA damage
                study in sugarcane, investigating the mutagenic effect of
                sodium azide on sugarcane DNA. This work reflects my interest
                in understanding plant genetics and scientific research.
              </p>
              <p>
                Beyond academics, I am learning HTML, Next.js, Python, and
                artificial intelligence. I am interested in using these skills
                to build websites, improve my digital capabilities, and
                explore new ways of communicating and working with scientific
                information.
              </p>
              <p>
                My goal is to keep learning, strengthen my technical skills,
                and connect my background in botany with opportunities in
                modern technology.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 pt-3 text-sm font-bold text-blue-400 transition-colors hover:text-blue-300"
              >
                Let&apos;s connect and collaborate
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🎓",
                  title: "Academic Background",
                  desc: "PhD Botany student at the University of Sargodha.",
                },
                {
                  icon: "🧬",
                  title: "Plant Science",
                  desc: "Interested in plant genetics and molecular research.",
                },
                {
                  icon: "💻",
                  title: "Web Development",
                  desc: "Learning to create modern, responsive websites.",
                },
                {
                  icon: "🤖",
                  title: "Artificial Intelligence",
                  desc: "Exploring AI, Python, and emerging technologies.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-20 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              MY TOOLKIT
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Skills & Expertise
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Academic knowledge, professional skills, and technologies I use
              or am currently learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Web & Technology",
                subtitle: "Building digital skills",
                icon: "💻",
                theme: "blue",
                items: skills.filter((s) =>
                  ["HTML & CSS", "Next.js", "TypeScript", "Python"].includes(
                    s.name
                  )
                ),
              },
              {
                title: "Research & Academics",
                subtitle: "Scientific thinking",
                icon: "🔬",
                theme: "emerald",
                items: skills.filter((s) =>
                  [
                    "Scientific Research",
                    "Plant Biotechnology",
                    "Data Analysis",
                    "MS Excel",
                  ].includes(s.name)
                ),
              },
              {
                title: "Creative & Professional",
                subtitle: "Communication and design",
                icon: "🎨",
                theme: "violet",
                items: skills.filter((s) =>
                  ["Canva", "Communication"].includes(s.name)
                ),
              },
            ].map((group) => (
              <div key={group.title} className="glass-card rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-xl">
                    {group.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                        group.theme === "blue"
                          ? "border-blue-400/15 bg-blue-400/[0.07] text-blue-200 hover:border-blue-400/40"
                          : group.theme === "emerald"
                            ? "border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-200 hover:border-emerald-400/40"
                            : "border-violet-400/15 bg-violet-400/[0.07] text-violet-200 hover:border-violet-400/40"
                      }`}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 text-center">
            <p className="text-sm leading-6 text-slate-400">
              <span className="mr-2 text-blue-400">✦</span>
              Always learning, improving, and exploring new possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-20 border-y border-white/[0.06] bg-[#0a1626] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                MY WORK
              </p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Projects & Research
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                A selection of my academic research and developing interests
                in technology.
              </p>
            </div>
            <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
              RESEARCH · LEARNING · BUILDING
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1b2d] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" />
                    <div className="absolute left-2/4 top-0 h-full w-px bg-white/10" />
                    <div className="absolute left-3/4 top-0 h-full w-px bg-white/10" />
                    <div className="absolute left-0 top-1/3 h-px w-full bg-white/10" />
                    <div className="absolute left-0 top-2/3 h-px w-full bg-white/10" />
                  </div>

                  <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-[#07111f]/50 px-3 py-1.5 text-xs font-semibold tracking-widest text-slate-300">
                    {project.number}
                  </div>

                  <span className="relative text-6xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {project.icon}
                  </span>

                  <div className="absolute bottom-4 right-4 rounded-lg border border-white/10 bg-[#07111f]/60 px-3 py-1.5 text-xs text-slate-300">
                    Academic & Personal Work
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-bold tracking-[0.15em] text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            Project descriptions summarize research interests and learning
            work. They do not imply that every project is a completed software
            application.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden py-24 sm:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s connect.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Have a research question, collaboration idea, or simply want to
              talk about technology? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:afsahayub45@gmail.com"
                className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  ✉️
                </span>
                <h3 className="mt-5 font-bold text-white">Email Me</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  For research discussions, questions, or collaborations.
                </p>
                <span className="mt-4 block break-all text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                  afsahayub45@gmail.com ↗
                </span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                  💻
                </span>
                <h3 className="mt-5 font-bold text-white">GitHub</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Explore my coding journey and discover projects as I develop
                  my programming skills.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                  Visit GitHub ↗
                </span>
              </a>

              <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
                <p className="text-sm font-bold text-blue-300">
                  Let&apos;s learn and grow together
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Open to exchanging ideas about research, botany, web
                  development, and AI.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white">Send a message</h3>
              <p className="mt-2 text-sm text-slate-400">
                Fill in the form to prepare an email to me.
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-700/80 bg-[#07111f]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700/80 bg-[#07111f]/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-xl border border-slate-700/80 bg-[#07111f]/70 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Prepare Email
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  This form uses your default email application. It does not
                  send or store messages on a server.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-[#050c16]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white">
              AA
            </div>
            <span className="text-sm font-bold text-slate-200">
              Afsah Ayub
            </span>
          </a>

          <p className="text-center text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Afsah Ayub. Growing through science
            and technology.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-blue-400"
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
