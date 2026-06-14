"use client";

import { useState } from "react";
import MView from "@/components/ui/MView";
import Pill from "@/components/ui/Pill";
import { useTheme } from "@/lib/theme";

type Member = {
  initials: string;
  gradient: string;
  name: string;
  role: string;
  sub?: string;
  skills: string[];
  linkedin?: string;
  center?: boolean;
};

const members: Member[] = [
  {
    initials: "TS",
    gradient: "#3B82F6,#9B3FFF",
    name: "Tonmoy",
    role: "CTO · Full-Stack Engineer",
    skills: ["React", "Next.js", "Python"],
    linkedin: "https://www.linkedin.com/in/tonmoy-dev/",
  },
  {
    initials: "MS",
    gradient: "#E84A00,#FFB800",
    name: "Mohammad Siam",
    role: "Founder & CEO",
    sub: "Full-Stack Engineer · Project Lead",
    skills: [],
    linkedin: "https://www.linkedin.com/in/siamk417/",
    center: true,
  },
  {
    initials: "MH",
    gradient: "#10B981,#38BDF8",
    name: "Mojammel",
    role: "Co-Founder · Frontend Engineer",
    skills: ["React", "Next.js", "UI"],
    linkedin: "https://www.linkedin.com/in/md-mojammel-haque-17858916a/",
  },
];

export default function Team() {
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);

  const cardStyle = (i: number, isCenter: boolean): React.CSSProperties => {
    const isHov = hovered === i;
    const blurred = !isCenter && hovered !== i;
    return {
      filter: blurred ? "blur(1.5px)" : "none",
      opacity: blurred ? 0.72 : 1,
      transform: isHov
        ? "translateY(-10px) scale(1.04)"
        : isCenter
          ? "scale(1)"
          : "scale(0.96)",
      zIndex: isHov ? 20 : isCenter ? 10 : 0,
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    };
  };

  return (
    <section
      id="team"
      aria-label="Meet the Team"
      className={`py-24 px-[5%] ${isDark ? "bg-page" : "bg-card"}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>The Team</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            Who&apos;s Behind <span className="grad-text">StackLeo</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            Led by a hands-on founder who stays involved in every project —
            backed by a skilled team of developers, designers, and marketers.
          </p>
        </MView>

        <MView>
          {/* Desktop: 3-card fan */}
          <div className="hidden md:flex items-center justify-center">
            {members.map((m, i) => (
              <div
                key={m.name}
                className={`relative rounded-2xl border flex flex-col items-center text-center cursor-default
                  ${m.center ? "-mx-0 px-8 py-10 w-72" : "px-6 py-8 w-60 -mx-5"}
                  ${
                    isDark
                      ? "bg-[#13131f] border-white/[0.08]"
                      : "bg-white border-line shadow-md"
                  }`}
                style={cardStyle(i, !!m.center)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Avatar */}
                <div
                  className={`rounded-2xl flex items-center justify-center font-display font-black text-white mb-4 flex-shrink-0 ${
                    m.center ? "w-20 h-20 text-2xl" : "w-14 h-14 text-lg"
                  }`}
                  style={{
                    background: `linear-gradient(135deg,${m.gradient})`,
                  }}
                >
                  {m.initials}
                </div>

                <div
                  className={`font-display font-bold text-fg mb-0.5 ${m.center ? "text-lg" : "text-sm"}`}
                >
                  {m.name}
                </div>
                <div
                  className={`font-bold tracking-widest uppercase grad-text mb-1 ${m.center ? "text-xs" : "text-[0.6rem]"}`}
                >
                  {m.role}
                </div>
                {m.sub && (
                  <div className="text-xs text-muted mb-2">{m.sub}</div>
                )}

                {m.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-center mt-2">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className={`text-[0.62rem] font-medium px-2 py-0.5 rounded-full border ${
                          isDark
                            ? "bg-white/[0.05] border-white/10 text-white/50"
                            : "bg-orange-50 border-orange-100 text-orange-700/70"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border transition-all hover:-translate-y-0.5 ${
                      isDark
                        ? "bg-white/[0.05] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                        : "bg-white border-gray-200 text-gray-600 hover:text-gray-900 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <span className="font-black">in</span> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical stack, Siam first */}
          <div className="md:hidden flex flex-col items-center gap-4">
            {[members[1], members[0], members[2]].map((m) => (
              <div
                key={m.name}
                className={`rounded-2xl border w-full max-w-[320px] px-6 py-7 text-center ${
                  isDark
                    ? "bg-[#13131f] border-white/[0.08]"
                    : "bg-white border-line shadow-md"
                }`}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center font-display font-black text-white text-xl mb-3"
                  style={{
                    background: `linear-gradient(135deg,${m.gradient})`,
                  }}
                >
                  {m.initials}
                </div>
                <div className="font-display font-bold text-base mb-0.5 text-fg">
                  {m.name}
                </div>
                <div className="text-[0.65rem] font-bold tracking-widest uppercase grad-text mb-1">
                  {m.role}
                </div>
                {m.sub && (
                  <div className="text-xs text-muted mb-2">{m.sub}</div>
                )}
                {m.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-center mt-2">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className={`text-[0.65rem] font-medium px-2 py-0.5 rounded-full border ${
                          isDark
                            ? "bg-white/[0.05] border-white/10 text-white/50"
                            : "bg-orange-50 border-orange-100 text-orange-700/70"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border ${
                      isDark
                        ? "bg-white/[0.05] border-white/10 text-white/60"
                        : "bg-white border-gray-200 text-gray-600 shadow-sm"
                    }`}
                  >
                    <span className="font-black">in</span> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </MView>
      </div>
    </section>
  );
}
