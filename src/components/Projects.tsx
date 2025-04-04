import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import projectsData from "@/data/projects.json";

interface Project {
  title: string;
  description: string;
  slug: string;
  link?: string;
}

export function Project() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 py-2 pb-10">
      {projectsData.projects.map((project: Project) => (
        <div
          key={project.slug}
          className="w-full sm:w-80 md:w-96 lg:w-[350px] hover:transform hover:scale-105 transition-transform duration-300 relative max-w-xs"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />

          {/* Project Card */}
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-6 h-full overflow-hidden rounded-2xl flex flex-col justify-between">
            <div>
              {/* Icon */}
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              {/* Title */}
              <h1 className="font-bold text-xl text-amber-600 mb-4">
                {project.title}
              </h1>

              {/* Description */}
              <p className="font-normal text-base text-slate-500 mb-4">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <Link href={project.slug} passHref>
                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Github
                </button>
              </Link>
              {project.link && (
                <Link href={project.link} passHref>
                  <button className="border px-4 py-1 rounded-lg border-purple-500 text-white">
                    Try Live
                  </button>
                </Link>
              )}
            </div>

            {/* Meteors Animation */}
            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
