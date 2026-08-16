"use client";

import ProjectSection from "@/components/custom/projectsection";
import GithubComponent from "@/components/custom/githubcomponent";
import LinkedInComponent from "@/components/custom/linkedincomponent";
import PersonalDetailComponent from "@/components/custom/personaldetailcomponent";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col bg-black font-sans">
      <iframe
        src="https://player.mux.com/an7GaIHsRYHvJJSMkCFU01OYHoeytC3h2E02DsVxnLWmk"
        className="w-full border-none"
        style={{ aspectRatio: "16 / 9" }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
      <ProjectSection />
      <GithubComponent />
      <LinkedInComponent />
      <PersonalDetailComponent />
    </main>
  );
}
