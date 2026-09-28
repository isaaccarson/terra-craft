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
  guitar: "M46.6 35.4L44.1 31.5L41.8 31.2L44.1 31.5L44.1 27.6L41.8 27.2L44.1 27.6L44.1 23.6L41.8 23.3L44.1 23.6L44.1 19.7L41.8 19.4L44.1 19.7L44.1 15.7L41.8 15.4L44.1 15.7L44.1 12L41.8 11.7L44.1 12L46.6 35.4L43.8 32.1L43.2 24.3L43.3 15.6L44.8 9.9L47.9 8L54 9.1L55.7 14.3L54.8 26L54 33.7L53.5 36.6L53.5 96.4L54 96.4L57.7 99.5L63.8 106.3L69.4 115.5L71.7 127.8L72.1 142.1L71.4 153.3L69.4 159.3L64.3 160L55.5 158.7L44.7 156.8L35.9 155L30.8 152.4L28.8 145.9L28.1 135.8L27.9 120.7L28.1 107.2L28.6 100.6L30.8 96.3L46.2 95L46.2 95L53.5 96.4L44.7 156.8L41.3 158.7L41.3 158.7L52.1 160.7L60.9 162L65.9 161.2L68 155.2L68.6 144.1L68.3 129.7L65.9 117.5L60.4 108.2L63.8 106.3L53.5 96.4L50.1 98.3L50.1 38.6L53.5 36.6L47.6 35.9L44.3 149.1L47.6 35.9L48.5 36L46.6 149.5L48.5 36L49.5 36.2L48.8 149.9L49.5 36.2L50.4 36.4L51 150.3L50.4 36.4L51.3 36.5L53.3 150.7L51.3 36.5L52.2 36.7L55.5 151.1L52.2 36.7L49.5 97.9L34.1 99.5L31.9 108.7L31.7 130.5L34.6 142.3L56.4 146.1L56.8 140.2L51 134.8L50.7 109.8L49.5 97.9L43.1 140.9L56.7 143.3L56.7 139.9L43.1 137.5L43.1 140.9L42.8 150.2L57 152.7L57 149.5L42.8 147L42.8 150.2L57.7 135.9L66 137.4L66 121.2L57.7 119.8L57.7 135.9L63.5 132.6L63.3 133.5L62.7 134.2L62 134.5L61.1 134.5L60.3 134.2L59.8 133.5L59.6 132.6L59.8 131.8L60.3 131.1L61.1 130.7L62 130.7L62.7 131.1L63.3 131.8L63.5 132.6L63.5 125.1L63.3 126L62.7 126.6L62 127L61.1 127L60.3 126.6L59.8 126L59.6 125.1L59.8 124.3L60.3 123.6L61.1 123.2L62 123.2L62.7 123.6L63.3 124.3L63.5 125.1",
  gears: "M60.1 88.6L66.4 85.9L67.9 88.1L62.9 92.8L64.7 98.4L71.5 99.3L71.6 101.9L64.9 103.5L63.7 109.3L69.1 113.4L68 115.7L61.4 113.7L57.4 118.1L60.1 124.4L57.9 125.9L53.2 120.9L47.6 122.7L46.7 129.5L44.1 129.6L42.5 122.9L36.7 121.7L32.6 127.1L30.3 126L32.3 119.4L27.9 115.4L21.6 118.1L20.1 115.9L25.1 111.2L23.3 105.6L16.5 104.7L16.4 102.1L23.1 100.5L24.3 94.7L18.9 90.6L20 88.3L26.6 90.3L30.6 85.9L27.9 79.6L30.1 78.1L34.8 83.1L40.4 81.3L41.3 74.5L43.9 74.4L45.5 81.1L51.3 82.3L55.4 76.9L57.7 78L55.7 84.6L60.1 88.6L56 102L55.6 105.1L54.4 108L52.5 110.5L50 112.4L47.1 113.6L44 114L40.9 113.6L38 112.4L35.5 110.5L33.6 108L32.4 105.1L32 102L32.4 98.9L33.6 96L35.5 93.5L38 91.6L40.9 90.4L44 90L47.1 90.4L50 91.6L52.5 93.5L54.4 96L55.6 98.9L56 102L49.5 102L49.1 104.1L47.9 105.9L46.1 107.1L44 107.5L41.9 107.1L40.1 105.9L38.9 104.1L38.5 102L38.9 99.9L40.1 98.1L41.9 96.9L44 96.5L46.1 96.9L47.9 98.1L49.1 99.9L49.5 102L46.1 102L45.8 103L45 103.8L44 104.1L43 103.8L42.2 103L41.9 102L42.2 101L43 100.2L44 99.9L45 100.2L45.8 101L46.1 102L49.7 99.2L53.7 97.2L49.7 99.2L49.3 105.5L53 107.9L49.3 105.5L43.6 108.3L43.4 112.8L43.6 108.3L38.3 104.8L34.3 106.8L38.3 104.8L38.7 98.5L35 96.1L38.7 98.5L44.4 95.7L44.6 91.2L44.4 95.7L55 75.5L49.3 77.2L48.1 74.9L52.6 71.2L51.6 65.4L46 63.5L46.4 60.9L52.2 60.5L54.8 55.3L51.4 50.5L53.2 48.6L58.2 51.7L63.3 49L63.4 43.1L66 42.6L68.2 48.1L73.9 48.9L77.5 44.2L79.8 45.3L78.4 51L82.6 55L88.2 53.4L89.4 55.6L84.9 59.4L86 65.1L91.5 67.1L91.2 69.6L85.3 70L82.8 75.2L86.1 80.1L84.3 81.9L79.4 78.8L74.2 81.6L74.1 87.4L71.6 87.9L69.4 82.5L63.6 81.7L60.1 86.3L57.7 85.2L59.2 79.5L55 75.5L78.6 65.3L78.2 67.8L77.3 70.2L75.7 72.2L73.7 73.8L71.3 74.7L68.8 75.1L66.2 74.7L63.9 73.8L61.8 72.2L60.3 70.2L59.3 67.8L59 65.3L59.3 62.7L60.3 60.4L61.8 58.3L63.9 56.8L66.2 55.8L68.8 55.5L71.3 55.8L73.7 56.8L75.7 58.3L77.3 60.4L78.2 62.7L78.6 65.3L73.5 65.3L73.1 67.1L72.1 68.6L70.6 69.6L68.8 70L67 69.6L65.4 68.6L64.4 67.1L64.1 65.3L64.4 63.5L65.4 62L67 60.9L68.8 60.6L70.6 60.9L72.1 62L73.1 63.5L73.5 65.3L70.6 65.3L70.3 66.2L69.7 66.8L68.8 67.1L67.9 66.8L67.2 66.2L67 65.3L67.2 64.4L67.9 63.7L68.8 63.5L69.7 63.7L70.3 64.4L70.6 65.3L63.8 67.4L60.7 68.8L63.8 67.4L64.4 62.1L61.7 60L64.4 62.1L69.4 59.9L69.7 56.5L69.4 59.9L73.7 63.1L76.8 61.7L73.7 63.1L73.1 68.5L75.9 70.5L73.1 68.5L68.2 70.6L67.8 74L68.2 70.6L66.3 119.7L67 114.7L69.6 114.4L71.2 119.3L76.8 121L80.9 117.9L82.9 119.6L80.6 124.2L83.3 129.3L88.4 130L88.6 132.6L83.8 134.2L82.1 139.8L85.2 143.9L83.5 145.9L78.9 143.6L73.8 146.3L73.1 151.4L70.5 151.6L68.8 146.8L63.3 145.1L59.2 148.1L57.2 146.5L59.5 141.9L56.7 136.8L51.7 136.1L51.4 133.4L56.3 131.8L58 126.3L54.9 122.2L56.6 120.2L61.2 122.5L66.3 119.7L78.1 133L77.9 135.1L77 137.1L75.8 138.8L74.1 140L72.1 140.8L70 141.1L67.9 140.8L66 140L64.3 138.8L63 137.1L62.2 135.1L61.9 133L62.2 130.9L63 129L64.3 127.3L66 126L67.9 125.2L70 124.9L72.1 125.2L74.1 126L75.8 127.3L77 129L77.9 130.9L78.1 133L74.1 133L73.8 134.6L72.9 135.9L71.6 136.8L70 137.1L68.5 136.8L67.1 135.9L66.2 134.6L65.9 133L66.2 131.5L67.1 130.1L68.5 129.2L70 128.9L71.6 129.2L72.9 130.1L73.8 131.5L74.1 133L71.6 133L71.4 133.8L70.8 134.4L70 134.6L69.3 134.4L68.7 133.8L68.5 133L68.7 132.2L69.3 131.7L70 131.5L70.8 131.7L71.4 132.2L71.6 133L69.8 128.3L69.6 125.7L69.8 128.3L74 130.4L76.1 129L74 130.4L74.2 135.2L76.5 136.3L74.2 135.2L70.3 137.7L70.4 140.3L70.3 137.7L66.1 135.6L63.9 137L66.1 135.6L65.8 130.9L63.5 129.7L65.8 130.9L46.8 57.1L47.1 60.9L45 61.6L42.9 58.4L38.1 57.8L35.3 60.4L33.5 59.2L34.6 55.6L32.1 51.4L28.4 50.8L28.2 48.6L31.7 47.3L33.4 42.7L31.5 39.4L33.1 37.9L36.4 39.9L41 38.3L42.4 34.8L44.6 35.1L45.1 38.9L49.1 41.5L52.8 40.4L53.9 42.3L51.3 45L51.8 49.9L54.9 52L54.1 54.1L50.3 53.7L46.8 57.1L47.3 48.4L46.8 50.5L45.7 52.3L43.9 53.5L41.8 53.9L39.7 53.5L37.9 52.3L36.7 50.5L36.3 48.4L36.7 46.3L37.9 44.5L39.7 43.3L41.8 42.9L43.9 43.3L45.7 44.5L46.8 46.3L47.3 48.4L44.9 48.4L44.4 49.9L43.3 51.1L41.8 51.5L40.2 51.1L39.1 49.9L38.7 48.4L39.1 46.8L40.2 45.7L41.8 45.3L43.3 45.7L44.4 46.8L44.9 48.4",
  toolpath: "M12 8L88 8L88 162L12 162L12 8L24 8L12 8L12 20L12 8L15.2 11.2L20.4 11.2L20.4 16.4L15.2 16.4L15.2 11.2L12 8L12 28L82 28L12 28L12 85L82 85L12 85L12 142L82 142L12 142L12 162L26 162L23.2 159.4L26 162L23.2 164.6L26 162L88 162L76 162L88 162L88 150L88 162L84.8 158.8L79.6 158.8L79.6 153.6L84.8 153.6L84.8 158.8L88 162L12 162L44.6 150L44.6 150L55.4 150L64.3 149.8L69.4 148.7L71.4 144.3L72.1 136.6L71.8 126.8L69.4 118.7L63.8 113L57.7 109.1L53.9 107.4L46.1 107.4L30.6 110.1L28.4 113.4L27.9 118L27.7 127.3L27.9 137.6L28.6 144.5L30.6 148.7L35.7 149.8L44.6 150L46.5 107.4L46.5 66.4L53.5 66.4L53.5 107.4L46.5 107.4L46.5 66.4L43.7 64.5L43 59.2L43.2 53.3L44.7 49.1L47.8 47.4L53.9 47.4L55.6 50.8L54.8 58.9L53.9 64.3L53.5 66.4L47 112.6L35.3 114.6L33.6 117.1L33.2 120.6L33.1 127.7L33.2 135.5L33.7 140.7L35.3 143.9L39.1 144.8L45.9 144.9L54.1 144.9L60.9 144.8L64.7 143.9L66.3 140.6L66.8 134.7L66.5 127.3L64.7 121.1L60.5 116.8L55.8 113.8L53 112.6L47 112.6L40.1 114.2L59.8 114.2L60.3 117.2L39.6 117.2L39 120.3L60.9 120.3L61.4 123.3L38.5 123.3L37.9 126.4L62 126.4L62.5 129.4L37.4 129.4L36.8 132.5L63.1 132.5L63.6 135.5L36.3 135.5L35.7 138.6L64.2 138.6L64.7 141.6L35.2 141.6L45.2 101.8L54.8 101.8L54.8 110.9L45.2 110.9L45.2 101.8L70.5 130.4L70.3 131.1L69.8 131.7L69 131.9L68.3 131.7L67.7 131.1L67.5 130.4L67.7 129.6L68.3 129.1L69 128.9L69.8 129.1L70.3 129.6L70.5 130.4",
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
