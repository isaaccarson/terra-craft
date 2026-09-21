# Isaac Carson Portfolio

A modern, responsive portfolio website showcasing mechanical engineering, design, and fabrication work. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, earth-tone design aesthetic
- 📱 Mobile-first responsive design
- ⚡ Smooth scroll animations and interactions
- 🎸 Dedicated custom guitar shop section
- 🔧 Project showcases for fabrication and design work
- 📸 Photography gallery
- 📄 Resume and contact sections

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:43123](http://localhost:43123) in your browser.

## Building for Production

To create a static export for GitHub Pages:

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── guitar-shop/            # Guitar shop section
│   ├── projects/               # Projects showcase
│   ├── photography/            # Photography gallery
│   ├── resume/                 # Resume page
│   ├── contact/                # Contact form
│   └── globals.css             # Global styles
├── components/
│   ├── navigation.tsx          # Main navigation
│   ├── scroll-reveal.tsx       # Animation component
│   └── ui/                     # shadcn/ui components
└── public/                     # Static assets
```

## Customization

### Colors

The color palette is defined in `app/globals.css` using CSS custom properties. Modify the earth tone values in the `:root` selector to adjust the site's color scheme.

### Content

Replace placeholder content in each page component with actual:
- Project photos and descriptions
- Guitar build documentation
- Photography images
- Resume details
- Contact information

### 3D Model

The hero section includes a placeholder for a rotating 3D model. Replace the SVG placeholder in `app/page.tsx` with your actual 3D model viewer (e.g., Three.js, React Three Fiber).

## Deployment to GitHub Pages

1. Build the site:
```bash
npm run build
```

2. The `out` directory contains your static site

3. Configure GitHub Pages to serve from your deployment branch

4. Push the contents of the `out` directory to your GitHub Pages branch

## Future Enhancements

- Add actual project photos and documentation
- Implement 3D model viewer for hero section
- Set up form backend for contact page
- Add blog/process documentation section
- Integrate analytics

## License

© 2026 Isaac Carson. All rights reserved.

---

Built with precision and attention to detail, just like the work it showcases.
