gsap.config({ nullTragetWarn: true });
const tl = gsap.timeline({
  defaults: { opacity: 0, duration: 0.7, ease: "back" },
});
function init() {
  tl.from(".stage", { ease: "linear", autoAlpha: 0 })
    .from("stage h1", { x: -50, duration: 0.3 }, 0)
    .from(".stage h2", { x: 50, duration: 0.4 }, "<")
    .from(".stage p", { x: -50 }, "-=-.2")
    .from(".stage button", { x: 30 }, "-=-.4")
    .from(".stage .planet > img", { scale: 0, stagger: 0.2 }, "-=-.5");
}

window.addEventListener("DOMContentLoaded", init);
GSDevTools.create();
