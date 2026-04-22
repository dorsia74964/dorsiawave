<!--
  README.md — Th0mas_Sh316y Security Engineer Portfolio
  GitHub: dorisa74964 · Mirror: dorsia74964
-->

<h1 align="center">Th0mas_Sh316y — Security Engineer Portfolio</h1>

<p align="center">
  <em>Penetration testing · Red teaming · CTF writeups · Malware research</em><br/>
  <sub>Built &amp; maintained by <a href="https://github.com/dorisa74964">@dorisa74964</a> · mirror: <a href="https://github.com/dorsia74964">@dorsia74964</a></sub>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img alt="Static Site" src="https://img.shields.io/badge/Build-Static%20%2F%20No%20Deps-0a0a0a?style=flat-square"/>
  <img alt="SEO" src="https://img.shields.io/badge/SEO-Optimized-3366ff?style=flat-square"/>
</p>

---

## About

Hey — I'm **Th0mas_Sh316y**. I've spent the last three years doing offensive security: black-box, grey-box, and white-box pentesting, Active Directory attacks, web-app exploitation, and the occasional malware deep-dive when something old and weird catches my attention (the 1986 Brain virus post in `/blog` started exactly that way).

This repo is the source for [**dorsiawave.dorsia74964.workers.dev**](https://dorsiawave.dorsia74964.workers.dev) — a hand-coded static site. No framework, no build step, no tracking. Every page is a single HTML file you can open in a browser and read. I wanted the code to be as honest as the writeups.

Three entry points:

- 🏠 **Home** → hero, capabilities, pentest projects → [`index.html`](./index.html)
- 📝 **Blog** → long-form malware &amp; security research → [`blog.html`](./blog.html)
- 🎯 **CTF Writeups** → rooted machines, step-by-step → [`ctf.html`](./ctf.html)

---

## Highlighted posts

| Post | Category | Status |
|---|---|---|
| [The Brain Virus (1986): Two Brothers, Lahore, and the First PC Virus](./blog-worlds-first-virus.html) | Malware history · Case study | Published |
| _More malware &amp; red-team posts in progress_ | — | Queued |

---

## Pentest assessments

Three recent engagements — full PDF reports on my [Reports repo](https://github.com/dorisa74964/Reports):

| Project | Type | Difficulty | What it tested |
|---|---|---|---|
| [Blinders](./post-blinders.html) | Black box | Medium | OSINT → credential reuse → privesc |
| [Demon](./post-demon.html) | Grey box | Hard | Vhost discovery, Jenkins RCE, sudo misconfig, rbash escape |
| [KGF](./post-kgf.html) | White box | Hard | SNMP enum, IMAPS creds, r-services pivot, dual-host root |
| [VulnCMS](./post-vulncms.html) | VulnHub | Medium | Drupalgeddon2 RCE, journalctl GTFObins |

---

## CTF machines — UTM virtualization

I package a couple of my custom CTF boxes as **UTM** virtual machines so you can run the exact same target I rooted. UTM is the free QEMU-based virtualizer for macOS / iPadOS; on Windows/Linux the `.utm` bundle also works with QEMU directly.

**Download the VM image:** [utm.dorisa74964.workers.dev](https://utm.dorisa74964.workers.dev/)

Once imported, pair the VM with its matching writeup in [`/ctf.html`](./ctf.html). Flags are intentional; passwords in writeups are redacted as `[REDACTED]` per my disclosure policy.

> ⚠️ These VMs are intentionally vulnerable. **Do not expose them to the open internet.** Keep them on a host-only / NAT interface.

---

## Running the site locally

No build step. Pick whichever you have handy:

```bash
# Python (ships with macOS / most Linux)
python3 -m http.server 8080

# Node
npx serve .
```

Then open <http://localhost:8080>.

---

## Contact

- 🌐 **Site** — [dorsiawave.dorsia74964.workers.dev](https://dorsiawave.dorsia74964.workers.dev)
- 💻 **GitHub** — [@dorisa74964](https://github.com/dorisa74964) · mirror [@dorsia74964](https://github.com/dorsia74964)
- 💼 **LinkedIn** — [in/dorisa74964](https://www.linkedin.com/in/dorisa74964)
- 📄 **Reports archive** — [github.com/dorisa74964/Reports](https://github.com/dorisa74964/Reports)

DMs on LinkedIn are open — red-team work, pentest engagements, or if you just want to ask how I rooted KGF.

---

<p align="center">
  <sub>© 2026 Th0mas_Sh316y — All writeups &amp; posts are my own work.</sub>
</p>
