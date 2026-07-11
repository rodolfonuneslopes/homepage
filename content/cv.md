# Rodolfo Lopes | Curriculum Vitae
## Personal data
- Full name: Rodolfo Pais Nunes Lopes
- E-mail: [rodolfo@nuneslopes.org](mailto:rodolfo@nuneslopes.org)
- Linkedin: [linkedin.com/in/rodolfonuneslopes/](https://www.linkedin.com/in/rodolfonuneslopes/) 
- GitHub: [github.com/rodolfonuneslopes](https://github.com/rodolfonuneslopes)
- Website: [nuneslopes.org](https://nuneslopes.org)
## Projects
Besides some brief exercises and experiments (all of them public in my GitHub page), the main projects are a home lab and two webapps (both publicly exposed).
### Homelab
It is the most important element of my portfolio. It is a self-hosted Kubernetes cluster (k3s) that serves 3 public apps (2 of them with authentication). It is fully managed through GitOps, and the code is publicly available in a [GitHub repository](https://github.com/rodolfonuneslopes/homelab-k3s). Its main features are:
- FluxCD for GitOps
- SOPS for cryptography
- Renovate + CronJob for automatic dependency updates 
- Traefik for ingress
- Prometheus/Grafana for observability
- Security: workloads are limited to a non-root user with a dedicated filesystem, secrets are encrypted with SOPS, public exposure is done via CloudFlare Tunnel
### Webapp `fogos`
It is a simple SPA ([publicly exposed](https://fogos.nuneslopes.org) through the homelab) that shows live information about wildfires in Portugal. Besides some utility it may have, it represents the full path from commit to production: 
1. I write the [code](https://github.com/rodolfonuneslopes/fogos)
2. The container image is built and published in GHCR by GitActions
3. Renovate creates a Pull Request for the change
4. I review and approve the change
5. The new version is served.
### Webapp `blog`
It's my [personal blog](https://blog.nuneslopes.org) (implementation details in the [about page](https://blog.nuneslopes.org/about/)), where I document the implementation of my projects. Its relevance for DevOps has to do with the pipeline for content writing and publishing: 
1. I write a note in Obsidian and set `draft: false` in the frontmatter
2. Obsidian automatically pushes to the `blog-posts` [repository](https://github.com/rodolfonuneslopes/blog-posts)
3. GitActions (using `rsync`) filter the files by `draft: false` and pushes to the `blog` [repository](https://github.com/rodolfonuneslopes/blog)
4. The push triggers Vercel's Git integration to build and deploy the app with the new posts
5. The [Gitbook page](https://rodolfonuneslopes.gitbook.io/blog-posts) of the `blog-posts` repository is also updated
## Experience
### Technical Consultant
Bridge351 @ Cyberinspect (NOS SGPS) | February 2025 > present
- **Created a pipeline** to get OWASP SAMM v2 assessments from customers and generate documentation. Instead of filling a tedious XLSX template, the customer would answer to an optimized web survey. From our internal side, the documentation was automatically created.
 - **Created a malware testing environment** with three layers (OS > KVM > Nested Virtualization with Kata), a Node dummy app to trigger the malware, and the malware itself. It was meant to measure the effects of a classic recursive zip bomb in terms of CPU consumption, RAM and storage.
 - **Created a PoC for a platform to monitor breach data and to produce notifications** that consumes data from the [Have I Been Pwned (HIBP)](https://haveibeenpwned.com/) API and sends notifications to the service subscribers. It was adopted for further development and turned into a NOS product ("ID Watch").
 - **Created a PoC for an API-first, event-driven, Domain Reconnaissance Pipeline** that accepts a domain name and fans out work through RabbitMQ to a set of containerized workers. The system collects data from the targets and produces a structured report covering subdomain exposure, CMS/technology fingerprinting, and known vulnerabilities. It was adopted for further development and it's still under development.
 - **Reproduced the exploitation of the vulnerabilities** that were found by the NOS Offensive Security team while testing Cyberinspect's main application. All exploits were validated and documented, and I've also found more vulnerabilities.
 - **Tested AI-powered offensive tools**, specifically open-source projects like [Cybersecurity AI (CAI)](https://github.com/aliasrobotics/CAI) and [Strix](https://github.com/usestrix/strix), with the purpose to update our team knowledge about AI in cybersecurity.
 - **Created assessments to determine cybersecurity compliance obligations**, specifically for the Portuguese certification framework (QNRCS). The assessments weren't implemented, because, meanwhile, the framework was deeply upgraded by new legal obligations. 
### Teaching Assistant (Cybersecurity)
Code for All | September 2023 > February 2025
- **Designed and deployed intentionally vulnerable environments in AWS**, so that students can perform the bootcamp's final project (a complete Penetration Test). These environments were implemented in the company
- **Produced educational materials**, such as contents for lectures, slidedecks and practical exercises (infrastructure and scripting) for the cybersecurity operations bootcamp. These materials were implemented in the company
- **Delivered lectures** on Operating Systems (mainly Linux), networking, and cybersecurity operations. The feedback from the students was always excellent
- **Helped students to troubleshoot** errors and misconfigurations that interrupt and suspend the flow of an exercise. The feedback from the students was always excellent
### Teaching Assistant (Full-Stack Development)
Code for All | January > September 2023
- **Delivered lectures** on Object-Oriented Programming and Software Development in Java. The feedback from the students was always excellent
- **Helped students to debug** errors and misconfigurations that interrupt and suspend the flow of a coding exercise. The feedback from the students was always excellent.
### Professor of Philosophy
Universidade de Brasília | 2015 > 2022
- Teached Ancient Greek Philosophy
- Supervised master and doctoral research projects 
- Published books and scientific articles
- Edited a scientific journal
- Managed a post-graduate programme in Metaphysics
### Doctoral Researcher
Fundação para a Ciência e a Tecnologia | 2009 > 2014
- Developed and implemented a research project on Plato's philosophy
- Presented current research in conferences
### Junior Researcher
Fundação para a Ciência e a Tecnologia | 2006 > 2009
- Assisted senior researchers
- Implemented a fully digital scientific publisher
- Implemented an e-learning master programme on Classics
## Education
### Academic
- **PhD in Poetics and Hermeneutics** | Universidade de Coimbra | 2009-2014
- **Master in Classics** | Universidade de Coimbra | 2006-2009
- **Bachelor in Portuguese and Classics** | Universidade de Coimbra | 2002-2006
### Non-academic
- **Cybersecurity Operations Bootcamp** | Code for All | September 2023 > February 2024
- **Full-Stack Development Bootcamp** | Code for All | September > December 2022
## Professional Development
- **Roteiro NIS 2** | Centro Nacional de Cibersegurança / Instituto Politécnico da Guarda | 2026 (7h)
- **Diploma in ISO 27001:2022 - Information Security Management System (ISMS)** | Alison | 2025 (20h)
- **OSINT Workshop** | The Cyber Institute | 2025 (3.5h)
- **Open-source Intelligence** | The Basel Institute on Governance | 2025 (5h)
- **Ciberdefesa e Princípios Legislativos** | Centro Nacional de Cibersegurança / Instituto Politécnico de Viseu | 2025 (35h / 2 ECTS)
- **PCEP – Certified Entry-Level Python Programmer** | Python Institute | 2021
- **System Administration and IT Infrastructure Services** | Google | 2019 (23h)
- **Google IT Support Certificate** | Google | 2019 (120h)
## Language Skills
### Human Languages
- **Portuguese**: native
- **English** ●●●●●
- **Spanish** ●●●●○
- **Italian** ●●●○○
- **French** ●●○○○
### Programming Languages
- **Java** ●●●●○
- **Python** ●●●●○
- **JavaScript/TypeScript** ●●●●○
- **Bash** ●●●●○
- **Go** ●●○○○
- **Powershell** ●●○○○