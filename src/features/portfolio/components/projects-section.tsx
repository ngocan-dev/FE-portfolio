import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";

import { featuredProjects } from "../data/portfolio-data";

export function ProjectsSection() {
  return (
    <SectionContainer className="bg-zinc-950 text-zinc-100" id="projects">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6" key={project.name}>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-zinc-400">{project.description}</p>
              <Link
                className="mt-4 inline-flex text-sm font-medium text-violet-400 transition hover:text-violet-300"
                href={project.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.repositoryLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
