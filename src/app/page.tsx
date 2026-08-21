import Reveal from "@/components/Reveal";
import TerminalIntro from "@/components/TerminalIntro";
import ChatWidget from "@/components/ChatWidget";
import ThemeToggle from "@/components/ThemeToggle";

const SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Dot Net",
  "GSAP",
  "Node.js",
  "C / C++",
  "Git",
  "PostgreSQL",
];

const PROJECTS = [
  {
    tag: "01",
    title: "Student Management System",
    desc: "Developed a full-stack Student Management System using ASP.NET Core, React.js, and MySQL, featuring secure CRUD operations, REST API integration, and a responsive UI with advanced search and sorting.",
    stack: ["ASP.net core", "REST API", "React.js","SQL","TypeScript","Tailwind CSS"],
    href: "https://github.com/CodewothArjun/StudentCRUDApp",
  },
  {
    tag: "02",
    title: "Municipality Portal",
    desc: "Built a responsive municipality frontend using React, TypeScript, Vite, and Tailwind CSS, featuring notices, services, ward details, representative directories, and reusable UI components.",
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    href: "https://municipality-information-portal.vercel.app/",
  },
  {
    tag: "03",
    title: "This Portfolio",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and experience through a modern and interactive user interface.",
    stack: ["Next.js", "Tailwind CSS", "GSAP"],
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="bg-bg text-text min-h-screen transition-colors duration-300">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xs font-semibold tracking-tight sm:text-sm md:text-base">
            <a href="#">
            &lt;Arjun/&gt;</a>
          </span>
          <div className="flex items-center gap-6 font-mono text-xs text-text-muted">
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-16 sm:pt-24 lg:flex-row lg:items-center">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 font-mono text-xs text-accent">
            {"// full-stack developer, kathmandu "}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Arjun Mijar
          </h1>
          <p className="mt-4 max-w-lg text-text-muted sm:text-lg mx-auto lg:mx-0">
            I build practical web
            applications with modern technologies, focusing on clean interfaces,
            useful functionality, and real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 font-display text-sm font-semibold text-bg hover:scale-105 transition-transform"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 font-display text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/arjun_resume.pdf"
              download={"Arjun Mijar Resume.pdf"}
              className="rounded-md border border-border px-5 py-2.5 font-display text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <TerminalIntro />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs text-accent mb-3">{"/* About */"}</p>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl mb-6">
            Full-Stack Developer | BSc. CSIT Student
          </h2>
          <p className="max-w-2xl text-text-muted leading-relaxed">
            I&apos;m <b>Arjun Mijar</b>, a BSc. CSIT student and aspiring
            software developer from Nepal. I enjoy building{" "}
            <span className="text-accent">
              modern, responsive web applications
            </span>{" "}
            using technologies like React, Next.js, TypeScript, and ASP.NET
            Core. I’m passionate about learning, solving problems, and turning
            ideas into practical solutions.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <p className="font-mono text-xs text-accent mb-3">{"// Projects"}</p>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl mb-10">
            Things I&apos;ve built
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-bg-elevated p-6 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-xs text-text-muted">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-muted leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="text-center">
          <p className="font-mono text-xs text-accent mb-3">
            {"/* Contact */"}
          </p>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-text-muted mb-8">
            Open to internships and freelance front-end work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
            <a
              href="https://github.com/codewotharjun"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
            >
              github.com/codewotharjun
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-rokka9800"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors"
            >
              linkedin.com/in/arjun-rokka9800
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-text-muted">
        © {new Date().getFullYear()} Arjun Mijar. Built with Next.js, Tailwind
        CSS &amp; GSAP.
      </footer>

      <ChatWidget />
    </main>
  );
}
