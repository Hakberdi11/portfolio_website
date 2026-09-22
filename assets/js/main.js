const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
