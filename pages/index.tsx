//local components
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
//next
import { NextPage } from "next";
//lib
import { getLocalData } from "@/lib/getlocaldata";
//types
import { IProps } from "@/Interfaces/Projects";

interface HomeProps {
  data: IProps[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div className="dark:bg-white dark:text-black bg-black text-white">
      <Header />
      <Hero />
      <Overview />
      <About />
      <Projects data={data} />
      <Contact />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getLocalData();
  return {
    props: {
      data,
    },
  };
};
export default Home;
