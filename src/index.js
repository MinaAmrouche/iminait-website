import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function typeNameAnimation() {
  gsap.registerPlugin(TextPlugin);

  gsap.defaults({ ease: "none" });

  const tl = gsap.timeline();
  tl.to(".name", {
    duration: 2,
    text: "Mina Amrouche",
  });
}

function parallaxAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // TODO: add parallax animation
}

typeNameAnimation();
parallaxAnimation();
