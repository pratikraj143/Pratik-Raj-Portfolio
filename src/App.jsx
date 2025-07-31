import Navbar from "./constants/components/navbar"
import Hero from "./constants/components/Hero"
import Technologies from "./constants/components/Technologies"
import Projects from "./constants/components/Projects"
import Contact from "./constants/components/Contact"
import EducationSection from "./constants/components/EducationSection"

const App= () =>{
  return (
    <div className="overflow-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
        </div> 

        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Technologies/>
          <EducationSection/>
          <Projects />
          <Contact />
        </div>
      </div>
  )
}

export default App