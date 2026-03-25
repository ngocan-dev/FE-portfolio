import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import type { SocialLink } from "@/types/portfolio";

export const siteConfig = {
  authorName: "Lê Thành Trung",
  role: "Frontend Engineer",
  tagline:
    "I craft reliable and accessible web experiences with React, Next.js, and TypeScript.",
  description:
    "Software engineer focused on maintainable front-end architecture, product thinking, and polished UI implementation.",
  email: "lethanhtrung.trungle@gmail.com",
  githubUrl: "https://github.com/xirothedev",
  linkedInUrl: "https://www.linkedin.com/in/xirothedev/",
  discordUrl: "https://discord.com/users/1216624112139632711",
  resumeUrl: "mailto:lethanhtrung.trungle@gmail.com",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedInUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Discord", href: siteConfig.discordUrl, icon: MessageCircle },
];
