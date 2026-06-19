(function () {
  const controls = [...document.querySelectorAll(".control")];
  const containers = [...document.querySelectorAll(".container")];
  const themeButton = document.querySelector(".theme-btn");
  const contactForm = document.getElementById("contact-form");

  function showSection(id) {
    const nextSection = document.getElementById(id);

    if (!nextSection) return;

    document.querySelector(".active-btn")?.classList.remove("active-btn");
    document.querySelector(`.control[data-id="${id}"]`)?.classList.add("active-btn");

    containers.forEach((section) => {
      section.classList.toggle("active", section.id === id);
    });
  }

  controls.forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.id));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.jump));
  });

  themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  if (window.emailjs) {
    emailjs.init("QFK_Wm-_p4DjEA4jB");
  }

  contactForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!window.emailjs) {
      alert("Email service is loading. Please try again in a moment.");
      return;
    }

    const form = this;
    const submitButton = form.querySelector("button[type='submit']");
    const originalLabel = submitButton.textContent;

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    emailjs
      .send("service_87jsnri", "template_1j074vs", {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      })
      .then(
        function () {
          alert("Email sent successfully!");
          form.reset();
        },
        function () {
          alert("Email failed to send. Please try again later.");
        }
      )
      .finally(function () {
        submitButton.textContent = originalLabel;
        submitButton.disabled = false;
      });
  });
})();
