import { useState } from "react";

const Jobs = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    interface Job { 
        title: string;
        year: string;
        employer: string;
        desc: string;
    }

    const jobs: Job[] = [
    {
        title: "Summer Labourer",
        year: "2026",
        employer: "City of Winnipeg - Parks & Open Spaces",
        desc: "A hardy job of physical labour and public interaction, giving experience in physical work in all weather conditions, public interaction, group work and independant tasks. My work here was mostly over odd hours going late into the evening, the weekends and holidays."
    },
    {
        title: "Student Labourer",
        year: "2022",
        employer: "City of Winnipeg - Parks & Open Spaces",
        desc: "A hardy job of physical labour and public interaction, giving experience in physical work in all weather conditions, public interaction, group work, and independant tasks."
    }
    ];

    const toggleItem = (item: string) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <ul className="space-y-4 mt-4 text-lg">
        {jobs.map((job) => (
            <li key={job.title} className="w-full">
            <div
                onClick={() => toggleItem(job.title)}
                className="md:w-[800px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
                <div className="flex items-center gap-3 p-4">
                    <div className="flex items-center gap-2 flex-grow justify-between">
                        <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                        <span className="block truncate text-[var(--white)] text-lg">
                            <h6 className="text-3xl mb-2 job-key">{job.title}</h6>
                            <span className="text-2xl text-[var(--white-icon)]">{job.year} | {job.employer}</span>
                        </span>
                        </div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                            openItem === job.title ? "rotate-180" : ""
                        }`}
                        >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                        </svg>
                    </div>
                </div>
                <div
                className={`transition-all duration-300 px-4 ${
                  openItem === job.title
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {job.desc}
              </div>
            </div>
            </li>
        ))}
        </ul>
    );
};

export default Jobs;
