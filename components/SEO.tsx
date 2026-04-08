import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Sunrise System - Industrial Automation & PLC SCADA Solutions in Vapi, Gujarat",
  description = "Leading industrial automation company in Vapi, Gujarat. Turnkey PLC, SCADA, DCS solutions, panel manufacturing (MCC/PCC), VFD, HMI, instrumentation. Serving Vapi GIDC, Silvassa, Daman, South Gujarat industries. 24/7 support.",
  keywords = "industrial automation Vapi, PLC programming Vapi, SCADA solutions Gujarat, panel manufacturers Vapi GIDC, automation company Vapi, VFD suppliers Gujarat, HMI Vapi, instrumentation Vapi",
  image = "https://sunrisesystem.co.in/assets/logo.png",
  url = "https://sunrisesystem.co.in/",
  type = "website"
}) => {
  React.useEffect(() => {
    // Update meta tags dynamically
    document.title = title;
    
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
