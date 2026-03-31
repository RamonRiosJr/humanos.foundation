import { useEffect } from 'react';

/**
 * SEOMeta — Drop into any page to set title, description, OG, Twitter, schema, canonical.
 * Usage: <SEOMeta title="..." description="..." url="..." type="article" />
 */
export default function SEOMeta({
    title = 'Humanos Foundation — Health Data Sovereignty Movement',
    description = 'The Human Operating System (hOS) movement fights to return health data sovereignty to every patient. Own your health record. Control who sees it. Benefit from it.',
    url = 'https://humanos.foundation',
    image = 'https://humanos.foundation/og-image.png',
    type = 'website',
    article = null, // { publishedTime, modifiedTime, author, section, tags[] }
    noindex = false,
}) {
    const fullTitle = title.includes('Humanos') ? title : `${title} | Humanos Foundation`;

    useEffect(() => {
        // Title
        document.title = fullTitle;

        const setMeta = (name, content, attr = 'name') => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        const setLink = (rel, href) => {
            let el = document.querySelector(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                document.head.appendChild(el);
            }
            el.setAttribute('href', href);
        };

        // Basic SEO
        setMeta('description', description);
        setMeta('keywords', 'health data sovereignty, patient data rights, hOS, human operating system, FTC HBNR personal health record, Zero-Knowledge Healthcare, patient owned health record, health data portability, Ramon Rios, Humanos Foundation, Coqui Cloud');
        setMeta('author', 'Ramon Luis Rios Jr. — Humanos Foundation');
        setMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');

        // Canonical
        setLink('canonical', url);

        // Open Graph
        setMeta('og:title', fullTitle, 'property');
        setMeta('og:description', description, 'property');
        setMeta('og:url', url, 'property');
        setMeta('og:image', image, 'property');
        setMeta('og:type', type, 'property');
        setMeta('og:site_name', 'Humanos Foundation', 'property');
        setMeta('og:locale', 'en_US', 'property');

        // Twitter Card
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', fullTitle);
        setMeta('twitter:description', description);
        setMeta('twitter:image', image);
        setMeta('twitter:site', '@humanosHQ');
        setMeta('twitter:creator', '@ramonriosjr');

        // Article-specific
        if (article) {
            setMeta('article:published_time', article.publishedTime, 'property');
            if (article.modifiedTime) setMeta('article:modified_time', article.modifiedTime, 'property');
            if (article.author) setMeta('article:author', article.author, 'property');
            if (article.section) setMeta('article:section', article.section, 'property');
            if (article.tags) article.tags.forEach(tag => {
                const el = document.createElement('meta');
                el.setAttribute('property', 'article:tag');
                el.setAttribute('content', tag);
                document.head.appendChild(el);
            });
        }

        // JSON-LD Structured Data
        const existingSchema = document.querySelector('#hos-schema');
        if (existingSchema) existingSchema.remove();

        const schema = {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Organization',
                    '@id': 'https://humanos.foundation/#organization',
                    name: 'Humanos Foundation',
                    url: 'https://humanos.foundation',
                    logo: 'https://humanos.foundation/logo.png',
                    description: 'A movement dedicated to returning health data sovereignty to every individual.',
                    founder: {
                        '@type': 'Person',
                        name: 'Ramon Luis Rios Jr.',
                        url: 'https://ramonrios.net',
                        sameAs: ['https://ramonrios.net', 'https://coqui.cloud'],
                    },
                    sameAs: ['https://humanos.foundation', 'https://coqui.cloud'],
                    contactPoint: {
                        '@type': 'ContactPoint',
                        email: 'hello@humanos.foundation',
                        contactType: 'general',
                    },
                },
                {
                    '@type': 'WebSite',
                    '@id': 'https://humanos.foundation/#website',
                    url: 'https://humanos.foundation',
                    name: 'Humanos Foundation',
                    publisher: { '@id': 'https://humanos.foundation/#organization' },
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: 'https://humanos.foundation/blog?q={search_term_string}',
                        'query-input': 'required name=search_term_string',
                    },
                },
                {
                    '@type': 'WebPage',
                    '@id': `${url}/#webpage`,
                    url,
                    name: fullTitle,
                    description,
                    isPartOf: { '@id': 'https://humanos.foundation/#website' },
                    publisher: { '@id': 'https://humanos.foundation/#organization' },
                    inLanguage: 'en-US',
                },
            ],
        };

        const scriptEl = document.createElement('script');
        scriptEl.id = 'hos-schema';
        scriptEl.type = 'application/ld+json';
        scriptEl.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptEl);

        return () => {
            const s = document.querySelector('#hos-schema');
            if (s) s.remove();
        };
    }, [fullTitle, description, url, image, type]);

    return null;
}


