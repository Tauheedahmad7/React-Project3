import Navbar from "./components/Navbar"
import flower from "./assets/flower.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import CenterText from "./components/CenterText"
import ParagraphDiv from "./components/ParagraphDiv"
import BottomDiv from "./components/BottomDiv"
import Footer from "./components/Footer"
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  // const LocomotiveScroll = new LocomotiveScroll();

  const imageRef = useRef(null)

  const mainRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mainRef.current,
      // markers: true,
      start: "top 0",
      end: "top -230%",
      scrub: 2
    }
  })

  useGSAP(() => {
    tl.to(imageRef.current, {
      transform: 'translateY(-20%) ',
      duration: 1,

    })
    tl.to(imageRef.current, {
      transform: 'translateY(-35%) scale(0.6)',
      duration: 1,

    })
  })

  return (
    <div ref={mainRef} className="bg-[#FF8676]  min-h-screen w-full text-white ">
      <Navbar />
      <div id="center" className="relative  px-[10vw]  pb-[15vw] pt-[12vw]">


        <CenterText />
        <ParagraphDiv />
        <BottomDiv />



        <img ref={imageRef} src={flower} className="fixed left-[9.2%] top-0 h-[76vw]" alt="" />

      </div>
      <Footer/>
    </div>
  )
}

export default App