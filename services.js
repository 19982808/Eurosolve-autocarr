document.addEventListener("DOMContentLoaded", () => {
  const servicesGrid = document.getElementById("services-grid");

  // Fetch the services from the JSON file
  fetch("services.json")
    .then(response => response.json())
    .then(services => {
      services.forEach(service => {
        // Create a service card
        const card = document.createElement("div");
        card.classList.add("service-card");

        // Fill card with image, title, description, CTA
        card.innerHTML = `
          <img src="images/services/${service.image}" alt="${service.title}">
          <div class="service-card-content">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="https://wa.me/254723589515?text=${encodeURIComponent('I am interested in ' + service.title)}" class="cta-btn">${service.cta}</a>
          </div>
        `;

        // Append card to the services grid
        servicesGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading services:", error);
      servicesGrid.innerHTML = "<p>Failed to load services. Please try again later.</p>";
    });
});
