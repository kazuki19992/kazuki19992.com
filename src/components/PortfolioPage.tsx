"use client";

import Image from "next/image";

import { CONTACT, PROFILE, SOCIAL_LINKS } from "@/constants/profile";

interface PortfolioPageProps {
  onLaunchTerminal: () => void;
  showTerminalButton?: boolean;
}

export default function PortfolioPage({ onLaunchTerminal, showTerminalButton = true }: PortfolioPageProps) {
  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Next.js", level: 90, color: "bg-gray-700" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
    { name: "Node.js", level: 70, color: "bg-green-600" },
    { name: "Git", level: 90, color: "bg-orange-600" },
  ];

  const projects = [
    {
      title: "Interactive Terminal Portfolio",
      description: "Next.js製のターミナル風ポートフォリオサイト。実際のコマンドライン操作でプロフィール情報を閲覧できる革新的なWebアプリケーション。",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "✅ 完成",
      link: "#",
    },
    {
      title: "タスク管理アプリケーション",
      description: "チーム向けのリアルタイム同期機能付きタスク管理システム。直感的なUIでプロジェクト進捗を可視化。",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "🚧 開発中",
      link: "#",
    },
    {
      title: "天気予報ダッシュボード",
      description: "OpenWeather APIを使用した7日間の天気予報表示アプリ。インタラクティブなチャートで気象データを視覚化。",
      tech: ["React", "Chart.js", "Weather API"],
      status: "✅ 完成",
      link: "#",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-sky-50 via-emerald-50 to-cyan-50 overflow-y-auto">
      {/* Hero Section */}
      <section className="px-8 py-12 text-center">
        <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-1">
          <Image
            src="/mellicon.JPG"
            alt={`${PROFILE.name}のアイコン`}
            width={128}
            height={128}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-slate-800 md:text-6xl">
          {PROFILE.name}
        </h1>
        <h2 className="mb-6 text-xl text-emerald-700 md:text-2xl">
          {PROFILE.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
          {PROFILE.bio}
        </p>

        {/* Terminal Launch Button */}
        {showTerminalButton && (
          <div className="mb-8">
            <button
              onClick={onLaunchTerminal}
              className="group relative overflow-hidden rounded-lg bg-slate-900 px-8 py-4 font-mono text-lg font-medium text-green-400 transition-all hover:bg-slate-800 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span>$ Launch Terminal Mode</span>
                <div className="animate-pulse text-white">▋</div>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
            </button>
            <p className="mt-2 text-sm text-slate-500">
              💡 技術者向け: ターミナルでコマンドを実行してプロフィールを探索
            </p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SOCIAL_LINKS.github.url}
            className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-all hover:bg-emerald-700 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.twitter.url}
            className="flex items-center gap-2 rounded-full border border-cyan-400 px-6 py-3 font-medium text-cyan-400 transition-all hover:bg-cyan-400 hover:text-white hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 rounded-full border border-cyan-400 px-6 py-3 font-medium text-cyan-400 transition-all hover:bg-cyan-400 hover:text-white hover:scale-105"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-slate-800">
          技術スキル
        </h3>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-md border border-emerald-100"
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-slate-800">{skill.name}</span>
                  <span className="text-sm text-slate-600">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-12 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <h3 className="mb-8 text-center text-3xl font-bold text-slate-800">
          プロジェクト
        </h3>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-lg border border-emerald-100 hover:border-emerald-300 transition-all hover:scale-105"
              >
                <h4 className="mb-3 text-xl font-bold text-slate-800">
                  {project.title}
                </h4>
                <p className="mb-4 text-slate-600">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    {project.status}
                  </span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-500 transition-colors"
                  >
                    詳細を見る
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-8 text-3xl font-bold text-slate-800">自己紹介</h3>
          <div className="rounded-xl bg-white/80 p-8 backdrop-blur-sm shadow-lg border border-emerald-100">
            <p className="mb-6 text-lg text-slate-600">
              {PROFILE.bio}
            </p>
            <p className="text-lg text-slate-600">
              新しい技術を学ぶことが好きで、常にユーザー体験を向上させる方法を
              模索しています。将来はフロントエンドエンジニアとして、
              人々の生活をより豊かにするWebサービスを作っていきたいと思っています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-12 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-8 text-3xl font-bold text-slate-800">お問い合わせ</h3>
          <div className="rounded-xl bg-white/80 p-8 backdrop-blur-sm shadow-lg border border-emerald-100">
            <p className="mb-6 text-lg text-slate-600">
              お仕事のご依頼、技術的な質問、または単純にお話ししたい場合など、
              お気軽にお声がけください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT.email}
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {PROFILE.location}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}