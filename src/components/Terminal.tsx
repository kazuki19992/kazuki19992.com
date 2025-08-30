"use client";

import { useState, useEffect, useRef } from "react";

import { CONTACT, PROFILE, SOCIAL_LINKS, TERMINAL_CONFIG } from "@/constants/profile";

interface CommandHistory {
  command: string;
  output: string[];
  timestamp: Date;
}

const commands = {
  whois: () => [
    `% Whois information for ${CONTACT.domain}`,
    "",
    `Domain Name: ${CONTACT.domain}`,
    "Registry Domain ID: KAZUKI_19992",
    `Registrar WHOIS Server: whois.${CONTACT.domain}`,
    "Creation Date: 2024-01-01T00:00:00Z",
    "Registry Expiry Date: 2025-12-31T23:59:59Z",
    "Registrar: Kazuki Registry Services",
    "",
    "Registrant Information:",
    `Name: ${PROFILE.displayName}`,
    `Organization: ${PROFILE.organization}`,
    `Location: ${PROFILE.location}`,
    `Status: ${PROFILE.status}`,
    `Role: ${PROFILE.role}`,
    "",
    "Technical Contacts:",
    `Email: ${CONTACT.email}`,
    `GitHub: ${SOCIAL_LINKS.github.url}`,
    `Twitter: ${SOCIAL_LINKS.twitter.username}`,
    "",
    "Skills:",
    "- React / Next.js",
    "- TypeScript",
    "- Tailwind CSS",
    "- Node.js",
    "- Git",
    "",
    "Status: ACTIVE",
    "Last Updated: 2024-08-30T23:00:00Z",
    "",
  ],
  help: () => [
    "Available commands:",
    "",
    "whois      - Display user information",
    "skills     - Show technical skills and proficiency",
    "projects   - List portfolio projects",
    "experience - Display work and education history", 
    "contact    - Get contact information",
    "social     - Show social media links",
    "resume     - Download resume (simulated)",
    "github     - Open GitHub profile",
    "blog       - Show recent blog posts",
    "ascii      - Display ASCII art",
    "matrix     - Matrix animation effect",
    "help       - Show this help message",
    "clear      - Clear terminal",
    "date       - Show current date and time",
    "about      - Display about information",
    "",
    "Tip: Try 'skills react' or 'projects web' for filtered results",
    "",
  ],
  skills: (args?: string) => {
    const allSkills = {
      frontend: {
        "React/Next.js": "████████████████████ 95%",
        "TypeScript": "█████████████████░░░ 85%",
        "JavaScript": "████████████████████ 90%",
        "Tailwind CSS": "███████████████████░ 90%",
        "HTML/CSS": "████████████████████ 95%",
      },
      backend: {
        "Node.js": "██████████████░░░░░░ 70%",
        "Express.js": "████████████░░░░░░░░ 60%",
        "PostgreSQL": "███████████░░░░░░░░░ 55%",
      },
      tools: {
        "Git/GitHub": "███████████████████░ 90%",
        "VS Code": "████████████████████ 95%",
        "Figma": "██████████████░░░░░░ 70%",
        "Docker": "████████░░░░░░░░░░░░ 40%",
      }
    };

    if (!args) {
      const result = ["Technical Skills & Proficiency:", ""];
      Object.entries(allSkills).forEach(([category, skills]) => {
        result.push(`${category.toUpperCase()}:`);
        Object.entries(skills).forEach(([skill, level]) => {
          result.push(`  ${skill.padEnd(15)} ${level}`);
        });
        result.push("");
      });
      result.push("Use 'skills [category]' to filter (frontend/backend/tools)");
      return result;
    } else {
      const category = args.toLowerCase();
      if (category in allSkills) {
        const result = [`${category.toUpperCase()} SKILLS:`, ""];
        Object.entries(allSkills[category as keyof typeof allSkills]).forEach(([skill, level]) => {
          result.push(`  ${skill.padEnd(15)} ${level}`);
        });
        return result;
      } else {
        return [`Category '${args}' not found. Available: frontend, backend, tools`];
      }
    }
  },
  projects: () => [
    "Portfolio Projects:",
    "",
    "┌─────────────────────────────────────────────────────────────┐",
    "│ 01. Personal Portfolio Website                              │",
    "│     ├─ Tech: Next.js, TypeScript, Tailwind CSS             │",
    "│     ├─ Features: Interactive terminal, Responsive design   │",
    "│     └─ Status: ✅ Live (You're looking at it!)            │",
    "├─────────────────────────────────────────────────────────────┤",
    "│ 02. Task Management App                                     │",
    "│     ├─ Tech: React, Node.js, PostgreSQL                    │",
    "│     ├─ Features: Real-time updates, Team collaboration     │",
    "│     └─ Status: 🚧 In Development                           │",
    "├─────────────────────────────────────────────────────────────┤",
    "│ 03. Weather Dashboard                                       │",
    "│     ├─ Tech: React, OpenWeather API, Chart.js              │",
    "│     ├─ Features: 7-day forecast, Interactive charts        │",
    "│     └─ Status: ✅ Completed                                │",
    "└─────────────────────────────────────────────────────────────┘",
    "",
    "Use 'github' command to view source code",
    "",
  ],
  experience: () => [
    "Education & Experience:",
    "",
    "🎓 EDUCATION",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "2021-2025    日本大学工学部",
    "             Computer Science & Engineering",
    "             Focus: Web Development & Software Engineering",
    "",
    "💼 EXPERIENCE", 
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "2024-Present Frontend Developer Intern",
    "             Working on modern web applications",
    "             Technologies: React, Next.js, TypeScript",
    "",
    "2023-2024    Freelance Web Developer",
    "             Created websites for local businesses",
    "             Focus on responsive design and UX",
    "",
    "📚 CONTINUOUS LEARNING",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "- Modern JavaScript/TypeScript patterns",
    "- React ecosystem and state management",
    "- Backend development with Node.js",
    "- UI/UX design principles",
    "",
  ],
  contact: () => [
    "Contact Information:",
    "",
    `📧 Email:    ${CONTACT.email}`,
    `🐱 GitHub:   ${SOCIAL_LINKS.github.url}`,
    `🐦 Twitter:  ${SOCIAL_LINKS.twitter.username}`,
    `💼 LinkedIn: ${SOCIAL_LINKS.linkedin.username}`,
    `📍 Location: ${PROFILE.location}`,
    "",
    "Feel free to reach out for:",
    "• Collaboration opportunities",
    "• Technical discussions",
    "• Project consultations",
    "• Just to say hello! 👋",
    "",
  ],
  social: () => [
    "Social Media & Links:",
    "",
    `🔗 GitHub:    ${SOCIAL_LINKS.github.url.replace('https://', '')}`,
    `🔗 Twitter:   ${SOCIAL_LINKS.twitter.url.replace('https://', '')}`,
    `🔗 LinkedIn:  ${SOCIAL_LINKS.linkedin.url.replace('https://', '')}`,
    `🔗 Blog:      ${SOCIAL_LINKS.blog.url.replace('https://', '')}`,
    `🔗 Portfolio: ${CONTACT.domain}`,
    "",
    "Latest Activity:",
    "• 🎉 Launched new portfolio site",
    "• 📝 Published article on React hooks",
    "• 🚀 Contributed to open source project",
    "",
  ],
  resume: () => [
    "Resume Download:",
    "",
    "📄 Generating resume...",
    "⬇️  [SIMULATED] resume_kazuki_tanaka.pdf",
    "",
    "Resume includes:",
    "• Complete work history",
    "• Technical skills assessment", 
    "• Project portfolio",
    "• Education details",
    "• References",
    "",
    "Note: This is a simulation. In a real implementation,",
    "this would trigger an actual PDF download.",
    "",
  ],
  github: () => [
    "Opening GitHub profile...",
    `🚀 Redirecting to: ${SOCIAL_LINKS.github.url}`,
    "",
    "Featured Repositories:",
    "⭐ portfolio-terminal    - This interactive portfolio",
    "⭐ react-task-manager    - Collaborative task management",
    "⭐ weather-dashboard     - Real-time weather app",
    "⭐ css-animations        - Collection of CSS animations",
    "",
    "Note: In a real implementation, this would open the link.",
    "",
  ],
  blog: () => [
    "Recent Blog Posts:",
    "",
    "📝 \"Building Interactive Terminals with React\"",
    "   Published: 2024-08-30 | 5 min read",
    "   Creating engaging CLI-style interfaces for the web",
    "",
    "📝 \"Modern CSS Grid Layouts for Responsive Design\"",
    "   Published: 2024-08-25 | 8 min read",
    "   Advanced grid techniques and best practices",
    "",
    "📝 \"TypeScript Tips for React Developers\"",
    "   Published: 2024-08-20 | 6 min read",
    "   Improving type safety in React applications",
    "",
    `Visit ${SOCIAL_LINKS.blog.url.replace('https://', '')} for more articles`,
    "",
  ],
  ascii: () => [
    "                                                        ",
    "    ██╗  ██╗ █████╗ ███████╗██╗   ██╗██╗  ██╗██╗      ",
    "    ██║ ██╔╝██╔══██╗╚══███╔╝██║   ██║██║ ██╔╝██║      ",
    "    █████╔╝ ███████║  ███╔╝ ██║   ██║█████╔╝ ██║      ",
    "    ██╔═██╗ ██╔══██║ ███╔╝  ██║   ██║██╔═██╗ ██║      ",
    "    ██║  ██╗██║  ██║███████╗╚██████╔╝██║  ██╗██║      ",
    "    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝      ",
    "                                                        ",
    "   ██╗ █████╗  █████╗  █████╗ ██████╗                 ",
    "  ███║██╔══██╗██╔══██╗██╔══██╗╚════██╗                ",
    "  ╚██║╚██████║╚██████║╚██████║ █████╔╝                ",
    "   ██║ ╚═══██║ ╚═══██║ ╚═══██║██╔═══╝                 ",
    "   ██║ █████╔╝ █████╔╝ █████╔╝███████╗                ",
    "   ╚═╝ ╚════╝  ╚════╝  ╚════╝ ╚══════╝                ",
    "                                                        ",
    `    ${PROFILE.username} - ${PROFILE.name}                               `,
    `    ${PROFILE.title}            `,
    `    ${PROFILE.tagline}    `,
    "                                                        ",
  ],
  matrix: () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    const lines = [];
    for (let i = 0; i < 15; i++) {
      let line = "";
      for (let j = 0; j < 60; j++) {
        line += Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : " ";
      }
      lines.push(line);
    }
    return [
      "Entering the Matrix...",
      "",
      ...lines,
      "",
      "Welcome to the digital world, Neo.",
      "",
    ];
  },
  clear: () => [],
  date: () => [new Date().toString()],
  about: () => [
    "Personal Portfolio Terminal v2.0.0",
    "Built with Next.js, TypeScript, and Tailwind CSS",
    "",
    "This is an interactive terminal interface showcasing",
    "various commands and information about the developer.",
    "",
    "Terminal-first design approach for a unique",
    "and engaging portfolio experience.",
    "",
    "Type 'help' to see all available commands!",
    "",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");
    const timestamp = new Date();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    let output: string[] = [];
    if (command in commands) {
      const cmdFunction = commands[command as keyof typeof commands] as any;
      output = cmdFunction(args || undefined);
    } else if (command === "") {
      output = [];
    } else {
      output = [`Command not found: ${command}`, "Type 'help' for available commands"];
    }

    setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    executeCommand(currentCommand);
    setCurrentCommand("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Initial welcome message
    setTimeout(() => {
      setHistory([{
        command: "welcome",
        output: [
          "╔════════════════════════════════════════════════════════╗",
          `║               ${TERMINAL_CONFIG.welcomeTitle}        ║`,
          `║                    ${TERMINAL_CONFIG.version}                   ║`,
          "╚════════════════════════════════════════════════════════╝",
          "",
          "🚀 Interactive Terminal Portfolio Experience",
          "💻 Built with Next.js, TypeScript & Tailwind CSS",
          "",
          "Quick Start:",
          "• Type 'help' to see all available commands",
          "• Try 'whois' to learn more about me",
          "• Use 'skills' to see my technical abilities",
          "• Run 'projects' to view my work",
          "",
          "Pro tip: Try 'ascii' or 'matrix' for some fun! 🎉",
          "",
        ],
        timestamp: new Date(),
      }]);
    }, 1000);
  }, []);

  return (
    <div className="bg-gray-900 text-green-400 text-sm flex flex-col h-full" style={{ fontFamily: "'UDEVGothicNF', 'Courier New', monospace" }}>
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.command !== "welcome" && (
              <div className="text-blue-400">
                <span className="text-green-400">{TERMINAL_CONFIG.prompt}</span>
                <span className="text-white">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-white">$ </span>
                <span>{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIndex) => (
              <div key={lineIndex} className="text-gray-300 whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400">{TERMINAL_CONFIG.prompt}</span>
          <span className="text-white">:</span>
          <span className="text-blue-300">~</span>
          <span className="text-white">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="bg-transparent border-none outline-none text-white flex-1 ml-1"
            placeholder=""
            autoFocus
          />
          <span className="animate-pulse text-white">▋</span>
        </form>
      </div>
    </div>
  );
}