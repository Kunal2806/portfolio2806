
import Home from "./components/Home"
import Nav from "./components/Nav"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="w-[100vw] bg-[#0B0D11] relative text-white cursor-default">
        <div className="sticky top-0">
          <Nav />
        </div>
        <Home />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
