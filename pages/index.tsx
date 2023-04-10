//local components
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
