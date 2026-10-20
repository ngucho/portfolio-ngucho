(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  // EmailJS configuration (public key + service/template from the previous site).
  var EMAILJS = { publicKey: "lRaFWw5wp2ZeADaJP", service: "jordan-perso-gmail", template: "template_vf9koch" };

  /* ------------------------------------------------------------------
   * i18n
   * ------------------------------------------------------------------ */
  var UI = {
    en: {
      skip: "Skip to content",
      "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects", "nav.skills": "Skills", "nav.opensource": "Open source", "nav.research": "Research", "nav.contact": "Let's talk",
      "pub.title": "Research & publications", "pub.sub": "Before industry: theoretical physics, epidemiological modelling and applied machine learning. Published as Yvan Jordan Ngucho Mbeutchou.",
      "hero.available": "Open to Data/AI lead roles — Paris, West Africa or remote",
      "hero.hi": "Hi, I'm",
      "hero.lead": "I design, ship and govern end-to-end Data & AI systems — from real-time anomaly detection on aircraft-engine lines at Safran to GenAI medical scribes and voice AI for African media.",
      "hero.cta1": "Explore my work", "hero.cta2": "Get in touch", "hero.cv": "Download CV",
      "about.title": "About",
      "about.p1": "Data Scientist & AI Project Lead with 4+ years designing, deploying and governing Data/AI solutions end to end — and an entrepreneur who co-founded two startups.",
      "about.p2": "At Safran Aircraft Engines I lead a team of four engineers and own an architecture that goes from high-frequency sensor data to real-time anomaly detection, digital twins and the dashboards people actually use. Models ship through CI/CD and are monitored around the clock.",
      "about.p3": "Outside Safran I build products where AI meets real needs: Docfira's Scribe drafts a full consultation report in about 30 seconds; at Scoop Afrique I bring speech AI to a West African media with a 1.8M audience; and I'm building Zephyru, a dating app driven by matching algorithms.",
      "about.p4": "My background — theoretical physics, applied mathematics, mechanics — means I like to understand the system before modelling it, then measure what the model changes.",
      "facts.base": "Based in", "facts.baseV": "Paris area · working with Abidjan",
      "facts.mobility": "Mobility", "facts.mobilityV": "Open to Abidjan / West Africa, or fully remote",
      "cal.book": "Book a call", "cal.book30": "Book a 30-min call", "cs.outcome": "Outcome",
      "facts.edu": "Education", "facts.cert": "Latest certification", "facts.lang": "Languages", "facts.langV": "French (native) · English (fluent)",
      "principles.title": "How I work",
      "principles.1t": "Start from the problem.", "principles.1": "Interviews, data audits and ROI before any model.",
      "principles.2t": "Ship, then measure.", "principles.2": "CI/CD, monitoring and clear KPIs from day one.",
      "principles.3t": "Own it end to end.", "principles.3": "Data, model, API, UI and the team around them.",
      "exp.title": "Experience", "exp.sub": "Industry R&D, startups I co-founded, and teaching.",
      "exp.all": "All", "exp.industry": "Industry", "exp.venture": "Ventures", "exp.teaching": "Teaching",
      "exp.more": "Details",
      "projects.title": "Selected projects",
      "projects.sub": "Click any project for the full case study: problem, approach, architecture, impact and stack.",
      "projects.featured": "Featured", "projects.open": "Read case study",
      "cs.role": "My role", "cs.problem": "The problem", "cs.solution": "What I built", "cs.pipeline": "Architecture / pipeline",
      "cs.highlights": "Highlights", "cs.impact": "Impact", "cs.stack": "Stack", "cs.links": "Links", "cs.prev": "Previous", "cs.next": "Next",
      "cs.talk": "Discuss a similar project",
      "skills.title": "Skills & toolbox", "skills.sub": "Hover a skill marked with a dot to see the projects where I used it.",
      "skills.usedIn": "Used in: ",
      "edu.title": "Education", "cert.title": "Certifications",
      "os.title": "On GitHub", "os.sub": "Live from", "os.fork": "fork", "os.updated": "updated",
      "contact.title": "Let's build something that works in production.",
      "contact.sub": "Hiring for a Data/AI lead role, need a freelancer for an AI or data project, or want to talk health-tech in Africa? I'm open to relocating to Abidjan or elsewhere in West Africa, or working fully remote. I usually reply within 48 hours.",
      "form.t1": "Job opportunity", "form.t2": "Consulting", "form.t3": "Partnership", "form.t4": "Other",
      "form.name": "Your name", "form.email": "Your email", "form.subject": "Subject", "form.message": "Message", "form.send": "Send message",
      "form.sending": "Sending…", "form.ok": "Thanks! Your message is on its way — I'll get back to you soon.",
      "form.invalid": "Please fill in every field with a valid email.",
      "form.fallback": "The form couldn't send, so I've opened your email app with the message pre-filled.",
      "copied": "Email copied to clipboard",
      "footer.note": "Designed & built by hand — no framework, just HTML, CSS & JS."
    },
    fr: {
      skip: "Aller au contenu",
      "nav.about": "Profil", "nav.experience": "Parcours", "nav.projects": "Projets", "nav.skills": "Compétences", "nav.opensource": "Open source", "nav.research": "Recherche", "nav.contact": "Me contacter",
      "pub.title": "Recherche & publications", "pub.sub": "Avant l'industrie : physique théorique, modélisation épidémiologique et machine learning appliqué. Publié sous le nom de Yvan Jordan Ngucho Mbeutchou.",
      "hero.available": "Ouvert aux postes de lead Data/IA — Paris, Afrique de l'Ouest ou remote",
      "hero.hi": "Bonjour, je suis",
      "hero.lead": "Je conçois, déploie et gouverne des systèmes Data & IA de bout en bout — de la détection d'anomalies temps réel sur les lignes moteurs de Safran aux scribes médicaux GenAI et à l'IA vocale pour les médias africains.",
      "hero.cta1": "Voir mes projets", "hero.cta2": "Me contacter", "hero.cv": "Télécharger le CV",
      "about.title": "Profil",
      "about.p1": "Data Scientist & Chef de projet IA avec plus de 4 ans d'expérience dans la conception, le déploiement et la gouvernance de solutions Data/IA de bout en bout — et entrepreneur, co-fondateur de deux startups.",
      "about.p2": "Chez Safran Aircraft Engines, j'encadre une équipe de quatre ingénieurs et porte une architecture qui va des données capteurs haute fréquence à la détection d'anomalies temps réel, aux jumeaux numériques et aux dashboards réellement utilisés. Les modèles sont livrés en CI/CD et supervisés 24/7.",
      "about.p3": "En parallèle, je construis des produits où l'IA répond à de vrais besoins : Scribe de Docfira rédige un compte rendu de consultation complet en 30 secondes environ ; chez Scoop Afrique, j'apporte l'IA vocale à un média ouest-africain de 1,8 M d'audience ; et je développe Zephyru, une application de rencontre pilotée par des algorithmes de matching.",
      "about.p4": "Mon parcours — physique théorique, mathématiques appliquées, mécanique — me pousse à comprendre le système avant de le modéliser, puis à mesurer ce que le modèle change.",
      "facts.base": "Basé à", "facts.baseV": "Région parisienne · en lien avec Abidjan",
      "facts.mobility": "Mobilité", "facts.mobilityV": "Ouvert à Abidjan / Afrique de l'Ouest, ou full remote",
      "cal.book": "Réserver un appel", "cal.book30": "Réserver un appel de 30 min", "cs.outcome": "Issue",
      "facts.edu": "Formation", "facts.cert": "Dernière certification", "facts.lang": "Langues", "facts.langV": "Français (natif) · Anglais (courant)",
      "principles.title": "Ma façon de travailler",
      "principles.1t": "Partir du problème.", "principles.1": "Entretiens, audit des données et ROI avant tout modèle.",
      "principles.2t": "Livrer, puis mesurer.", "principles.2": "CI/CD, monitoring et KPI clairs dès le premier jour.",
      "principles.3t": "Porter le tout.", "principles.3": "Données, modèle, API, interface et l'équipe autour.",
      "exp.title": "Parcours", "exp.sub": "R&D industrielle, startups co-fondées et enseignement.",
      "exp.all": "Tout", "exp.industry": "Industrie", "exp.venture": "Entrepreneuriat", "exp.teaching": "Enseignement",
      "exp.more": "Détails",
      "projects.title": "Projets choisis",
      "projects.sub": "Cliquez sur un projet pour l'étude de cas complète : problème, approche, architecture, impact et stack.",
      "projects.featured": "À la une", "projects.open": "Lire l'étude de cas",
      "cs.role": "Mon rôle", "cs.problem": "Le problème", "cs.solution": "Ce que j'ai construit", "cs.pipeline": "Architecture / pipeline",
      "cs.highlights": "Points clés", "cs.impact": "Impact", "cs.stack": "Stack", "cs.links": "Liens", "cs.prev": "Précédent", "cs.next": "Suivant",
      "cs.talk": "Parler d'un projet similaire",
      "skills.title": "Compétences & outils", "skills.sub": "Survolez une compétence marquée d'un point pour voir les projets où je l'ai utilisée.",
      "skills.usedIn": "Utilisé dans : ",
      "edu.title": "Formation", "cert.title": "Certifications",
      "os.title": "Sur GitHub", "os.sub": "En direct de", "os.fork": "fork", "os.updated": "mis à jour",
      "contact.title": "Construisons quelque chose qui tourne en production.",
      "contact.sub": "Vous recrutez un lead Data/IA, cherchez un freelance pour un projet IA ou data, ou voulez parler e-santé en Afrique ? Je suis ouvert à une relocalisation à Abidjan ou ailleurs en Afrique de l'Ouest, ou au full remote. Je réponds en général sous 48 h.",
      "form.t1": "Opportunité d'emploi", "form.t2": "Conseil", "form.t3": "Partenariat", "form.t4": "Autre",
      "form.name": "Votre nom", "form.email": "Votre email", "form.subject": "Objet", "form.message": "Message", "form.send": "Envoyer",
      "form.sending": "Envoi…", "form.ok": "Merci ! Votre message est parti — je reviens vers vous rapidement.",
      "form.invalid": "Merci de remplir tous les champs avec un email valide.",
      "form.fallback": "Le formulaire n'a pas pu envoyer : votre messagerie s'est ouverte avec le message pré-rempli.",
      "copied": "Email copié",
      "footer.note": "Conçu et codé à la main — sans framework, juste HTML, CSS & JS."
    }
  };

  var lang = root.getAttribute("lang") === "fr" ? "fr" : "en";
  function s(key) { return (UI[lang] && UI[lang][key]) || UI.en[key] || key; }
  function t(v) { return v && typeof v === "object" && !Array.isArray(v) ? (v[lang] || v.en) : v; }
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function picture(base, alt) {
    return '<picture><source srcset="' + base + '.webp" type="image/webp"><img src="' + base + '.jpg" alt="' + esc(alt) + '" loading="lazy" decoding="async"></picture>';
  }
  function icon(name, cls) { return '<svg class="ico' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function applyStaticI18n() {
    root.setAttribute("lang", lang);
    $$("[data-i18n]").forEach(function (el) { el.textContent = s(el.getAttribute("data-i18n")); });
    $("#langLabel").textContent = lang === "en" ? "FR" : "EN";
    $("#langToggle").setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
  }

  /* ------------------------------------------------------------------
   * Renderers
   * ------------------------------------------------------------------ */
  function renderStats() {
    $("#stats").innerHTML = D.stats.map(function (st) {
      return '<div class="stat reveal"><div class="stat-num"><span class="count" data-to="' + st.value + '" data-dec="' + (st.decimals || 0) + '">' + (lang === "fr" ? String(st.value).replace(".", ",") : st.value) + '</span>' + esc(st.suffix) +
        '</div><span class="stat-label">' + esc(t(st.label)) + "</span></div>";
    }).join("");
  }

  var expFilter = "all";
  function renderTimeline() {
    $("#timeline").innerHTML = D.experience.map(function (x, i) {
      var open = i < 2 ? " open" : "";
      var hidden = expFilter !== "all" && x.type !== expFilter ? " hidden" : "";
      return '<li class="tl-item reveal' + open + hidden + '" data-type="' + x.type + '">' +
        '<div class="tl-card"><button class="tl-head" type="button" aria-expanded="' + (open ? "true" : "false") + '">' +
        '<span class="tl-org">' + esc(x.org) + '</span>' +
        '<span class="tl-meta">' + esc(t(x.period)) + "<br>" + esc(x.place) + "</span>" +
        '<span class="tl-role">' + esc(t(x.role)) + "</span>" +
        '<span class="tl-toggle">' + s("exp.more") + icon("arrow") + "</span>" +
        "</button>" +
        '<div class="tl-body"><div><ul>' + t(x.points).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></div>" +
        "</div></li>";
    }).join("");
  }

  var projFilter = "all";
  function projTitle(p) { return t(p.title); }
  function renderFilters() {
    $("#filters").innerHTML = Object.keys(D.categories).map(function (k) {
      var n = k === "all" ? D.projects.length : D.projects.filter(function (p) { return p.tags.indexOf(k) > -1; }).length;
      return '<button class="chip' + (k === projFilter ? " active" : "") + '" type="button" data-filter="' + k + '" aria-pressed="' + (k === projFilter) + '">' +
        esc(t(D.categories[k])) + '<span class="count">' + n + "</span></button>";
    }).join("");
  }
  function renderProjects() {
    $("#projectsGrid").innerHTML = D.projects.map(function (p) {
      var hidden = projFilter !== "all" && p.tags.indexOf(projFilter) === -1 ? " is-hidden" : "";
      return '<article class="project reveal' + (p.featured ? " featured" : "") + hidden + '" role="button" tabindex="0" data-id="' + p.id + '" style="--h:' + p.hue + '" aria-label="' + esc(projTitle(p) + " — " + s("projects.open")) + '">' +
        '<div class="project-visual' + (p.image ? " has-image" : "") + '">' + (p.image ? picture(p.image, "") : icon(p.icon)) +
        '<span class="project-status">' + esc(t(p.status)) + "</span>" +
        (p.featured ? '<span class="project-star">' + s("projects.featured") + "</span>" : "") + "</div>" +
        '<div class="project-body">' +
        '<span class="project-org">' + esc(t(p.org)) + " · " + esc(p.period) + "</span>" +
        "<h3>" + esc(projTitle(p)) + "</h3>" +
        "<p>" + esc(t(p.tagline)) + "</p>" +
        '<div class="tags">' + p.stack.slice(0, 4).map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") +
        (p.stack.length > 4 ? '<span class="tag">+' + (p.stack.length - 4) + "</span>" : "") + "</div>" +
        '<span class="project-more">' + s("projects.open") + icon("arrow") + "</span>" +
        "</div><span class=\"project-shine\"></span></article>";
    }).join("");
    bindTilt($$(".project"), 6);
  }

  function tokens(skill) {
    return skill.split(/[·/(),]| and /).map(function (x) { return x.trim().toLowerCase(); }).filter(function (x) { return x.length > 1; });
  }
  function projectsUsing(skill) {
    var toks = tokens(skill);
    return D.projects.filter(function (p) {
      return p.stack.some(function (st) {
        var a = st.toLowerCase();
        return toks.some(function (tk) { return a === tk || (tk.length > 3 && (a.indexOf(tk) > -1 || tk.indexOf(a) > -1)); });
      });
    });
  }
  function renderSkills() {
    $("#skillsGrid").innerHTML = D.skills.map(function (g) {
      return '<div class="skill-card reveal"><h3><span class="ico-wrap">' + icon(g.icon) + "</span>" + esc(t(g.title)) + "</h3>" +
        '<div class="skill-list">' + g.items.map(function (it) {
          var used = projectsUsing(it);
          if (!used.length) return '<span class="skill">' + esc(it) + "</span>";
          var tip = s("skills.usedIn") + used.map(projTitle).join(", ");
          return '<span class="skill linked" tabindex="0" aria-label="' + esc(it + " — " + tip) + '">' + esc(it) +
            '<span class="skill-tip" aria-hidden="true">' + esc(tip) + "</span></span>";
        }).join("") + "</div></div>";
    }).join("");
    $("#pubList").innerHTML = (D.publications || []).map(function (p) {
      return '<li class="pub reveal"><span class="pub-year">' + esc(p.year) + '</span><div class="pub-body">' +
        '<span class="pub-type">' + esc(t(p.type)) + "</span>" +
        "<h3>" + esc(t(p.title)) + "</h3>" +
        '<p class="pub-venue">' + esc(t(p.venue)) + "</p>" +
        '<p class="pub-authors">' + esc(p.authors).replace("Ngucho Mbeutchou", "<b>Ngucho Mbeutchou</b>") + "</p>" +
        '<p class="pub-note">' + esc(t(p.note)) + "</p>" +
        '<div class="pub-links">' + p.links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + icon("external") + "</a>"; }).join("") + "</div>" +
        "</div></li>";
    }).join("");
    $("#eduList").innerHTML = D.education.map(function (e) {
      return "<li><b>" + esc(e.school) + "</b><em>" + esc(e.year) + "</em><span>" + esc(t(e.degree)) + "</span></li>";
    }).join("");
    $("#certList").innerHTML = D.certifications.map(function (c) {
      return "<li><b>" + esc(t(c.name)) + "</b><em>" + esc(c.year) + "</em><span>" + esc(c.issuer) + "</span></li>";
    }).join("");
  }

  /* GitHub repos: fetched live, with a static fallback when the API is unavailable/rate-limited. */
  var LANG_COLORS = { TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5", HTML: "#e34c26", Shell: "#89e051", CSS: "#563d7c" };
  var FALLBACK_REPOS = [
    { name: "Jenkins-Analyzer", description: "Visualise, forecast and rebalance Jenkins load — Angular 20, no backend.", language: "TypeScript", fork: false, stargazers_count: 0, html_url: "https://github.com/ngucho/Jenkins-Analyzer", pushed_at: "2026-10-19" },
    { name: "hdcorporate", description: "Showcase website for a business lawyer — hdcorporate.fr", language: "TypeScript", fork: false, stargazers_count: 0, html_url: "https://github.com/ngucho/hdcorporate", pushed_at: "2026-05-03" },
    { name: "InceptionTime-Pytorch", description: "A simple adaptation of the InceptionTime network (Ismail, 2020) in PyTorch", language: "Python", fork: false, stargazers_count: 0, html_url: "https://github.com/ngucho/InceptionTime-Pytorch", pushed_at: "2022-09-11" },
    { name: "portfolio-ngucho", description: "This website.", language: "HTML", fork: false, stargazers_count: 0, html_url: "https://github.com/ngucho/portfolio-ngucho", pushed_at: "2026-10-20" }
  ];
  var repos = null;
  function renderRepos() {
    // Only show original work, not forks of other people's projects.
    var list = (repos || FALLBACK_REPOS).filter(function (r) { return !r.fork; }).sort(function (a, b) {
      return new Date(b.pushed_at) - new Date(a.pushed_at);
    }).slice(0, 6);
    var fmt;
    try { fmt = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { month: "short", year: "numeric" }); } catch (e) { fmt = null; }
    $("#repoGrid").innerHTML = list.map(function (r) {
      var d = new Date(r.pushed_at);
      return '<a class="repo reveal in" href="' + esc(r.html_url) + '" target="_blank" rel="noopener">' +
        '<div class="repo-top">' + icon("github") + "<span>" + esc(r.name) + "</span>" + (r.fork ? '<span class="repo-fork">' + s("os.fork") + "</span>" : "") + "</div>" +
        "<p>" + esc(r.description || "—") + "</p>" +
        '<div class="repo-meta">' + (r.language ? '<span><i class="lang-dot" style="background:' + (LANG_COLORS[r.language] || "var(--accent)") + '"></i>' + esc(r.language) + "</span>" : "") +
        "<span>★ " + (r.stargazers_count || 0) + "</span>" +
        (fmt && !isNaN(d) ? "<span>" + s("os.updated") + " " + esc(fmt.format(d)) + "</span>" : "") + "</div></a>";
    }).join("");
  }
  function loadRepos() {
    if (!window.fetch) return;
    fetch("https://api.github.com/users/" + D.profile.githubUser + "/repos?per_page=100&sort=pushed")
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) { if (Array.isArray(data) && data.length) { repos = data; renderRepos(); } })
      .catch(function () { /* keep fallback */ });
  }

  // Calendly buttons stay hidden until profile.calendly is set in data.js.
  function setupCalendly() {
    var url = D.profile.calendly;
    $$("[data-calendly]").forEach(function (el) {
      if (!url) { el.hidden = true; return; }
      el.hidden = false;
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    });
  }

  function renderAll() {
    applyStaticI18n();
    renderStats();
    renderTimeline();
    renderFilters();
    renderProjects();
    renderSkills();
    renderRepos();
    setupCalendly();
    observeReveals();
    observeCounters();
    restartTyping();
    if (currentProject) openProject(currentProject, true);
  }

  /* ------------------------------------------------------------------
   * Project case-study modal (deep-linkable via #project/<id>)
   * ------------------------------------------------------------------ */
  var modal = $("#modal");
  var currentProject = null;
  var lastFocus = null;

  function visibleProjects() {
    return D.projects.filter(function (p) { return projFilter === "all" || p.tags.indexOf(projFilter) > -1; });
  }

  function openProject(id, silent) {
    var p = D.projects.find(function (x) { return x.id === id; });
    if (!p) return;
    var list = visibleProjects();
    if (list.indexOf(p) === -1) list = D.projects;
    var idx = list.indexOf(p);
    var prev = list[(idx - 1 + list.length) % list.length];
    var next = list[(idx + 1) % list.length];
    currentProject = id;

    var pipeline = p.pipeline.map(function (step, i) {
      var delay = "animation-delay:" + (i * 90) + "ms";
      return (i ? '<span class="pipe-arrow" style="' + delay + '">' + icon("arrow") + "</span>" : "") +
        '<span class="pipe-step" style="' + delay + '">' + esc(step) + "</span>";
    }).join("");
    var metrics = p.metrics.length ? '<section class="cs-block"><h4>' + s("cs.impact") + '</h4><div class="cs-metrics">' +
      p.metrics.map(function (m) { return '<div class="cs-metric"><b>' + esc(m.value) + "</b><span>" + esc(t(m.label)) + "</span></div>"; }).join("") +
      "</div></section>" : "";
    var links = '<div class="cs-links">' +
      p.links.map(function (l) { return '<a class="btn btn-ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + icon(l.label === "GitHub" ? "github" : "external") + esc(l.label) + "</a>"; }).join("") +
      (D.profile.calendly ? '<a class="btn btn-ghost" href="' + esc(D.profile.calendly) + '" target="_blank" rel="noopener">' + icon("calendar") + s("cal.book") + "</a>" : "") +
      '<a class="btn btn-primary" href="#contact" data-close-go>' + icon("mail") + s("cs.talk") + "</a></div>";

    $("#modalBody").innerHTML =
      '<header class="cs-hero" style="--h:' + p.hue + '">' +
      '<div class="cs-meta"><span>' + esc(t(p.org)) + "</span><span>" + esc(p.period) + "</span><span>" + esc(t(p.status)) + "</span></div>" +
      '<h2 id="modalTitle">' + esc(projTitle(p)) + "</h2><p>" + esc(t(p.tagline)) + "</p></header>" +
      '<div class="cs-content">' +
      (p.image ? '<figure class="cs-shot">' + picture(p.image, projTitle(p) + " — screenshot") + "</figure>" : "") +
      (p.outcome ? '<section class="cs-block cs-outcome"><h4>' + s("cs.outcome") + "</h4><p>" + esc(t(p.outcome)) + "</p></section>" : "") +
      '<div class="cs-two"><section class="cs-block"><h4>' + s("cs.problem") + "</h4><p>" + esc(t(p.problem)) + "</p></section>" +
      '<section class="cs-block"><h4>' + s("cs.role") + "</h4><p>" + esc(t(p.role)) + "</p></section></div>" +
      '<section class="cs-block"><h4>' + s("cs.solution") + "</h4><p>" + esc(t(p.solution)) + "</p></section>" +
      '<section class="cs-block"><h4>' + s("cs.pipeline") + '</h4><div class="pipeline">' + pipeline + "</div></section>" +
      metrics +
      '<section class="cs-block"><h4>' + s("cs.highlights") + '</h4><ul class="cs-list">' + t(p.highlights).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul></section>" +
      '<section class="cs-block"><h4>' + s("cs.stack") + '</h4><div class="tags">' + p.stack.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div></section>" +
      links +
      '<nav class="cs-nav"><button class="prev" type="button" data-go="' + prev.id + '">' + icon("arrow") + s("cs.prev") + " · " + esc(projTitle(prev)) + "</button>" +
      '<button class="next" type="button" data-go="' + next.id + '">' + esc(projTitle(next)) + " · " + s("cs.next") + icon("arrow") + "</button></nav>" +
      "</div>";

    if (!modal.classList.contains("open")) {
      lastFocus = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    var panel = $(".modal-panel", modal);
    panel.scrollTop = 0;
    if (!silent) panel.focus({ preventScroll: true });
    var hash = "#project/" + id;
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function closeProject(keepHash) {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentProject = null;
    if (!keepHash && location.hash.indexOf("#project/") === 0) history.replaceState(null, "", location.pathname + location.search + "#projects");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  modal.addEventListener("click", function (e) {
    var go = e.target.closest("[data-go]");
    if (go) { openProject(go.getAttribute("data-go")); return; }
    if (e.target.closest("[data-close-go]")) { closeProject(true); return; }
    if (e.target.closest("[data-close]")) closeProject();
  });
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeProject();
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      var btn = $(e.key === "ArrowRight" ? ".cs-nav .next" : ".cs-nav .prev", modal);
      if (btn && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) btn.click();
    }
    if (e.key === "Tab") {
      var f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', modal).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  function routeFromHash() {
    var m = location.hash.match(/^#project\/([\w-]+)/);
    if (m) openProject(m[1]); else closeProject(true);
  }
  window.addEventListener("hashchange", routeFromHash);

  /* ------------------------------------------------------------------
   * Event delegation for rendered content
   * ------------------------------------------------------------------ */
  document.addEventListener("click", function (e) {
    var card = e.target.closest(".project");
    if (card) { openProject(card.getAttribute("data-id")); return; }

    var f = e.target.closest("[data-filter]");
    if (f) {
      projFilter = f.getAttribute("data-filter");
      $$("#filters .chip").forEach(function (c) { var on = c === f; c.classList.toggle("active", on); c.setAttribute("aria-pressed", on); });
      $$(".project").forEach(function (el) {
        var p = D.projects.find(function (x) { return x.id === el.getAttribute("data-id"); });
        var show = projFilter === "all" || p.tags.indexOf(projFilter) > -1;
        el.classList.toggle("is-hidden", !show);
        if (show && !reduceMotion) { el.classList.remove("in"); void el.offsetWidth; el.classList.add("in"); }
      });
      return;
    }

    var ef = e.target.closest("[data-exp]");
    if (ef) {
      expFilter = ef.getAttribute("data-exp");
      $$("#expFilters .chip").forEach(function (c) { c.classList.toggle("active", c === ef); });
      $$(".tl-item").forEach(function (el) { el.classList.toggle("hidden", expFilter !== "all" && el.getAttribute("data-type") !== expFilter); });
      return;
    }

    var head = e.target.closest(".tl-head");
    if (head) {
      var item = head.closest(".tl-item");
      var open = item.classList.toggle("open");
      head.setAttribute("aria-expanded", open);
      return;
    }

    var copy = e.target.closest("[data-copy]");
    if (copy) {
      var val = copy.getAttribute("data-copy");
      var done = function () { toast(s("copied")); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(val).then(done, function () { location.href = "mailto:" + val; });
      else location.href = "mailto:" + val;
    }
  });

  document.addEventListener("keydown", function (e) {
    var card = e.target.closest && e.target.closest(".project");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(card.getAttribute("data-id")); }
  });

  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  /* ------------------------------------------------------------------
   * Theme & language
   * ------------------------------------------------------------------ */
  $("#themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    store("jn-theme", next);
  });
  $("#langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "fr" : "en";
    store("jn-lang", lang);
    renderAll();
  });

  /* ------------------------------------------------------------------
   * Nav: scrolled state, active link, mobile menu, progress bar
   * ------------------------------------------------------------------ */
  var nav = $("#nav"), progress = $("#progress"), navLinks = $("#navLinks"), menuBtn = $("#menuToggle");
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  menuBtn.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  if ("IntersectionObserver" in window) {
    var links = $$(".nav-links a");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (sec) { spy.observe(sec); });
  }

  /* ------------------------------------------------------------------
   * Reveal on scroll + counters
   * ------------------------------------------------------------------ */
  var revealObs = "IntersectionObserver" in window && !reduceMotion ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }) : null;
  function observeReveals() {
    $$(".reveal:not(.in)").forEach(function (el, i) {
      if (!revealObs) { el.classList.add("in"); return; }
      el.style.transitionDelay = (el.closest(".projects-grid, .skills-grid, .stats, .timeline") ? (i % 6) * 60 : 0) + "ms";
      revealObs.observe(el);
    });
  }

  function animateCount(el) {
    var to = +el.getAttribute("data-to"), dec = +el.getAttribute("data-dec") || 0;
    var fmt = function (v) { var x = v.toFixed(dec); return lang === "fr" ? x.replace(".", ",") : x; };
    if (reduceMotion) { el.textContent = fmt(to); return; }
    var start = performance.now(), dur = 1400;
    (function step(now) {
      var k = Math.min(1, (now - start) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    })(start);
  }
  function observeCounters() {
    var els = $$(".count[data-to]");
    if (!("IntersectionObserver" in window)) { els.forEach(animateCount); return; }
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { animateCount(en.target); o.unobserve(en.target); } });
    }, { threshold: 0.6 });
    els.forEach(function (el) { o.observe(el); });
  }

  /* ------------------------------------------------------------------
   * Typed roles + terminal
   * ------------------------------------------------------------------ */
  var typedEl = $("#typed"), typeTimer = null;
  function restartTyping() {
    clearTimeout(typeTimer);
    var roles = t(D.profile.roles), ri = 0, ci = 0, deleting = false;
    if (reduceMotion) { typedEl.textContent = roles[0]; return; }
    (function tick() {
      var word = roles[ri];
      ci += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, ci);
      var delay = deleting ? 40 : 85;
      if (!deleting && ci === word.length) { deleting = true; delay = 1600; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 300; }
      typeTimer = setTimeout(tick, delay);
    })();
  }

  var TERMINAL = [
    ['<span class="k">from</span> jordan <span class="k">import</span> Pipeline', 0],
    ['pipe = Pipeline(<span class="s">"etl"</span>, <span class="s">"tf"</span>, <span class="s">"api"</span>)', 0],
    ['pipe.deploy(monitoring=<span class="s">"24/7"</span>)', 0],
    ['<span class="c"># ✓ 5+ models in production</span>', 0],
    ['<span class="c"># ✓ anomaly score:</span> <span class="n">0.02</span> <span class="c">— all good</span>', 0]
  ];
  function runTerminal() {
    var el = $("#terminal");
    if (!el) return;
    if (reduceMotion) { el.innerHTML = TERMINAL.map(function (l) { return l[0]; }).join("\n"); return; }
    var line = 0;
    (function next() {
      el.innerHTML = TERMINAL.slice(0, line + 1).map(function (l) { return l[0]; }).join("\n");
      line++;
      if (line < TERMINAL.length) setTimeout(next, 650);
      else setTimeout(function () { line = 0; next(); }, 5000);
    })();
  }

  /* ------------------------------------------------------------------
   * Neural-network canvas in the hero
   * ------------------------------------------------------------------ */
  function neural() {
    var canvas = $("#neural");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W, H, nodes = [], mouse = { x: -9999, y: -9999 }, running = true, raf;
    function color(name) { return getComputedStyle(root).getPropertyValue(name).trim() || "#34e0c0"; }
    function resize() {
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(90, (W * H) / 16000));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8, p: Math.random() * Math.PI * 2 });
      }
    }
    function frame() {
      if (!running) return;
      var c1 = color("--accent"), c2 = color("--accent-2");
      ctx.clearRect(0, 0, W, H);
      var maxD = 130;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy; a.p += .03;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        var dxm = a.x - mouse.x, dym = a.y - mouse.y, dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 160) { a.x += dxm / dm * .8; a.y += dym / dm * .8; }
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.globalAlpha = (1 - d / maxD) * .35;
            ctx.strokeStyle = (i + j) % 3 ? c1 : c2;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.globalAlpha = .55 + Math.sin(a.p) * .3;
        ctx.fillStyle = i % 4 ? c1 : c2;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener("resize", function () { resize(); if (reduceMotion) drawStatic(); });
    canvas.parentElement.addEventListener("pointermove", function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9999; });
    function drawStatic() { running = true; frame(); running = false; cancelAnimationFrame(raf); }
    if (reduceMotion) { drawStatic(); return; }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        var vis = en[0].isIntersecting;
        if (vis && !running) { running = true; frame(); }
        else if (!vis) { running = false; cancelAnimationFrame(raf); }
      }).observe(canvas);
    }
    frame();
  }

  /* ------------------------------------------------------------------
   * Pointer effects: glow, tilt, magnetic buttons
   * ------------------------------------------------------------------ */
  function bindTilt(els, max) {
    if (!finePointer || reduceMotion) return;
    els.forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = "perspective(900px) rotateX(" + ((.5 - py) * max) + "deg) rotateY(" + ((px - .5) * max) + "deg) translateY(-4px)";
        el.style.setProperty("--mx", px * 100 + "%");
        el.style.setProperty("--my", py * 100 + "%");
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }
  function pointerFx() {
    if (!finePointer || reduceMotion) return;
    var glow = $("#cursorGlow");
    document.body.classList.add("has-pointer");
    window.addEventListener("pointermove", function (e) {
      glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    }, { passive: true });
    bindTilt([$("#heroCard")], 8);
    $$(".magnetic").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * .18) + "px," + ((e.clientY - r.top - r.height / 2) * .25) + "px)";
      });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }

  /* ------------------------------------------------------------------
   * Contact form (EmailJS, falls back to mailto)
   * ------------------------------------------------------------------ */
  function contactForm() {
    var form = $("#contactForm"), status = $("#formStatus");
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = ["name", "email", "subject", "message"], valid = true;
      fields.forEach(function (n) {
        var el = form.elements[n], ok = el.value.trim() && (n !== "email" || emailOk.test(el.value.trim()));
        el.parentElement.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });
      status.className = "form-status";
      if (!valid) { status.textContent = s("form.invalid"); status.classList.add("err"); return; }

      var topic = (form.querySelector('input[name="topic"]:checked') || {}).value || "";
      var btn = form.querySelector("button[type=submit]"), label = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = icon("send") + "<span>" + s("form.sending") + "</span>";
      var subjectEl = form.elements.subject, original = subjectEl.value;
      subjectEl.value = "[" + topic + "] " + original;

      function finish() { btn.disabled = false; btn.innerHTML = label; subjectEl.value = original; }
      function fallback() {
        finish();
        var body = form.elements.message.value + "\n\n— " + form.elements.name.value + " <" + form.elements.email.value + ">";
        location.href = "mailto:" + D.profile.email + "?subject=" + encodeURIComponent("[" + topic + "] " + original) + "&body=" + encodeURIComponent(body);
        status.textContent = s("form.fallback");
      }

      if (!window.emailjs) { fallback(); return; }
      try { window.emailjs.init({ publicKey: EMAILJS.publicKey }); } catch (err) { /* already initialised */ }
      window.emailjs.sendForm(EMAILJS.service, EMAILJS.template, form).then(function () {
        finish();
        form.reset();
        status.textContent = s("form.ok");
        status.classList.add("ok");
      }, function (err) {
        console.error("EmailJS error", err);
        fallback();
      });
    });
    form.addEventListener("input", function (e) { if (e.target.parentElement) e.target.parentElement.classList.remove("invalid"); });
  }

  /* ------------------------------------------------------------------
   * Boot
   * ------------------------------------------------------------------ */
  $("#year").textContent = new Date().getFullYear();
  renderAll();
  loadRepos();
  neural();
  runTerminal();
  pointerFx();
  contactForm();
  routeFromHash();
})();
