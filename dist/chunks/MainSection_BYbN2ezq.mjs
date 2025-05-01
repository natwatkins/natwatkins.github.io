import { b as createAstro, c as createComponent, d as addAttribute, e as renderScript, a as renderTemplate, f as renderHead, g as renderSlot, r as renderComponent, m as maybeRenderHead } from './astro/server_DAQwUKiY.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState } from 'react';

// for enabling view transitions

// Site title
const myName = 'Nat Watkins'; 

// Nav logo text
const navLogoText = 'Nat Watkins'; 

// Nav bar items
const navLinks = [
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Resume', href: '/nat-watkins-resume.pdf' }
];

// Bio
const myBio = 'UX Researcher, Designer, and Front End Developer. Ideally, in that order.';

// About Me text
const aboutMe = 'I have over 8 years of experience in digital and government services. My core skills are in User Experince (UX) research and design for technical product delivery, with strong capabilities in iterative, rapid front end development.';

// Project data for the project cards
const projects = [
  {
    title: 'I researched, designed, and developed these websites.',
    name: 'CMS Claims Data APIs',
    link: '/projects/cms-claims-data-apis',
  },
  {
    title: 'I researched and designed this application portal.',
    name: 'New Jersey Unemployment Insurance Modernization',
    link: 'https://www.nj.gov/labor/myunemployment/help/newapp.shtml',
    imageUrl: '/public/img/nj_dol.png'
  },
  {
    title: 'I researched and designed this AI image recognition tool.',
    name: 'Maximo AI',
    link: 'https://www.ibm.com/products/maximo/asset-inspection',
    imageUrl: '/public/img/maximo.gif'
  },
  {
    title: 'I researched and designed this user interface.',
    name: 'IBM Power Virtual Server',
    link: 'https://www.ibm.com/products/power-virtual-server',
    imageUrl: '/public/img/powervs.png'
  },
  {
    title: 'I invented these.',
    name: 'Patents',
    link: 'https://patents.google.com/?inventor=Natalie+Watkins',
    imageUrl: '/public/img/patent_US11301244-20220412-D00003.png'
  },
  {
    title: 'I wrote this.',
    name: 'Article',
    link: 'https://www.wired.com/story/big-tech-patent-intellectual-property/',
    imageUrl: '/images/article-bg.png'
  }
];

// Skills tags
const skills = [
  'User Research and Testing',
  'Accessibility',
  'Interaction Design',
  'Human-Centered Design',
  'Front End Development',
  'Content Strategy',
  'Figma / Sketch',
  'HTML / CSS / JavaScript',
  'Front End Frameworks',
  'AI Tooling',
  'Agile',
];

// Contact options
const contactOptions = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/natwatkins/' },
  { name: 'GitHub', href: 'https://github.com/nat-watkins' },
  { name: 'Email', href: 'mailto:watkinsnbw@gmail.com' }
];

const $$Astro$3 = createAstro("https://natwatkins.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro("https://natwatkins.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "Nat Watkins - Portfolio",
    description = "UX researcher, designer, and front end developer."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/public/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- Preload critical font weights --><link rel="preload" href="/_astro/@fontsource/ibm-plex-sans/400.css" as="style"><link rel="preload" href="/_astro/@fontsource/ibm-plex-sans/500.css" as="style"><title>${title}</title>${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}`}${renderHead()}</head> <body class="min-h-screen"> <div class="relative"> <div class="max-w-7xl mx-auto px-4"> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/layouts/MainLayout.astro", void 0);

function Navbar({ navLinks }) {
  const [isToggled, setIsToggled] = useState(false);
  const subMenuLinkStyles = `text-xl text-slate-700 hover:text-slate-950 transition-all duration-[0.3s]`;
  const MenuLinkStyles = `text-md font-semibold text-slate-900 hover:text-orange-700 transition-all duration-[0.3s]`;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 1
      }
    }
  };
  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 }
  };
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 bg-white shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-5", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "logo text-md font-bold", children: navLogoText  }),
      /* @__PURE__ */ jsx("div", { className: "links", children: /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-7", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { className: MenuLinkStyles, children: /* @__PURE__ */ jsx("a", { href: `${link.href}`, children: link.name }) }, link.name)) }) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: `flex flex-col md:hidden gap-[3.5px] cursor-pointer z-50 ${isToggled ? "fixed top-6 right-5" : ""}`,
          onClick: () => setIsToggled((prev) => !prev),
          children: [
            /* @__PURE__ */ jsx(
              motion.span,
              {
                animate: {
                  rotate: isToggled ? 45 : 0,
                  translateY: isToggled ? 7 : 0,
                  width: isToggled ? 30 : 30
                },
                className: "w-[30px] h-[2px] bg-black"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                animate: { opacity: isToggled ? 0 : 1, width: isToggled ? 0 : 25 },
                className: "w-[20px] h-[2px] bg-black"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.span,
              {
                animate: {
                  rotate: isToggled ? -45 : 0,
                  translateY: isToggled ? -5 : 0,
                  width: isToggled ? 30 : 15
                },
                className: "w-[15px] h-[2px] bg-black"
              }
            )
          ]
        }
      )
    ] }),
    isToggled && /* @__PURE__ */ jsx(motion.div, { className: "md:hidden fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-30 bg-white", children: /* @__PURE__ */ jsx(
      motion.ul,
      {
        className: "flex md:hidden flex-col items-center gap-3",
        variants: container,
        initial: "hidden",
        animate: "show",
        children: navLinks.map((link) => /* @__PURE__ */ jsx(motion.li, { variants: item, children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: subMenuLinkStyles,
            onClick: () => setIsToggled(false),
            children: link.name
          }
        ) }, link.name))
      }
    ) })
  ] });
}

const $$Astro$1 = createAstro("https://natwatkins.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { styles, ids } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`bg-fixed w-full ${styles}`, "class")}${addAttribute(ids, "id")}> <div class="w-full md:px-8"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/Section.astro", void 0);

const $$Astro = createAstro("https://natwatkins.com");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { navLinks, myName, myBio } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "styles": "p-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "navLinks": navLinks, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/Navbar", "client:component-export": "default" })} ${maybeRenderHead()}<div class="w-full h-[85vh] flex items-center justify-center"> <div class="w-[100%] p-5"> <h2 class="font-bold leading-[5rem] text-[4.5rem] md:text-[5.5rem] lg:text-[7rem]">
I'm ${myName}.
</h2> <p class="mt-5 text-[1.2rem] text-slate-900"> ${myBio} </p> </div> </div> ` })}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/sections/MainSection.astro", void 0);

export { $$MainLayout as $, $$MainSection as a, $$Section as b, myName as c, aboutMe as d, contactOptions as e, myBio as m, navLinks as n, projects as p, skills as s };
