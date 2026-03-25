import { SectionContainer } from "@/components/layout/section-container";

import { aboutParagraphs } from "../data/portfolio-data";

export function AboutSection() {
  return (
    <SectionContainer className="bg-zinc-900 text-zinc-100" id="about">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
        {aboutParagraphs.map((paragraph) => (
          <p className="max-w-3xl text-zinc-300" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </SectionContainer>
  );
}
