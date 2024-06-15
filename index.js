document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(TextPlugin);

  gsap.defaults({ ease: "none" });

  const tl = gsap.timeline();
  tl.to(".name", {
  duration: 2,
  text: "Mina Amrouche",
  });
});
