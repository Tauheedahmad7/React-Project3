import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import flower from "./assets/flower.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CenterText from "./components/CenterText";
import ParagraphDiv from "./components/ParagraphDiv";
import BottomDiv from "./components/BottomDiv";
import Footer from "./components/Footer";

const App = () => {
  const imageRef = useRef(null);
  const mainRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 0",
        end: "top -230%",
        scrub: 2,
      },
    });

    tl.to(imageRef.current, {
      translateY: "-20%",
      duration: 1,
    })
      .to(imageRef.current, {
        translateY: "-35%",
        scale: 0.6,
        duration: 1,
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill()); // Cleanup on unmount
    };
  });

  return (
    <div ref={mainRef} className="bg-[#FF8676] min-h-screen w-full text-white">
      <Navbar />
      <div id="center" className="relative px-[10vw] pb-[15vw] pt-[12vw]">
        <CenterText />
        <ParagraphDiv />
        <BottomDiv />
        <img
          ref={imageRef}
          src={flower}
          className="fixed left-[9.2%] top-0 h-[76vw] object-cover" // Ensure the image scales well
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
