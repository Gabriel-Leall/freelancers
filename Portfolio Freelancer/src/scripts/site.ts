import { gsap } from "gsap";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
const intro = document.querySelector<HTMLElement>(".intro");
let showIntro = !reduced.matches && !location.hash;
let scrollAnimationsStarted = false;

try {
  showIntro = showIntro && sessionStorage.getItem("gl-intro-seen") !== "yes";
  if (intro) sessionStorage.setItem("gl-intro-seen", "yes");
} catch {
  /* Storage can be unavailable in private browsing. */
}

function startHeroEntrance() {
  if (reduced.matches || !document.querySelector(".hero")) return;
  const delay = showIntro ? 1.55 : 0.08;

  gsap.from(".hero-title", { yPercent: 20, opacity: 0, duration: 1, delay, ease: "power3.out" });
  gsap.from(".avatar-wrap", { y: 55, opacity: 0, duration: 1.1, delay: delay + 0.1, ease: "power3.out" });
  gsap.from(".hero-project", { y: 80, opacity: 0, scale: 0.85, duration: 1, stagger: 0.12, delay: delay + 0.18, ease: "power3.out" });
}

function startScrollAnimations() {
  if (reduced.matches || scrollAnimationsStarted) return;
  scrollAnimationsStarted = true;

  void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger);
    const desktop = window.matchMedia("(min-width: 901px)").matches;
    const tall = window.matchMedia("(min-height: 720px)").matches;

    if (desktop) {
      gsap.fromTo(".hero-project-1, .hero-project-3", { y: 0 }, { y: -75, immediateRender: false, ease: "none", scrollTrigger: { trigger: ".hero-stage", start: "top top", end: "bottom top", scrub: 0.7 } });
      gsap.fromTo(".hero-project-2, .hero-project-4", { y: 0 }, { y: -40, immediateRender: false, ease: "none", scrollTrigger: { trigger: ".hero-stage", start: "top top", end: "bottom top", scrub: 0.7 } });
    }

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
      gsap.from(card.querySelector(".desktop-frame"), { y: 55, rotation: -2, duration: 1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 85%", once: true } });
      gsap.from(card.querySelector(".phone-frame"), { y: 65, rotation: 12, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 80%", once: true } });
    });

    const process = document.querySelector<HTMLElement>(".process-section");
    if (!process) return;
    if (!tall) {
      process.classList.add("process-static");
      return;
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
      copies.forEach((element, itemIndex) => element.classList.toggle("is-active", index === itemIndex));
      indicators.forEach((element, itemIndex) => element.classList.toggle("is-active", index === itemIndex));
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
    for (let index = 1; index < 4; index += 1) {
      timeline
        .to(panels[index - 1], { autoAlpha: 0, y: -35, scale: 0.95, duration: 0.32, ease: "power2.in" }, index - 0.32)
        .to(panels[index], { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }, index - 0.05)
        .to({}, { duration: 0.65 }, index + 0.35);
    }
    setStep(0);
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  });
}

function scheduleScrollAnimations() {
  window.setTimeout(startScrollAnimations, showIntro ? 300 : 700);
}

if (intro && showIntro) {
  intro.classList.add("is-visible");
  gsap
    .timeline({
      onComplete: () => {
        intro.remove();
        scheduleScrollAnimations();
      },
    })
    .from(intro.querySelector("span"), { y: 25, opacity: 0, duration: 0.75, ease: "power3.out" })
    .from(intro.querySelector("small"), { opacity: 0, duration: 0.45 }, 0.3)
    .to(intro, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, 1.25);
} else {
  intro?.remove();
  scheduleScrollAnimations();
}

startHeroEntrance();