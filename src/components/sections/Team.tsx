"use client";

import Image from "next/image";
import MView from "@/components/ui/MView";
import Pill from "@/components/ui/Pill";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/i18n/I18nProvider";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Member = {
  key: keyof Dictionary["team"]["members"];
  initials: string;
  gradient: string;
  skills: string[];
  linkedin?: string;
  photo?: string;
};

const baseMembers: Member[] = [
  {
    key: "siam",
    initials: "MS",
    gradient: "#E84A00,#FFB800",
    skills: [],
    linkedin: "https://www.linkedin.com/in/siamk417/",
    photo: "/team/mohammad-siam.png",
  },
  {
    key: "mojammel",
    initials: "MH",
    gradient: "#10B981,#38BDF8",
    skills: [],
    linkedin: "https://www.linkedin.com/in/md-mojammel-haque-17858916a/",
    photo: "/team/mojammel.png",
  },
];

function Avatar({
  m,
  className,
}: {
  m: Member & { name: string };
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${m.photo ? "" : "rounded-2xl"} flex items-center justify-center font-display font-black text-white flex-shrink-0 ${className}`}
      style={
        m.photo
          ? undefined
          : { background: `linear-gradient(135deg,${m.gradient})` }
      }
    >
      {m.photo ? (
        <Image src={m.photo} alt={m.name} fill className="object-bottom" />
      ) : (
        m.initials
      )}
    </div>
  );
}

export default function Team() {
  const { isDark } = useTheme();
  const { t } = useI18n();
  const members = baseMembers.map((m) => ({ ...m, ...t.team.members[m.key] }));
  return (
    <section
      id="team"
      aria-label="Meet the Team"
      className={`py-24 px-[5%] ${isDark ? "bg-page" : "bg-card"}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>{t.team.pill}</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: "clamp(2rem,3.5vw,3rem)" }}
          >
            {t.team.title} <span className="grad-text">StackLeo</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            {t.team.desc}
          </p>
        </MView>

        <MView>
          {/* Desktop: side by side */}
          <div className="hidden md:flex items-stretch justify-center gap-6">
            {members.map((m) => (
              <div
                key={m.name}
                className={`rounded-2xl border flex flex-col items-center text-center px-8 py-10 w-72 transition-transform duration-300 hover:-translate-y-2
                  ${
                    isDark
                      ? "bg-[#13131f] border-white/[0.08]"
                      : "bg-white border-line shadow-md"
                  }`}
              >
                {/* Avatar */}
                <Avatar m={m} className="mb-4 w-28 h-36 text-2xl" />

                <div className="font-display font-bold text-fg mb-0.5 text-lg">
                  {m.name}
                </div>
                <div className="font-bold tracking-widest uppercase grad-text mb-1 text-xs">
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

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col items-center gap-4">
            {members.map((m) => (
              <div
                key={m.name}
                className={`rounded-2xl border w-full max-w-[320px] px-6 py-7 text-center ${
                  isDark
                    ? "bg-[#13131f] border-white/[0.08]"
                    : "bg-white border-line shadow-md"
                }`}
              >
                <Avatar m={m} className="w-[100px] h-32 mx-auto mb-3 text-xl" />
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
