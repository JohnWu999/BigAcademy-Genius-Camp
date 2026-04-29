const header = document.querySelector(".site-header");
const revealNodes = document.querySelectorAll("[data-reveal]");
const writingScroller = document.querySelector("[data-writing-scroller]");
const writingScrollButtons = document.querySelectorAll("[data-writing-scroll]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.12,
  },
);

revealNodes.forEach((node) => revealObserver.observe(node));

writingScrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!writingScroller) return;
    const direction = button.dataset.writingScroll === "prev" ? -1 : 1;
    const travel = Math.min(writingScroller.clientWidth * 0.88, 420) * direction;
    writingScroller.scrollBy({ left: travel, behavior: "smooth" });
  });
});
