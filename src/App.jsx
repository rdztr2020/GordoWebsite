
import "./App.css"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Popupdiv from "./sections/Popupdiv"
import Quality from "./sections/Quality"
import Footer from "./sections/footer"
import { useState } from "react"
import LoadingScreen from "./sections/LoadingScreen"


export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`}
      >
      <Header/>
      <Hero/>
      <Popupdiv/>
      <Quality/>
      <Footer/>
      </div>
    </>
  )
}


