import Navbar from "@/components/navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}
