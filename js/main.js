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

const SKETCH_KEYS = ["guitar", "gears", "toolpath"];
const SKETCH_PATHS = {
  guitar: "M46.4 95.1L31 96.3L28.8 100.8L28 107.5L28 121.1L28 136.1L28.8 145.8L31 152.6L35.9 155.2L44.9 156.7L55.4 159L64.5 160.1L69.3 159.4L71.6 153.4L72.3 142.1L72 127.8L69.3 115.8L63.7 106.4L57.7 99.6L53.9 96.6ZM27.7 154.5L32.5 157.1L41.5 159L52.1 160.9L61.1 162L66 161.2L68.2 155.2L68.6 144.3L68.6 129.7L66 117.7M31 152.6L27.7 154.5M35.9 155.2L32.5 157.1M44.9 156.7L41.5 159M55.4 159L52.1 160.9M64.5 160.1L61.1 162M69.3 159.4L66 161.2M71.6 153.4L68.2 155.2M72.3 142.1L68.6 144.3M72 127.8L68.6 129.7M69.3 115.8L66 117.7M46.8 95.1L46.8 35.4L53.6 36.9L53.6 96.6ZM53.6 96.6L50.2 98.5L50.2 38.8L53.6 36.9M46.8 35.4L43.8 32.4L43.4 24.5L43.4 15.9L44.9 10.3L47.9 8L53.9 9.1L55.8 14.4L55.1 26L53.9 33.9L53.6 36.9ZM47.9 8L44.6 10.3L50.6 11.4L53.9 9.1M41.9 31.3L44.2 31.7M41.9 27.5L44.2 27.9M41.9 23.4L44.2 23.8M41.9 19.6L44.2 20M41.9 15.5L44.2 15.9M41.9 11.8L44.2 12.1M49.4 98.1L34 99.6L32.2 109L31.8 130.4L34.8 142.5L56.6 146.2L56.9 140.2L50.9 135L50.9 109.8ZM43.1 141L56.6 143.2L56.6 140.2L43.1 137.6ZM43.1 150.4L56.9 153L56.9 149.6L43.1 147ZM47.6 36.2L44.6 149.2M48.7 36.2L46.8 149.6M49.4 36.5L49.1 150M50.6 36.5L51.3 150.4M51.3 36.5L53.2 150.7M52.4 36.9L55.4 151.1M57.7 136.1L66 137.6L66 121.4L57.7 119.9ZM59.6 132.7a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0M59.6 125.2a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0",
  gears: "M60.1 88.6L66.4 85.9L67.9 88.1L62.9 92.8L64.7 98.4L71.5 99.3L71.6 101.9L64.9 103.5L63.7 109.3L69.1 113.4L68 115.7L61.4 113.7L57.4 118.1L60.1 124.4L57.9 125.9L53.2 120.9L47.6 122.7L46.7 129.5L44.1 129.6L42.5 122.9L36.7 121.7L32.6 127.1L30.3 126L32.3 119.4L27.9 115.4L21.6 118.1L20.1 115.9L25.1 111.2L23.3 105.6L16.5 104.7L16.4 102.1L23.1 100.5L24.3 94.7L18.9 90.6L20 88.3L26.6 90.3L30.6 85.9L27.9 79.6L30.1 78.1L34.8 83.1L40.4 81.3L41.3 74.5L43.9 74.4L45.5 81.1L51.3 82.3L55.4 76.9L57.7 78L55.7 84.6ZM32 102a12 12 0 1 0 24 0a12 12 0 1 0 -24 0M38.5 102a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0M41.9 102a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0 -4.2 0M49.7 99.2L53.7 97.2M49.3 105.5L53 107.9M43.6 108.3L43.4 112.8M38.3 104.8L34.3 106.8M38.7 98.5L35 96.1M44.4 95.7L44.6 91.2M51.8 100.2a2.9 2.9 0 1 0 5.8 0a2.9 2.9 0 1 0 -5.8 0M37.3 112.2a2.9 2.9 0 1 0 5.8 0a2.9 2.9 0 1 0 -5.8 0M34.2 93.6a2.9 2.9 0 1 0 5.8 0a2.9 2.9 0 1 0 -5.8 0M55 75.5L49.3 77.2L48.1 74.9L52.6 71.2L51.6 65.4L46 63.5L46.4 60.9L52.2 60.5L54.8 55.3L51.4 50.5L53.2 48.6L58.2 51.7L63.3 49L63.4 43.1L66 42.6L68.2 48.1L73.9 48.9L77.5 44.2L79.8 45.3L78.4 51L82.6 55L88.2 53.4L89.4 55.6L84.9 59.4L86 65.1L91.5 67.1L91.2 69.6L85.3 70L82.8 75.2L86.1 80.1L84.3 81.9L79.4 78.8L74.2 81.6L74.1 87.4L71.6 87.9L69.4 82.5L63.6 81.7L60.1 86.3L57.7 85.2L59.2 79.5ZM59 65.3a9.8 9.8 0 1 0 19.6 0a9.8 9.8 0 1 0 -19.6 0M64.1 65.3a4.7 4.7 0 1 0 9.4 0a4.7 4.7 0 1 0 -9.4 0M67 65.3a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0M63.8 67.4L60.7 68.8M64.4 62.1L61.7 60M69.4 59.9L69.7 56.5M73.7 63.1L76.8 61.7M73.1 68.5L75.9 70.5M68.2 70.6L67.8 74M57.5 66.3a2.3 2.3 0 1 0 4.6 0a2.3 2.3 0 1 0 -4.6 0M70.1 57a2.3 2.3 0 1 0 4.6 0a2.3 2.3 0 1 0 -4.6 0M71.8 72.5a2.3 2.3 0 1 0 4.6 0a2.3 2.3 0 1 0 -4.6 0M66.3 119.7L67 114.7L69.6 114.4L71.2 119.3L76.8 121L80.9 117.9L82.9 119.6L80.6 124.2L83.3 129.3L88.4 130L88.6 132.6L83.8 134.2L82.1 139.8L85.2 143.9L83.5 145.9L78.9 143.6L73.8 146.3L73.1 151.4L70.5 151.6L68.8 146.8L63.3 145.1L59.2 148.1L57.2 146.5L59.5 141.9L56.7 136.8L51.7 136.1L51.4 133.4L56.3 131.8L58 126.3L54.9 122.2L56.6 120.2L61.2 122.5ZM61.9 133a8.1 8.1 0 1 0 16.2 0a8.1 8.1 0 1 0 -16.2 0M65.9 133a4.1 4.1 0 1 0 8.2 0a4.1 4.1 0 1 0 -8.2 0M68.5 133a1.6 1.6 0 1 0 3.1 0a1.6 1.6 0 1 0 -3.1 0M69.8 128.3L69.6 125.7M74.7 132.8L77.3 132.6M70.3 137.7L70.4 140.3M65.3 133.3L62.8 133.4M70.2 125.7a1.7 1.7 0 1 0 3.3 0a1.7 1.7 0 1 0 -3.3 0M75.7 134.9a1.7 1.7 0 1 0 3.3 0a1.7 1.7 0 1 0 -3.3 0M66.6 140.4a1.7 1.7 0 1 0 3.3 0a1.7 1.7 0 1 0 -3.3 0M61 131.2a1.7 1.7 0 1 0 3.3 0a1.7 1.7 0 1 0 -3.3 0M46.8 57.1L47.1 60.9L45 61.6L42.9 58.4L38.1 57.8L35.3 60.4L33.5 59.2L34.6 55.6L32.1 51.4L28.4 50.8L28.2 48.6L31.7 47.3L33.4 42.7L31.5 39.4L33.1 37.9L36.4 39.9L41 38.3L42.4 34.8L44.6 35.1L45.1 38.9L49.1 41.5L52.8 40.4L53.9 42.3L51.3 45L51.8 49.9L54.9 52L54.1 54.1L50.3 53.7ZM36.3 48.4a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0M38.7 48.4a3.1 3.1 0 1 0 6.2 0a3.1 3.1 0 1 0 -6.2 0M44 98L44 106M40 102L48 102M68.8 62L68.8 68.6M65.5 65.3L72.1 65.3",
  toolpath: "M12 8L88 8L88 162L12 162ZM12 20L12 8L24 8M15.2 11.2L15.2 16.4L20.4 16.4L20.4 11.2ZM88 150L88 162L76 162M84.8 158.8L84.8 153.6L79.6 153.6L79.6 158.8ZM12 162L12 148M12 162L26 162M23.2 159.4L26 162L23.2 164.6M18 28L82 28M18 85L82 85M18 142L82 142M46.1 107.4L30.6 110.1L28.4 113.4L27.9 118L27.7 127.3L27.9 137.6L28.6 144.5L30.6 148.7L35.7 149.8L44.6 150L55.4 150L64.3 149.8L69.4 148.7L71.4 144.3L72.1 136.6L71.8 126.8L69.4 118.7L63.8 113L57.7 109.1L53.9 107.4ZM46.5 107.4L46.5 66.4L53.5 66.4L53.5 107.4ZM46.5 66.4L43.7 64.5L43 59.2L43.2 53.3L44.7 49.1L47.8 47.4L53.9 47.4L55.6 50.8L54.8 58.9L53.9 64.3L53.5 66.4ZM47 112.6L35.3 114.6L33.6 117.1L33.2 120.6L33.1 127.7L33.2 135.5L33.7 140.7L35.3 143.9L39.1 144.8L45.9 144.9L54.1 144.9L60.9 144.8L64.7 143.9L66.3 140.6L66.8 134.7L66.5 127.3L64.7 121.1L60.5 116.8L55.8 113.8L53 112.6ZM18 14L18 114.2L40.1 114.2M40.1 114.2L59.8 114.2L60.3 117.2L39.6 117.2L39 120.3L60.9 120.3L61.4 123.3L38.5 123.3L37.9 126.4L62 126.4L62.5 129.4L37.4 129.4L36.8 132.5L63.1 132.5L63.6 135.5L36.3 135.5L35.7 138.6L64.2 138.6L64.7 141.6L35.2 141.6M45.2 101.8L54.8 101.8L54.8 110.9L45.2 110.9ZM67.5 130.4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
};

