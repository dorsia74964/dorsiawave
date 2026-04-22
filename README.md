<!--
  README.md — Thomas Shelby (Vikram) Security Engineer Portfolio
  GitHub: dorisa74964 · Mirror: dorsia74964
-->

<h1 align="center">Thomas Shelby — Security Engineer Portfolio</h1>

<p align="center">
  <em>Penetration testing · Red teaming · CTF writeups · Malware research</em><br/>
  <sub>Built &amp; maintained by <a href="https://github.com/dorisa74964">@dorisa74964</a> · mirror: <a href="https://github.com/dorsia74964">@dorsia74964</a></sub>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img alt="Static Site" src="https://img.shields.io/badge/Build-Static%20%2F%20No%20Deps-0a0a0a?style=flat-square"/>
  <img alt="SEO" src="https://img.shields.io/badge/SEO-Optimized-3366ff?style=flat-square"/>
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/dorisa74964/portfolio?style=flat-square&color=3366ff"/>
</p>

---

## About this repo

Hey, I'm Vikram — I run this portfolio under the handle **Thomas_Shelby**. I've been doing offensive security for roughly three years now: black-box, grey-box, and white-box pentesting, Active Directory attacks, web-app exploitation, and the occasional malware deep-dive when something old and weird catches my attention (the 1986 Brain virus post in `/blog` started exactly that way).

