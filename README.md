<h1 align="center">Th0mas_Sh316y — Security Engineer Portfolio</h1>

<p align="center">
  <em>Penetration testing · Red teaming · CTF writeups · Malware research</em><br/>
  <sub>Built &amp; maintained by <a href="https://github.com/dorisa74964">@dorisa74964</a> · mirror: <a href="https://github.com/dorsia74964">@dorsia74964</a></sub>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img alt="Static Site" src="https://img.shields.io/badge/Build-Static%20%2F%20No%20Deps-0a0a0a?style=flat-square"/>
</p>

---

## About

Hey — I'm **Th0mas_Sh316y**. I've spent the last three years doing offensive security: black-box, grey-box, and white-box pentesting, Active Directory attacks, web-app exploitation, and the occasional malware deep-dive when something old and weird catches my attention (the 1986 Brain virus post in `/blog` started exactly that way).

This repo is the source for [**dorsiawave.dorsia74964.workers.dev**](https://dorsiawave.dorsia74964.workers.dev) — a hand-coded static site. No framework, no build step, no tracking. Every page is a single HTML file you can open in a browser and read. I wanted the code to be as honest as the writeups.

Three entry points:

- 🏠 **Home** → hero, capabilities, pentest projects → [`index.html`](https://dorsiawave.dorsia74964.workers.dev/)
- 📝 **Blog** → long-form malware &amp; security research → [`blog.html`](https://dorsiawave.dorsia74964.workers.dev/blog)
- 🎯 **CTF Writeups** → rooted machines, step-by-step → [`ctf.html`](https://dorsiawave.dorsia74964.workers.dev/ctf)

---

## Highlighted posts

| Post | Category | Status |
|---|---|---|
| [The Brain Virus (1986): Two Brothers, Lahore, and the First PC Virus](https://dorsiawave.dorsia74964.workers.dev/blog-worlds-first-virus) | Malware history · Case study | Published |
| _More malware &amp; red-team posts in progress_ | — | Queued |

---

## Pentest assessments

Three recent engagements — full PDF reports on my [Reports repo](https://github.com/dorisa74964/Reports):

| Project | Type | Difficulty | What it tested |
|---|---|---|---|
| [Blinders](https://dorsiawave.dorsia74964.workers.dev/post-blinders) | Black box | Medium | OSINT → credential reuse → privesc |
| [Demon](https://dorsiawave.dorsia74964.workers.dev/post-demon) | Grey box | Hard | Vhost discovery, Jenkins RCE, sudo misconfig, rbash escape |
| [KGF](https://dorsiawave.dorsia74964.workers.dev/post-kgf) | White box | Hard | SNMP enum, IMAPS creds, r-services pivot, dual-host root |
| [VulnCMS](https://dorsiawave.dorsia74964.workers.dev/post-vulncms) | VulnHub | Medium | Drupalgeddon2 RCE, journalctl GTFObins |

---
## CTF machines — UTM virtualization guide

A lot of people ask me how I run my CTF boxes locally on Apple Silicon without dragging a full VMware or VirtualBox install onto the machine. Short answer: **UTM**. It's the free QEMU-based virtualizer for macOS / iPadOS, and once you get the hang of it, it's honestly the cleanest way to spin up a vulnerable VM for practice.

Instead of rewriting everything here, I put together a small walk-through site covering the setup, network modes, and the gotchas I hit early on:

**📖 Guide:** [utm.dorisa74964.workers.dev](https://utm.dorisa74964.workers.dev/)

Give it a read before you attempt any of the writeups in [`CTF's`](https://dorsiawave.dorsia74964.workers.dev/ctf) — a lot of the "why can't I reach the box" questions I get are just network-mode issues the guide already answers.

> ⚠️ Anything you boot in a CTF context is intentionally vulnerable. Keep it on a host-only / NAT interface. Don't bridge it to your LAN and definitely don't expose it to the open internet.
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
