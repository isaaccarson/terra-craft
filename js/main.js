document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.querySelector(".nav-mobile");

  const onScroll = () => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = !mobile.classList.contains("is-open");
    mobile.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  mobile?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.remove("is-open");
      toggle?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const current = (location.pathname.split("/").pop() || "index.html").replace(
    /\/$/,
    ""
  );
  const page = current === "" ? "index.html" : current;

  document.querySelectorAll(".nav-links a, .nav-mobile a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page || (page === "index.html" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "").trim();
    const labels = {
      guitar: "Custom Guitar Commission",
      fabrication: "Fabrication Project",
      employment: "Employment Opportunity",
      collaboration: "Collaboration",
      other: "Other",
    };
    const subjectLine = labels[subject] || "Portfolio Inquiry";
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:isaac@example.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    if (status) {
      status.textContent = "Opening your email app with the message...";
      status.classList.add("is-visible");
    }
  });
});
