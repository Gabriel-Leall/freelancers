import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export async function initAnimations() {
  // 1. Respeita prefers-reduced-motion (Acessibilidade)
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    gsap.set(".split-reveal, .mask-reveal, .mask-reveal-circle, .fade-item, .hero-fade", {
      opacity: 1,
      visibility: "visible",
      clipPath: "none",
      scale: 1,
      y: 0,
      clearProps: "all",
    });
    return;
  }

  // 2. Aguarda carregamento das fontes para medição exata das linhas
  if ("fonts" in document) {
    await document.fonts.ready;
  }

  // 3. FOCAL MOMENT: HERO ORCHESTRATION (Oficial GSAP SplitText + Mask Reveal)
  const heroSection = document.querySelector("#hero-section");
  if (heroSection) {
    const heroImage = heroSection.querySelector(".hero-bg-img") as HTMLElement | null;
    const heroTitle = heroSection.querySelector(".hero-split-title") as HTMLElement | null;
    const heroFades = heroSection.querySelectorAll(".hero-fade");

    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Revelação suave da foto de fundo
    if (heroImage) {
      heroTl.fromTo(
        heroImage,
        {
          scale: 1.15,
          opacity: 0.6,
        },
        {
          scale: 1.0,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        },
        0
      );
    }

    // SplitText oficial do GSAP com acessibilidade
    if (heroTitle) {
      const fullText = heroTitle.textContent?.trim() || "";
      if (fullText) {
        heroTitle.setAttribute("aria-label", fullText);
      }

      const split = new SplitText(heroTitle, {
        type: "lines,words",
        linesClass: "split-line overflow-hidden block",
        wordsClass: "split-word inline-block will-change-transform",
      });

      // Acessibilidade para leitores de tela
      split.words.forEach((w) => w.setAttribute("aria-hidden", "true"));

      heroTl.fromTo(
        split.words,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.035,
          ease: "power3.out",
        },
        0.2
      );
    }

    // Fade-in dos elementos do Hero
    if (heroFades.length > 0) {
      heroTl.fromTo(
        heroFades,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
        },
        0.5
      );
    }
  }

  // 4. SPLITTEXT OFICIAL DO GSAP NAS DEMAIS SEÇÕES (VIA SCROLLTRIGGER)
  const scrollTitles = document.querySelectorAll(".split-reveal:not(.hero-split-title)");

  scrollTitles.forEach((titleEl) => {
    const fullText = titleEl.textContent?.trim() || "";
    if (fullText) {
      titleEl.setAttribute("aria-label", fullText);
    }

    const split = new SplitText(titleEl as HTMLElement, {
      type: "lines,words",
      linesClass: "split-line overflow-hidden block",
      wordsClass: "split-word inline-block will-change-transform",
    });

    split.words.forEach((w) => w.setAttribute("aria-hidden", "true"));

    gsap.fromTo(
      split.words,
      {
        yPercent: 120,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleEl,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // 5. MASK REVEAL NAS FOTOS DE RITUAIS E SEÇÕES (Clip-path curtain reveal)
  const maskElements = document.querySelectorAll(".mask-reveal:not(.hero-bg-container)");

  maskElements.forEach((container) => {
    const img = container.querySelector("img") || container;

    gsap.fromTo(
      container,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      img,
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          // Libera inline transform para permitir hover CSS (group-hover:scale-105)
          gsap.set(img, { clearProps: "transform" });
        },
      }
    );
  });

  // 6. MASK REVEAL CIRCULAR (Dra. Especialista)
  const circleMasks = document.querySelectorAll(".mask-reveal-circle");

  circleMasks.forEach((container) => {
    const img = container.querySelector("img") || container;

    gsap.fromTo(
      container,
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(50% at 50% 50%)",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      img,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          gsap.set(img, { clearProps: "transform" });
        },
      }
    );
  });

  // 7. FADE STAGGER NOS CARDS E DEPOIMENTOS
  const fadeGroups = document.querySelectorAll(".fade-group");

  fadeGroups.forEach((group) => {
    const items = group.querySelectorAll(".fade-item");
    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  // 8. HEADER BLUR AO ROLAR
  const header = document.querySelector("#main-header");
  if (header) {
    ScrollTrigger.create({
      start: "top -40",
      onUpdate: (self) => {
        if (self.direction === 1 && self.progress > 0.04) {
          header.classList.add("shadow-md", "bg-elan-bg/95", "backdrop-blur-md");
        } else if (self.progress <= 0.04) {
          header.classList.remove("shadow-md", "bg-elan-bg/95", "backdrop-blur-md");
        }
      },
    });
  }

  // 9. Resize recalculation com debounce para telas móveis
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  });
}