const mountRailSketch = () => {
  const brand = document.querySelector(".brand");
  if (!mast || !brand) return;
  const params = new URLSearchParams(location.search);
  let key = params.get("sketch");
  if (!SKETCH_KEYS.includes(key)) key = "guitar";

  const wrap = document.createElement("div");
  wrap.className = "rail-sketch";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 170");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("pathLength", "1000");
  path.setAttribute("d", SKETCH_PATHS[key]);
  svg.append(path);
  wrap.append(svg);

  const switcher = document.createElement("div");
  switcher.className = "rail-sketch-switch";
  switcher.setAttribute("role", "group");
  switcher.setAttribute("aria-label", "Sidebar sketch prototype");

  const apply = (next) => {
    key = next;
    path.setAttribute("d", SKETCH_PATHS[key]);
    path.style.animation = "none";
    void path.getBoundingClientRect();
    path.style.animation = "";
    switcher.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.sketch === key);
    });
    const url = new URL(location.href);
    url.searchParams.set("sketch", key);
    history.replaceState({}, "", url);
  };

  SKETCH_KEYS.forEach((id) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.sketch = id;
    btn.setAttribute("aria-label", id);
    if (id === key) btn.classList.add("is-on");
    btn.addEventListener("click", () => apply(id));
    switcher.append(btn);
  });

  wrap.append(switcher);
  brand.after(wrap);
  mast.classList.add("has-sketch");
};

mountRailSketch();
