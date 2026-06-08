# Khadeeja — Portfolio Website

A dark, elegant portfolio inspired by MoncyDev/Portfolio-Website, fully customised for Khadeeja's ML/AI profile.

## Tech Stack
- React 18 + TypeScript + Vite
- GSAP (scroll animations)
- react-fast-marquee (tech stack scrolling)
- react-icons
- Geist font (Google Fonts)

## Project Structure
```
src/
├── App.tsx              # Root component + loading state
├── index.css            # Global styles, CSS variables
└── components/
    ├── Navbar.tsx        # Fixed navbar with smooth scroll
    ├── Landing.tsx       # Hero — animated KF orb + name + role
    ├── About.tsx         # Summary, stats, certifications
    ├── WhatIDo.tsx       # 4 skill area cards (ML, NLP, Data, Deploy)
    ├── TechStack.tsx     # Scrolling marquee of tech pills
    ├── Career.tsx        # Timeline: Insight Centre + AMU + Projects
    ├── Work.tsx          # Drag-to-scroll project cards
    ├── Contact.tsx       # Email, socials, footer
    ├── Cursor.tsx        # Custom cursor
    ├── Loading.tsx       # Intro loading screen
    └── styles/           # CSS file per component
```

## Getting Started

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # Production build → dist/
```

## Deploy to Vercel (Free)
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Leave all settings default → Deploy
4. Done! Your URL: your-name.vercel.app

## Customise
- **Links**: Update GitHub/LinkedIn URLs in `Contact.tsx` and `Work.tsx`
- **Projects**: Edit the `projects` array in `Work.tsx`
- **Profile photo**: In `Landing.tsx`, replace `<div className="orb-center">` with `<img>` tag
- **Colors**: Change `--accent` in `index.css` (currently `#c2a4ff`)

## Credits
Design inspired by [MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website)
