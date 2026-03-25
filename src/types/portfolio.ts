import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  description: string;
  href: string;
  repositoryLabel: string;
};
