document.documentElement.classList.add("js");
try {
  localStorage.removeItem("terra-look");
} catch {
  /* private mode */
}

const mast = document.querySelector(".mast");
const toggle = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const onScroll = () => {
  mast?.classList.toggle("is-stuck", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const setMenuOpen = (open) => {
  menu?.classList.toggle("is-open", open);
  toggle?.classList.toggle("is-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  if (toggle) toggle.textContent = open ? "Close" : "Menu";
};

toggle?.addEventListener("click", () => {
  setMenuOpen(!menu?.classList.contains("is-open"));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

const current = (location.pathname.split("/").pop() || "index.html").replace(/\/$/, "");
const page = current === "" ? "index.html" : current;
document.querySelectorAll(".menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === page) link.classList.add("is-active");
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);
document.querySelectorAll(".rise").forEach((el) => io.observe(el));

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
