# Isaac Carson Portfolio

Personal portfolio and launching point for a custom guitar shop. Static HTML, CSS, and JavaScript.

## Looks

Three layout variations share the same pages. **Forge** is the default.

| Look | Feel | How to preview |
| --- | --- | --- |
| **Forge** | Dark workshop, fading grid, centered gyro-pick with floating tools | Header button, or `?look=forge` |
| **Vellum** | Paper and ink, split hero, journal entries | Header button, or `?look=vellum` |
| **Bench** | Left identity rail, denser catalog | Header button, or `?look=bench` |

The choice is stored in the browser. A `?look=` query on any page wins and updates the stored look.

## Files

- `index.html` — Home
- `guitar-shop.html` — Custom guitars
- `projects.html` — Projects
- `photography.html` — Photography
- `resume.html` — Resume
- `contact.html` — Contact
- `css/styles.css` — Looks, layout, and type
- `js/main.js` — Look switcher, navigation, contact form

Media slots labeled “photo coming” / “3D orbit coming” / “turntable coming” are honest placeholders for later photos, turntables, and CAD orbits.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 43123
```

Then visit http://localhost:43123

GitHub Pages deploys automatically from `main`.
