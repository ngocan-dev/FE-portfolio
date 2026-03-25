import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-400">{siteConfig.role}</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Hi, I&apos;m {siteConfig.authorName}</h1>
          <p className="max-w-xl text-lg text-zinc-300">{siteConfig.tagline}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild className="bg-violet-600 text-white hover:bg-violet-500">
              <Link href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
              variant="outline"
            >
              <Link href={siteConfig.resumeUrl}>
                Contact Me <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <SocialLinks />
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <p className="text-sm text-zinc-400">Current focus</p>
          <p className="mt-3 text-xl font-semibold text-zinc-100">
            Building scalable Next.js architecture for modern product teams.
          </p>
          <p className="mt-4 text-zinc-400">{siteConfig.description}</p>
        </div>
      </div>
    </section>
  );
}