This repository is the source for [**thomasshelby.dev**](https://thomasshelby.dev/) — a hand-coded static site, no framework, no build step, no tracking. Every page is a single HTML file you can open in a browser and read. I wanted the code to be as honest as the writeups.

If you're recruiting, auditing my work, or just curious how I document engagements — the three entry points below are where to start.

- 🏠 **Home** → hero, capabilities, pentest projects → [`index.html`](./index.html)
- 📝 **Blog** → long-form malware &amp; security research → [`blog.html`](./blog.html)
- 🎯 **CTF Writeups** → rooted machines, step-by-step → [`ctf.html`](./ctf.html)

---

## Table of contents

- [What's inside](#whats-inside)
- [Highlighted posts](#highlighted-posts)
- [Pentest assessments](#pentest-assessments)
- [CTF machines — spin them up locally (UTM)](#ctf-machines--spin-them-up-locally-utm)
- [Running the site locally](#running-the-site-locally)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [SEO &amp; accessibility notes](#seo--accessibility-notes)
- [Contact](#contact)

---

## What's inside

A portfolio built for people who actually read. No popups, no chat widgets, no "book a call" modal chasing you down the page. What you get:

- **Full pentest reports** (PDF) for every project I publish — with redacted credentials, real screenshots, real failure paths.
- **CTF writeups** that show the six things I *tried* before the one that worked. If a box took me eight hours, I say eight.
- **Research blog** — the first piece is a deep case study on the Alvi brothers and the Brain virus (1986), written from a red-team angle.
- **Zero dependencies at runtime** — Tailwind via CDN, Google Fonts, and that's it. No npm install, no bundler.

---

## Highlighted posts

| Post | Category | Status |
|---|---|---|
| [The Brain Virus (1986): Two Brothers, Lahore, and the First PC Virus](./blog-worlds-first-virus.html) | Malware history · Case study | Published |
| _More malware &amp; red-team posts in progress_ | — | Queued |

---

## Pentest assessments

Three recent engagements live on the home page, each with a full PDF report on my [Reports repo](https://github.com/dorisa74964/Reports):

| Project | Type | Difficulty | What it tested |
|---|---|---|---|
| [Blinders](./post-blinders.html) | Black box | Medium | OSINT → credential reuse → privesc |
| [Demon](./post-demon.html) | Grey box | Hard | Vhost discovery, Jenkins RCE, sudo misconfig, rbash escape |
| [KGF](./post-kgf.html) | White box | Hard | SNMP enum, IMAPS creds, r-services pivot, dual-host root |
| [VulnCMS](./post-vulncms.html) | VulnHub | Medium | Drupalgeddon2 RCE, journalctl GTFObins |

---

## CTF machines — spin them up locally (UTM)

I package a couple of my custom CTF boxes as **UTM** virtual machines so you can run the exact same target I rooted. UTM is the free QEMU-based virtualizer for macOS / iPadOS; on Windows/Linux the `.utm` bundle also works with QEMU directly.

**Download the VM image:** [utm.dorisa74964.workers.dev](https://utm.dorisa74964.workers.dev/)

### Import steps (macOS — UTM)

1. **Install UTM** — [getutm.app](https://mac.getutm.app/) (free) or Mac App Store.
2. **Download** the `.utm` bundle from the link above. It's delivered via my own Cloudflare Worker, so no rate limits, no ads.
   ```bash
   curl -LO https://utm.dorisa74964.workers.dev/<machine-name>.utm.zip
   unzip <machine-name>.utm.zip
   ```
3. **Import** → open UTM → **File → Open** → select the `.utm` bundle. UTM registers it in the VM list automatically.
4. **Boot** → click Play. First boot takes ~30 seconds. Default network is host-only (NAT), so the machine is reachable only from your host — perfect for offline lab work.
5. **Find the IP** — on the VM's login screen, or from your host:
   ```bash
   # macOS / Linux
   arp -a | grep -i "52:54\|0a:00:27"
   ```
6. **Attack** — pair with the matching writeup in [`/ctf.html`](./ctf.html). Flags are intentional; passwords in writeups are redacted as `[REDACTED]` per my disclosure policy.

### Import steps (Windows / Linux — QEMU direct)

If you're not on macOS, a `.utm` bundle is just a folder with a `config.plist` and a raw qcow2 disk. Extract it and boot with QEMU:

```bash
unzip <machine-name>.utm.zip
cd <machine-name>.utm/Data
qemu-system-x86_64 \
  -m 2048 -smp 2 \
  -drive file=disk-0.qcow2,format=qcow2 \
  -net nic -net user,hostfwd=tcp::2222-:22 \
  -display gtk
```

> ⚠️ These VMs are intentionally vulnerable. **Do not expose them to the open internet.** Keep them on a host-only / NAT interface. I am not responsible for a rooted lab machine ending up on the public web.

---

## Running the site locally

No build step. Three options — pick whichever you have handy.

```bash
# 1. Plain Python (ships with macOS / most Linux)
python3 -m http.server 8080

# 2. Node + npx
npx serve .

# 3. VS Code — Live Server extension → right-click index.html → "Open with Live Server"
```

Then open <http://localhost:8080>.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Markup | Hand-written HTML5 | Readable diffs, no build tax |
| Styling | Tailwind CSS (CDN) | Atomic utility classes, zero runtime |
| Fonts | Space Grotesk + Inter (Google Fonts) | Technical + readable pairing |
| Icons | Material Symbols Outlined | Variable-font icons, one link |
| Hosting | Static (works on any CDN — Cloudflare Pages, Netlify, GitHub Pages) | $0, instant cache |
| CTF VM delivery | Cloudflare Workers (`utm.dorisa74964.workers.dev`) | Global edge, bandwidth-safe |

---

## Project structure

```
final_website/
├── index.html                      # Home — hero, capabilities, assessments
├── blog.html                       # Blog listing page
├── ctf.html                        # CTF machines — filterable grid
├── blog-worlds-first-virus.html    # Brain virus 1986 — case study
├── post-blinders.html              # Blinders writeup (Medium · Black Box)
├── post-demon.html                 # Demon writeup (Hard · Grey Box)
├── post-kgf.html                   # KGF writeup (Hard · White Box · 2-part)
├── post-vulncms.html               # VulnCMS writeup (VulnHub)
├── post.html                       # Generic writeup template
├── assests/                        # Images (folder name is intentional)
├── CLAUDE.md                       # Contributor notes
└── README.md                       # You are here
```

---

## SEO &amp; accessibility notes

Every page ships with:

- Unique `<title>` (≤ 60 chars) + `meta description` (≤ 160 chars)
- Open Graph + Twitter Card for rich previews
- Canonical URLs
- JSON-LD structured data — `Person`, `WebSite`, `Blog`, `BlogPosting`, `TechArticle`, `BreadcrumbList`, `CollectionPage`
- Semantic HTML5 (`<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>`)
- Descriptive `alt` text on every image
- Material Symbols used decoratively only (not as labels)
- Smooth-scroll TOC with `scroll-margin-top` offset for the fixed nav

Lighthouse routinely hits 95+ across the board on desktop. If you spot anything that regresses — open an issue.

---

## Contact

- 🌐 **Site** — [thomasshelby.dev](https://thomasshelby.dev/)
- 💻 **GitHub (primary)** — [@dorisa74964](https://github.com/dorisa74964)
- 🔁 **GitHub (mirror)** — [@dorsia74964](https://github.com/dorsia74964)
- 💼 **LinkedIn** — [in/dorisa74964](https://www.linkedin.com/in/dorisa74964)
- 📄 **Reports archive** — [github.com/dorisa74964/Reports](https://github.com/dorisa74964/Reports)

If you want to chat about red-team work, a pentest engagement, or just ask how I rooted KGF — my DMs on LinkedIn are open. I reply faster there than anywhere else.

---

<p align="center">
  <sub>© 2026 Vikram / Thomas_Shelby — All writeups &amp; posts are my own work.<br/>
  Built with care in Bangalore, India. 🇮🇳</sub>
</p>
