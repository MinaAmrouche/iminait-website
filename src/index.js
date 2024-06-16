import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function typeNameAnimation() {
  gsap.defaults({ ease: "none" });

  const tl = gsap.timeline();
  tl.to(".name", {
    duration: 2,
    text: "Mina Amrouche",
  });
}

function parallaxAnimation() {
  // TODO: add parallax animation
}

typeNameAnimation();
parallaxAnimation();
