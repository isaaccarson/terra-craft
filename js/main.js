document.documentElement.classList.add("js");
if (!document.documentElement.dataset.look) {
  document.documentElement.dataset.look = "forge";
}

const LOOKS = ["forge", "vellum", "bench"];

const applyLook = (name, writeUrl) => {
  const look = LOOKS.includes(name) ? name : "forge";
  document.documentElement.dataset.look = look;
  try {
    localStorage.setItem("terra-look", look);
  } catch {
    /* private mode */
  }
  document.querySelectorAll("[data-set-look]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.setLook === look));
  });
  if (writeUrl) {
    const url = new URL(location.href);
    url.searchParams.set("look", look);
    history.replaceState({}, "", url);
  }
};

const params = new URLSearchParams(location.search);
let stored = null;
try {
  stored = localStorage.getItem("terra-look");
} catch {
  stored = null;
}
applyLook(params.get("look") || stored || "forge", Boolean(params.get("look")));

document.querySelectorAll("[data-set-look]").forEach((btn) => {
  btn.addEventListener("click", () => applyLook(btn.dataset.setLook, true));
});

const mast = document.querySelector(".mast");
const toggle = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const onScroll = () => {
  mast?.classList.toggle("is-stuck", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

toggle?.addEventListener("click", () => {
  const open = menu?.classList.toggle("is-open");
  toggle.classList.toggle("is-open", Boolean(open));
  toggle.setAttribute("aria-expanded", String(Boolean(open)));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
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
