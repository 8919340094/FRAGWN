// =============================
// FRAGWN MVP v1
// =============================

// Replace this with your real FRAGWN WhatsApp Business number.
// Use country code without + or spaces.
// Example: const FRAGWN_WHATSAPP = "919876543210";
const FRAGWN_WHATSAPP = "YOUR_WHATSAPP_NUMBER";

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Service cards fill the request form automatically.
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    document.getElementById("service").value = service;
    document.getElementById("request").scrollIntoView({ behavior: "smooth" });
  });
});

// Professional cards fill service + professional name.
document.querySelectorAll(".request-pro").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("service").value = button.dataset.service;
    document.getElementById("problem").value =
      `I would like to request ${button.dataset.service} from ${button.dataset.pro}.`;
    document.getElementById("request").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("serviceForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value.trim();
  const problem = document.getElementById("problem").value.trim();
  const time = document.getElementById("time").value.trim();

  const message =
`*FRAGWN Service Request*

Name: ${name}
Phone: ${phone}
Service: ${service}
Location: ${location}
Problem: ${problem}
Preferred time: ${time || "Not specified"}

Find. Book. Done.`;

  const formMessage = document.getElementById("formMessage");

  if (FRAGWN_WHATSAPP === "YOUR_WHATSAPP_NUMBER") {
    formMessage.textContent =
      "Demo mode: add your FRAGWN WhatsApp number in script.js to activate this button.";
    formMessage.style.color = "#b54708";
    return;
  }

  const whatsappUrl =
    "https://wa.me/" + FRAGWN_WHATSAPP + "?text=" + encodeURIComponent(message);

  formMessage.textContent = "Opening WhatsApp...";
  formMessage.style.color = "#067647";
  window.open(whatsappUrl, "_blank");
});
