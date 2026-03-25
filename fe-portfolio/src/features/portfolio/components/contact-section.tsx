import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/constants/site";

export function ContactSection() {
  return (
    <SectionContainer className="bg-zinc-900 text-zinc-100" id="contact">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
        <p className="text-zinc-300">
          Let&apos;s collaborate on your next product. Reach out via email or connect on social channels.
        </p>
        <ul className="space-y-2 text-zinc-300">
          <li>
            Email: <Link className="text-violet-400" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
          </li>
          <li>
            LinkedIn: <Link className="text-violet-400" href={siteConfig.linkedInUrl} rel="noopener noreferrer" target="_blank">xirothedev</Link>
          </li>
          <li>
            GitHub: <Link className="text-violet-400" href={siteConfig.githubUrl} rel="noopener noreferrer" target="_blank">xirothedev</Link>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
}
