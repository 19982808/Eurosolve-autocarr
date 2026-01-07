document.addEventListener("DOMContentLoaded", () => {

  // Fetch services data
  fetch('data/services.json')
    .then(response => response.json())
    .then(services => {

      const servicesGrid = document.querySelector(".services-grid");

      // Create modal container
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <div class="modal-body"></div>
        </div>`;
      document.body.appendChild(modal);

      const modalBody = modal.querySelector(".modal-body");
      const modalClose = modal.querySelector(".modal-close");

      // Populate service cards dynamically
      services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service-card", "reveal");
        card.dataset.id = service.id;
        card.innerHTML = `
          <img src="images/services/${service.hero}" alt="${service.title}">
          <div class="service-card-content">
            <h3>${service.title}</h3>
            <p>${service.shortDesc}</p>
            <a class="cta-btn">View Details</a>
          </div>`;
        servicesGrid.appendChild(card);

        // Open modal on "View Details" click
        card.querySelector(".cta-btn").addEventListener("click", () => {
          modalBody.innerHTML = `
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <h3>Price: ${service.price}</h3>
            <div class="modal-gallery">
              ${service.gallery.map(img => `<img src="images/services/${img}" alt="${service.title}">`).join('')}
            </div>
            <div class="modal-reviews">
              <h3>Customer Reviews</h3>
              ${service.reviews.map(r => `<div class="review-card"><strong>${r.name}:</strong> ${r.comment}</div>`).join('')}
            </div>
          `;
          modal.style.display = "block";
        });
      });

      // Close modal
      modalClose.addEventListener("click", () => modal.style.display = "none");
      modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
      });

      // Scroll reveal for service cards
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

    })
    .catch(err => console.error("Error loading services:", err));

});
