"use client";

import { FormEvent, useMemo, useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const QUICK_PROMPTS = [
  "Tell me about Arjun",
  "What projects has he built?",
  "What tech stack does he use?",
  "What is his education and experience?",
  "How can I contact him?",
];

function getProfileReply(question: string) {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("who") ||
    normalized.includes("arjun") ||
    normalized.includes("about") ||
    normalized.includes("intro") ||
    normalized.includes("summary")
  ) {
    return "Final-semester BSc. CSIT student with hands-on experience in full-stack web development and digital data processing. Passionate about building responsive applications using React, Next.js, and ASP.NET Core, with experience delivering technical and design solutions for civic and government projects. Strong analytical, problem-solving, and teamwork skills.";
  }

  if (
    normalized.includes("education") ||
    normalized.includes("college") ||
    normalized.includes("study") ||
    normalized.includes("university") ||
    normalized.includes("csit")
  ) {
    return "Education: Amrit Science Campus (Tribhuvan University) — Bachelor of Science in Computer Science and Information Technology (BSc. CSIT), currently in 8th Semester, Kathmandu, Nepal. Padmodaya Secondary School — Higher Secondary Education (+2), Grade: A. SEE — 2020, Grade: A+.";
  }

  if (
    normalized.includes("experience") ||
    normalized.includes("work") ||
    normalized.includes("job") ||
    normalized.includes("role") ||
    normalized.includes("data entry") ||
    normalized.includes("transportation")
  ) {
    return "Experience: Data Entry Operator | Department of Transportation, Ekantakuna (2023–2027, 2020–2022). Digitized and maintained vehicle records, including Bluebook (vehicle registration) documents, ensuring accurate data entry, document handling, and systematic record management within a government office environment. Developed strong professional communication, punctuality, attention to detail, and public-service skills by working with government staff and interacting professionally with citizens while following established administrative procedures. Photoshop Designer | Independent Contractor (Government Project) — collaborated on a government-level project to design detailed and accurate geographical maps of Nepal using Adobe Photoshop.";
  }

  if (
    normalized.includes("project") ||
    normalized.includes("projects") ||
    normalized.includes("built")
  ) {
    return "Projects: Student Management System | ASP.NET Core, React.js, MySQL, TypeScript — developed a full-stack student management system, implemented secure CRUD operations, robust MySQL integration, responsive user-friendly UI, advanced search, sorting, and REST API + Entity Framework Core communication. Municipality Portal | React, TypeScript, Vite, Tailwind CSS — built a responsive municipality frontend app with notices management, service information, ward details, representative directories, contact functionality, and reusable UI components such as cards and navigation bars.";
  }

  if (
    normalized.includes("student management") ||
    normalized.includes("student") ||
    normalized.includes("management")
  ) {
    return "Student Management System is a full-stack web app built with ASP.NET Core, React.js, MySQL, and TypeScript. It features secure CRUD operations for student records, robust database integration, responsive UI, advanced search and sorting, and frontend-backend communication via REST APIs and Entity Framework Core.";
  }

  if (
    normalized.includes("municipality") ||
    normalized.includes("portal") ||
    normalized.includes("ward") ||
    normalized.includes("notices")
  ) {
    return "Municipality Portal is a responsive civic web application built with React, TypeScript, Vite, and Tailwind CSS. It includes notices management, service information, ward details, representative directories, and contact functionality, with reusable UI components such as cards and navigation bars.";
  }

  if (
    normalized.includes("skill") ||
    normalized.includes("skills") ||
    normalized.includes("tech") ||
    normalized.includes("stack") ||
    normalized.includes("javascript") ||
    normalized.includes("react") ||
    normalized.includes("next") ||
    normalized.includes("tailwind") ||
    normalized.includes("asp.net") ||
    normalized.includes("c#")
  ) {
    return "Technical Skills: TypeScript, JavaScript, Python, HTML, CSS, C, C++, C#.NET, PostgreSQL, MySQL. \nTools & Technologies/Frameworks: Git, GitHub, React.js, Next.js, Node.js, ASP.NET Core, Tailwind CSS, GSAP, Vite. \nSoft Skills: Problem Solving, Communication, Time Management, Team Collaboration, Adaptability, Analytical Skills. \nAdditional Skills: Audio Mixing, Playing Guitar, Geographic Map Design (Adobe Photoshop).";
  }

  if (
    normalized.includes("course") ||
    normalized.includes("coursework") ||
    normalized.includes("subjects") ||
    normalized.includes("dbms")
  ) {
    return "Coursework includes Web Development, Data Structures & Algorithms, Computer Networks, Operating Systems, Artificial Intelligence, Database Management Systems, Compiler Design and Construction, Net Centric Computing, and DBMS.";
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("linkedin") ||
    normalized.includes("github") ||
    normalized.includes("email")
  ) {
    return "You can connect with him on GitHub at https://github.com/codewotharjun and LinkedIn at https://www.linkedin.com/in/arjun-rokka9800.";
  }

  if (
    normalized.includes("intern") ||
    normalized.includes("hire") ||
    normalized.includes("available") ||
    normalized.includes("opportunity") ||
    normalized.includes("looking")
  ) {
    return "He is a final-semester BSc. CSIT student with strong development and civic project experience, and he is actively seeking opportunities to contribute and grow in a professional environment.";
  }

  if (
    normalized.includes("bluebook") ||
    normalized.includes("vehicle") ||
    normalized.includes("registration") ||
    normalized.includes("record")
  ) {
    return "His experience in government data handling included digitizing and maintaining Bluebook vehicle registration records, ensuring accuracy, document management, and systematic record handling in a public office setting.";
  }

  return "I can answer questions about Arjun’s education, work experience, projects, skills, and coursework. Try asking: 'What projects has he built?', 'What is his education and experience?', or 'What skills does he have?'";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi — I can answer questions about Arjun’s projects, stack, and experience.",
    },
  ]);

  const promptOptions = useMemo(() => QUICK_PROMPTS, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: Message = { sender: "user", text: trimmed };
    const botReply = getProfileReply(trimmed);

    setMessages((current) => [...current, userMessage, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[22rem] overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-display text-sm font-medium">Ask about Arjun</p>
            <button
              onClick={() => setOpen(false)}
              className="text-text-muted transition-colors hover:text-text"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4 text-sm leading-relaxed">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}`}
                className={message.sender === "user" ? "ml-auto max-w-[85%] rounded-lg bg-accent/10 px-3 py-2 text-text" : "max-w-[90%] rounded-lg bg-bg px-3 py-2 text-text-muted"}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-border px-3 py-2">
            <div className="mb-2 flex flex-wrap gap-2">
              {promptOptions.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setInput(prompt)}
                  className="rounded-full border border-border px-2 py-1 font-mono text-[10px] text-text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-3 py-2 font-display text-xs font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((previous) => !previous)}
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-display text-sm font-semibold text-bg shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {open ? "Close" : "Ask about me"}
      </button>
    </div>
  );
}
