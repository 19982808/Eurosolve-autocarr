document.addEventListener("DOMContentLoaded", () => {

  /* ================= SMOOTH SCROLL FOR NAV ================= */
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ================= HERO BUTTON HOVER ANIMATION ================= */
  const heroBtns = document.querySelectorAll(".btn-primary, .btn-outline");
  heroBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.05)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
  });

  /* ================= BRAND IMAGES HOVER EFFECT ================= */
  const brandImages = document.querySelectorAll(".brand-grid img");
  brandImages.forEach(img => {
    img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
    img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
  });

  /* ================= BACK TO TOP BUTTON ================= */
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "backToTop";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #C9A24D;
    color: #0E0E0E;
    border: none;
    padding: 12px 16px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 1000;
  `;
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ================= OPTIONAL SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) el.classList.add("active");
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
