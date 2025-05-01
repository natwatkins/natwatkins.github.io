/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_IVX52hWm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$Section, p as projects, $ as $$MainLayout, a as $$MainSection, m as myBio, c as myName, n as navLinks, s as skills, d as aboutMe, e as contactOptions } from '../chunks/MainSection_DN8cK2in.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://natwatkins.com");
const $$SkillItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkillItem;
  const { skill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-full py-2 px-4 md:py-3 md:px-4 bg-orange-100 min-w-[60px] flex items-center justify-center"> <span class="font-semibold">${skill}</span> </div>`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/SkillItem.astro", void 0);

const $$Astro$3 = createAstro("https://natwatkins.com");
const $$SkillsBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkillsBox;
  const { skills = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex gap-3 mt-2 mb-2 flex-wrap"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "SkillItem", $$SkillItem, { "skill": skill })}`)} </div>`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/SkillsBox.astro", void 0);

const $$Astro$2 = createAstro("https://natwatkins.com");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { aboutMe, skills } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "styles": "p-1", "ids": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col lg:flex-row gap-12 items-center pb-40 md:pb-80"> <div class="box introduction w-full lg:w-1/2"> <div class="box-text"> <h3 class="leading-[4rem] md:leading-[8rem] font-bold text-[4rem] md:text-[6rem]">
About Me
</h3> <p class="mt-5 text-[1.2rem] text-slate-900"> ${aboutMe} </p> </div> </div> <div class="info-box w-full lg:w-1/2 justify-start flex flex-col gap-5"> <h3 class="heading text-slate-900 uppercase font-semibold">
Skills
</h3> ${renderComponent($$result2, "SkillsBox", $$SkillsBox, { "skills": skills })} </div> </div> ` })}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/sections/AboutSection.astro", void 0);

const $$SelectedProjectsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "styles": "p-1", "ids": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full pb-40 md:pb-80"> <h2 class="heading text-slate-900 uppercase font-semibold pb-4">
Selected Projects
</h2> <div class="grid grid-cols-2 lg:grid-cols-3 gap-6"> ${projects.map((project) => renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="relative group aspect-[4/3] block"> <div class="absolute inset-0 rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"${addAttribute(project.imageUrl ? `background-image: url('${project.imageUrl}'); background-size: cover; background-position: center;` : "background: linear-gradient(to bottom right, #005EA2, #03BDE3);", "style")}></div> <div class="absolute inset-0 bg-orange-700 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-md"></div> <div class="absolute inset-0 flex flex-col justify-end items-start p-3 md:p-4 lg:p-6"> <h3 class="w-full text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white"> ${project.title} </h3> <div${addAttribute(`text-sm md:text-base lg:text-lg mt-3 md:mt-4 flex items-center gap-1 ${project.imageUrl?.includes("nj_dol") || project.imageUrl?.includes("powervs") ? "text-black group-hover:text-white" : "text-white"} justify-between w-full`, "class")}> ${project.name} <span class="ml-auto flex justify-end"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </span> </div> </div> </a>`)} </div> </div> ` })}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/sections/SelectedProjectsSection.astro", void 0);

const $$Astro$1 = createAstro("https://natwatkins.com");
const $$ContactBoxItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactBoxItem;
  const { contact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(contact.href, "href")} target="_blank" rel="noopener noreferrer" class="group cursor-pointer flex w-full p-5 items-center justify-between transition duration-300 text-slate-900 hover:text-orange-700 border-b-2 hover:border-orange-700 hover:font-semibold"> <p>${contact.name}</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden group-hover:block transition duration-0"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path> </svg> </a>`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/ContactBoxItem.astro", void 0);

const $$Astro = createAstro("https://natwatkins.com");
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const { contactText, contactOptions } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "styles": "p-1", "ids": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center pb-40 md:pb-80"> <div class="box introduction w-[100%] md:w-[60%]"> <h2 class="leading-[4rem] md:leading-[8rem] font-bold text-[4rem] md:text-[6rem]">
Let's Connect
</h2> </div> <div class="flex flex-col info-box w-[100%] md:w-[30%] md:mr-5 gap-5"> <div class="flex flex-col p-1"> ${contactOptions.map((contact) => renderTemplate`${renderComponent($$result2, "ContactBoxItem", $$ContactBoxItem, { "contact": contact })}`)} </div> </div> </div> ` })}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/components/sections/ContactSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainSection", $$MainSection, { "navLinks": navLinks, "myName": myName, "myBio": myBio })} ${renderComponent($$result2, "SelectedProjectsSection", $$SelectedProjectsSection, { "projects": projects })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { "aboutMe": aboutMe, "skills": skills })} ${renderComponent($$result2, "ContactSection", $$ContactSection, { "contactOptions": contactOptions })} ` })}`;
}, "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/pages/index.astro", void 0);

const $$file = "/Users/nataliewatkins/Documents/GitHub/natwatkins.github.io-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
