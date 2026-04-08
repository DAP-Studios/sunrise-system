// Google Analytics Integration

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);
  }
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const trackConversion = (conversionName: string, value?: number) => {
  event({
    action: conversionName,
    category: 'Conversion',
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submission',
    category: 'Form',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'button_click',
    category: 'Engagement',
    label: buttonName,
  });
};

// Track phone calls
export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: 'Phone Call Initiated',
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: 'email_click',
    category: 'Contact',
    label: 'Email Initiated',
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
    label: 'WhatsApp Initiated',
  });
};
