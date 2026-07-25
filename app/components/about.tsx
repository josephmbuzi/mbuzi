export function About() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm font-semibold uppercase text-[#e4db55]">
          About
        </p>
        <h2 className="mt-5 max-w-170 text-3xl font-medium leading-tight text-white sm:text-4xl">
          Full-stack engineering across healthcare, education, and legal
          tech.
        </h2>
      </div>

      <p className="max-w-190 text-lg leading-8 text-zinc-300 lg:pt-2">
        At Yamfumu Technologies, I&apos;ve contributed to platforms across
        healthcare, education, and legal technology, including Spattro,
        Koloso, and LawCentr. My work spans frontend and backend development,
        API design and integration, cloud infrastructure on Microsoft Azure,
        containerization with Docker, and CI/CD automation using Bitbucket
        Pipelines and Azure Container Registry.
      </p>
    </section>
  );
}
