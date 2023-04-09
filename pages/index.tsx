//local components
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import ParticlesBackground from "@/components/ParticlesBackground";
export default function Home() {
  return (
    <>
      {/* <ParticlesBackground /> */}
      <Header />
      <Hero />
      <About />
      <Overview />
      <Projects />
    </>
  );
}
