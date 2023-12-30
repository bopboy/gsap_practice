// tweens
gsap.to(".tweens .green", { rotation: 360, x: 400, duration: 1 });
gsap.from(".tweens .purple", { rotation: -360, x: -200, duration: 1 });
gsap.fromTo(
  ".tweens .blue",
  { x: -100 },
  { rotation: -360, x: -200, duration: 1 }
);

// staggers
gsap.from(".staggers .box", {
  duration: 2,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic",
  forcd3D: true,
});

document.querySelectorAll(".staggers .box").forEach(function (box) {
  box.addEventListener("click", function () {
    gsap.to(".staggers .box", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
  });
});

// timelines
let nav = document.querySelector(".nav");
let tween = gsap.to(".flair", {
  duration: 2,
  x: () => nav.offsetWidth,
  xPercent: -100,
  rotation: 360,
  ease: "none",
  paused: true,
});
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
