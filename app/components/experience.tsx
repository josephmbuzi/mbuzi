const role = {
  title: "Software Engineer",
  company: "Yamfumu Technologies",
  employment: "Full-time",
  dates: "Jan 2022 – Present",
  location: "Lusaka, Zambia · On-site",
  highlights: [
    "Led full-stack development of Spattro, a digital healthcare consultation platform, using React, Node.js, MongoDB, and Microsoft Azure.",
    "Implemented and managed the CI/CD pipeline for Spattro, automating Docker image builds, container registry publishing, and deployment on Azure.",
    "Built frontend and backend features for Koloso, an education technology platform, collaborating through Bitbucket in an Agile environment.",
    "Built responsive frontend interfaces for LawCentr using Next.js to improve user experience and performance.",
    "Designed and integrated RESTful APIs across multiple production applications for secure frontend-backend communication.",
    "Collaborated with cross-functional teams on code reviews, version control, testing, and continuous product improvement.",
  ],
};

export function Experience() {
  return (
    <section id="experience" className="mt-20 border-t border-white/10 pt-10">
      <p className="text-sm font-semibold uppercase text-[#e4db55]">
        Experience
      </p>

      <div className="mt-6 border border-white/10 bg-zinc-950/70 p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl font-medium text-white sm:text-2xl">
              {role.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              {role.company} · {role.employment}
            </p>
          </div>
          <div className="text-left text-sm text-zinc-500 sm:text-right">
            <p>{role.dates}</p>
            <p>{role.location}</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
          {role.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#e4db55]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
