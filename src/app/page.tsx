import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProjectCard } from "@/components/Newprojectcards";
import { Project } from "@/components/Projects";
import Skill from "@/components/Skills";
import SocialHandle from "@/components/SocialHandle";
// import projectscard from "@/ProjectCards/projectscard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <ProjectCard/> */}
      <Project/>
      <Skill/>
      <SocialHandle/>
      <Footer />
    </main>
  );
}
