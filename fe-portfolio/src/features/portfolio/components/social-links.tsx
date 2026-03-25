import Link from "next/link";

import { useSocialLinks } from "@/hooks/useSocialLinks";

export function SocialLinks() {
  const links = useSocialLinks();

  return (
    <ul className="flex flex-wrap items-center gap-4 pt-4">
      {links.map(({ href, icon: Icon, label }) => (
        <li key={label}>
          <Link
            aria-label={label}
            className="text-zinc-200 transition hover:text-violet-400"
            href={href}
            rel="noopener noreferrer"
            target={href.startsWith("mailto:") ? undefined : "_blank"}
          >
            <Icon className="h-5 w-5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
