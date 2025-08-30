"use client";

import { useState } from "react";
import Image from "next/image";

import Terminal from "@/components/Terminal";
import PortfolioPage from "@/components/PortfolioPage";
import { PROFILE, SOCIAL_LINKS } from "@/constants/profile";

export default function Home() {
  const [activeWindow, setActiveWindow] = useState<"terminal" | "portfolio">("portfolio");

  return (
    <div className="h-screen overflow-hidden bg-gray-900 font-mono text-green-400">
      {/* Header with avatar and quick info */}
      <header className="flex items-center justify-between border-b border-gray-700 bg-gray-800 p-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-0.5">
            <Image
              src="/mellicon.JPG"
              alt="カズ之助のアイコン"
              width={48}
              height={48}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">
              {PROFILE.displayName}
            </h1>
            <p className="text-sm text-gray-400">{PROFILE.title}</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 text-sm md:flex">
          <span className="text-gray-400">{PROFILE.organization}</span>
          <span className="text-gray-600">•</span>
          <span className="text-green-400">Online</span>
        </div>
      </header>

      {/* Main Terminal Area */}
      <div className="flex" style={{ height: "calc(100vh - 4rem)" }}>
        {/* Sidebar with quick info */}
        <div className="hidden w-64 flex-col border-r border-gray-700 bg-gray-800 p-4 lg:flex">
          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-white">Quick Commands</h3>
            <div className="space-y-2 text-sm">
              <div className="cursor-pointer text-gray-300 hover:text-green-400">
                $ whois
              </div>
              <div className="cursor-pointer text-gray-300 hover:text-green-400">
                $ skills
              </div>
              <div className="cursor-pointer text-gray-300 hover:text-green-400">
                $ projects
              </div>
              <div className="cursor-pointer text-gray-300 hover:text-green-400">
                $ contact
              </div>
              <div className="cursor-pointer text-gray-300 hover:text-green-400">
                $ resume
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-white">Status</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-green-400">Japan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Focus:</span>
                <span className="text-blue-400">React/Next.js</span>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-xs text-gray-500">
              <p>Terminal Portfolio v2.0.0</p>
              <p>Built with Next.js & TypeScript</p>
            </div>
          </div>
        </div>

        {/* Main Window Area */}
        <div className="mb-4 flex-1 bg-gray-900 p-4">
          {/* Window */}
          <div className="h-full rounded-lg border border-gray-700 bg-gray-900">
            {/* Window Header */}
            <div className="flex items-center justify-between rounded-t-lg border-b border-gray-700 bg-gray-800 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 flex overflow-hidden rounded-md bg-gray-700">
                  <button
                    onClick={() => setActiveWindow("portfolio")}
                    className={`px-3 py-1 text-sm font-medium transition-all ${
                      activeWindow === "portfolio"
                        ? "bg-gray-600 text-green-400"
                        : "text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => setActiveWindow("terminal")}
                    className={`px-3 py-1 text-sm font-medium transition-all ${
                      activeWindow === "terminal"
                        ? "bg-gray-600 text-green-400"
                        : "text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    Terminal
                  </button>
                </div>
              </div>
              <span className="text-xs text-gray-300">
                {activeWindow === "terminal"
                  ? "terminal — kazuki19992@portfolio"
                  : "portfolio — kazuki19992@portfolio"}
              </span>
            </div>

            {/* Window Content */}
            <div
              className="bg-gray-900"
              style={{ height: "calc(100% - 3rem)" }}
            >
              {activeWindow === "terminal" ? (
                <div className="h-full p-4">
                  <Terminal />
                </div>
              ) : (
                <div className="h-full overflow-y-auto bg-gradient-to-br from-sky-50 via-emerald-50 to-cyan-50">
                  <PortfolioPage
                    onLaunchTerminal={() => setActiveWindow("terminal")}
                    showTerminalButton={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
