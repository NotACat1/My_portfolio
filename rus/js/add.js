gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2.05,
    effects: true
  });
}

gsap.fromTo('#section-1', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '#section-1', start: "bottom center", end: "130% center", scrub: true}}
);

gsap.fromTo('#section-2', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '#section-2', start: "bottom center", end: "130% center", scrub: true }}
);

gsap.fromTo('#section-3', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '#section-3', start: "bottom center", end: "130% center", scrub: true }}
);