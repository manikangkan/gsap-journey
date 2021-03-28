const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from(".header", { y: "-100%", ease: "bounce" })

  .from(".link", { opacity: 0, stagger: 0.5 })

  .from(".right", { x: "-100vw", ease: "power2.in" }, 1)
  .from(".left", { x: "-100vw", ease: "power2.in" }, "<1")
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".btn",
    { opacity: 0, scale: 0, rotation: 720 },
    { duration: 1, opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});

// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

// gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });

// gsap.from(".left", { duration: 1, x: "-100vw", delay: 2, ease: "power2.in" });

// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 3 });

// gsap.fromTo(
//   ".btn",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
// );
// gsap.from(".btn", { opacity: 0, scale: 0, rotation: 720 });
// gsap.to(".btn", { duration: 1, delay: 3.5, opacity: 0, scale: 1, rotation: 0 });

// const k = { x: 0 };
// gsap.to(k, { x: 100, onUpdate: () => console.log(k.x) });
