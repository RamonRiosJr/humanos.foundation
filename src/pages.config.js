import { lazy } from "react";
import __Layout from "./Layout.jsx";

/**
 * pages.config.js - Page routing configuration
 */

const Accessibility = lazy(() => import("./pages/Accessibility"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Clinics = lazy(() => import("./pages/Clinics"));
const Contact = lazy(() => import("./pages/Contact"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Events = lazy(() => import("./pages/Events"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Glossary = lazy(() => import("./pages/Glossary"));
const Home = lazy(() => import("./pages/Home"));
const Join = lazy(() => import("./pages/Join"));
const Manifesto = lazy(() => import("./pages/Manifesto"));
const OpenSource = lazy(() => import("./pages/OpenSource"));
const Origin = lazy(() => import("./pages/Origin"));
const Partners = lazy(() => import("./pages/Partners"));
const Press = lazy(() => import("./pages/Press"));
const Principles = lazy(() => import("./pages/Principles"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Resources = lazy(() => import("./pages/Resources"));
const Security = lazy(() => import("./pages/Security"));
const Support = lazy(() => import("./pages/Support"));
const Terms = lazy(() => import("./pages/Terms"));
const TheProblem = lazy(() => import("./pages/TheProblem"));
const TheSolution = lazy(() => import("./pages/TheSolution"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Team = lazy(() => import("./pages/Team"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Developers = lazy(() => import("./pages/Developers"));
const Governance = lazy(() => import("./pages/Governance"));
const Research = lazy(() => import("./pages/Research"));
const Status = lazy(() => import("./pages/Status"));
const Bounties = lazy(() => import("./pages/Bounties"));
export const PAGES = {
    Accessibility: Accessibility,
    Blog: Blog,
    BlogPost: BlogPost,
    Clinics: Clinics,
    Contact: Contact,
    Cookies: Cookies,
    Disclaimer: Disclaimer,
    Events: Events,
    FAQ: FAQ,
    Glossary: Glossary,
    Home: Home,
    Join: Join,
    Manifesto: Manifesto,
    OpenSource: OpenSource,
    Origin: Origin,
    Partners: Partners,
    Press: Press,
    Principles: Principles,
    Privacy: Privacy,
    Resources: Resources,
    Security: Security,
    Support: Support,
    Terms: Terms,
    TheProblem: TheProblem,
    TheSolution: TheSolution,
    Volunteer: Volunteer,
    Team: Team,
    whitepaper: Whitepaper,
    Developers: Developers,
    Governance: Governance,
    Research: Research,
    Status: Status,
    Bounties: Bounties,
};

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
