"use client";

import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/insura.ae/",
    bg: "#1877F2",
    Icon: Facebook,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Insuraae",
    bg: "#000000",
    Icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/insuraae/",
    bg: "#E1306C",
    Icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/insura-ae",
    bg: "#0A66C2",
    Icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC6ZzXNkqiN0sQAJ4w0NNBZA",
    bg: "#FF0000",
    Icon: Youtube,
  },
];

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  // When user scrolls, just close the icons (but keep plus visible)
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* SOCIAL ICONS */}
      <div className="flex flex-col items-end gap-3">
        {socials.map(({ name, href, bg, Icon }, idx) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-white
              transition-all duration-300 ease-out
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
            `}
            style={{
              backgroundColor: bg,
              transitionDelay: open ? `${idx * 70}ms` : "0ms",
            }}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* PLUS BUTTON – always visible */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="
          w-14 h-14 rounded-full bg-[#0052cc] text-white text-3xl
          flex items-center justify-center shadow-xl hover:bg-[#003c99] transition
        "
      >
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
    </div>
  );
}
