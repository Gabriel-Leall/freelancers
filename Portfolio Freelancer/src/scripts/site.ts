import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

const intro = document.querySelector<HTMLElement>(".intro");
let showIntro = !reduced.matches && !location.hash;
try {
  showIntro = showIntro && sessionStorage.getItem("gl-intro-seen") !== "yes";
  if (intro) sessionStorage.setItem("gl-intro-seen", "yes");
} catch {
  /* Storage can be unavailable in private browsing. */
}
if (intro && showIntro) {
  intro.classList.add("is-visible");
  gsap
    .timeline({
      onComplete: () => {
        intro.remove();
      },
    })
    .from(intro.querySelector("span"), {
      y: 25,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .from(intro.querySelector("small"), { opacity: 0, duration: 0.3 }, 0.15)
    .to(intro, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, 0.65);
} else intro?.remove();

const mm = gsap.matchMedia();
mm.add(
  {
    motion: "(prefers-reduced-motion: no-preference)",
    desktop: "(min-width: 901px)",
    tall: "(min-height: 720px)",
  },
  (ctx) => {
    const { motion, desktop, tall } = ctx.conditions!;
    if (!motion) return;
    if (document.querySelector(".hero")) {
      const delay = showIntro ? 0.95 : 0.05;
      gsap.from(".hero-title", {
        yPercent: 20,
        opacity: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
      });
      gsap.from(".avatar-wrap", {
        y: 55,
        opacity: 0,
        duration: 0.95,
        delay: delay + 0.12,
        ease: "power3.out",
      });
      gsap.from(".hero-project", {
        y: 80,
        opacity: 0,
        scale: 0.85,
        duration: 0.9,
        stagger: 0.08,
        delay: delay + 0.2,
        ease: "power3.out",
      });
      if (desktop) {
        // Explicit start values prevent parallax from recording the entrance offset.
        gsap.fromTo(
          ".hero-project-1, .hero-project-3",
          { y: 0 },
          {
            y: -75,
            immediateRender: false,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-stage",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
        gsap.fromTo(
          ".hero-project-2, .hero-project-4",
          { y: 0 },
          {
            y: -40,
            immediateRender: false,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-stage",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      }
    }
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
      gsap.from(card.querySelector(".desktop-frame"), {
        y: 55,
        rotation: -2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 85%", once: true },
      });
      gsap.from(card.querySelector(".phone-frame"), {
        y: 65,
        rotation: 12,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 80%", once: true },
      });
    });
    const process = document.querySelector<HTMLElement>(".process-section");
    if (!process) return;
    if (!tall) {
      process.classList.add("process-static");
      return () => process.classList.remove("process-static");
    }
    process.classList.remove("process-static");
    const panels = gsap.utils.toArray<HTMLElement>(".scene-panel");
    const copies = gsap.utils.toArray<HTMLElement>(".step-copy");
    const indicators = gsap.utils.toArray<HTMLElement>(".process-track li");
    const count = document.querySelector("#step-number");
    let currentStep = -1;
    const setStep = (index: number) => {
      if (index === currentStep) return;
      currentStep = index;
      copies.forEach((el, i) => el.classList.toggle("is-active", index === i));
      indicators.forEach((el, i) =>
        el.classList.toggle("is-active", index === i),
      );
      if (count) count.textContent = `0${index + 1}`;
    };
    gsap.set(panels.slice(1), { autoAlpha: 0, y: 45, scale: 0.9 });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".process-pin",
        start: "top 82px",
        end: () => `+=${desktop ? 2100 : 1700}`,
        pin: true,
        scrub: 0.45,
        invalidateOnRefresh: true,
        onUpdate: (self) => setStep(Math.min(3, Math.floor(self.progress * 4))),
      },
    });
    timeline.to({}, { duration: 0.68 });
    for (let i = 1; i < 4; i++) {
      timeline
        .to(
          panels[i - 1],
          {
            autoAlpha: 0,
            y: -35,
            scale: 0.95,
            duration: 0.32,
            ease: "power2.in",
          },
          i - 0.32,
        )
        .to(
          panels[i],
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
          i - 0.05,
        )
        .to({}, { duration: 0.65 }, i + 0.35);
    }
    setStep(0);
    return () => {
      copies.forEach((el, i) => el.classList.toggle("is-active", i === 0));
    };
  },
);
document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
