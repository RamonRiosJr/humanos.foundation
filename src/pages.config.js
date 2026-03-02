/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Accessibility from './pages/Accessibility';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cookies from './pages/Cookies';
import Disclaimer from './pages/Disclaimer';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Glossary from './pages/Glossary';
import Home from './pages/Home';
import Join from './pages/Join';
import Manifesto from './pages/Manifesto';
import OpenSource from './pages/OpenSource';
import Origin from './pages/Origin';
import Partners from './pages/Partners';
import Press from './pages/Press';
import Principles from './pages/Principles';
import Privacy from './pages/Privacy';
import Resources from './pages/Resources';
import Security from './pages/Security';
import Support from './pages/Support';
import Terms from './pages/Terms';
import TheProblem from './pages/TheProblem';
import Volunteer from './pages/Volunteer';
import Admin from './pages/Admin';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Accessibility": Accessibility,
    "Blog": Blog,
    "Contact": Contact,
    "Cookies": Cookies,
    "Disclaimer": Disclaimer,
    "Events": Events,
    "FAQ": FAQ,
    "Glossary": Glossary,
    "Home": Home,
    "Join": Join,
    "Manifesto": Manifesto,
    "OpenSource": OpenSource,
    "Origin": Origin,
    "Partners": Partners,
    "Press": Press,
    "Principles": Principles,
    "Privacy": Privacy,
    "Resources": Resources,
    "Security": Security,
    "Support": Support,
    "Terms": Terms,
    "TheProblem": TheProblem,
    "Volunteer": Volunteer,
    "Admin": Admin,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};