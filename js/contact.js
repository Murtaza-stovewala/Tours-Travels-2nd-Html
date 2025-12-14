// Contact Page JavaScript
document.addEventListener("DOMContentLoaded", async function () {
  // Load components
  await loadComponent("header-placeholder", "components/header.html");
  await loadComponent("footer-placeholder", "components/footer.html");
  await loadComponent("mobile-nav-placeholder", "components/mobile-nav.html");

  // Initialize header scroll effect
  initHeaderScroll();

  // Highlight active page
  highlightActivePage("contact");

  // Form submission
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
      marketing: formData.get("marketing") === "on",
      consent: formData.get("consent") === "on",
    };

    // Validate checkboxes
    if (!data.marketing || !data.consent) {
      alert("Please accept both required consents to proceed.");
      return;
    }

    // In a real app, you would send this data to a server
    console.log("Contact form submitted:", data);

    // Show success message
    contactForm.classList.add("hidden");
    successMessage.classList.remove("hidden");

    // Reset form after 3 seconds
    setTimeout(() => {
      contactForm.reset();
      contactForm.classList.remove("hidden");
      successMessage.classList.add("hidden");
    }, 3000);
  });
});
