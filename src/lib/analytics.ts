// Google Analytics 4 Event Tracking
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, {
      ...parameters,
      send_to: GA_MEASUREMENT_ID,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
      page_title: title,
    });
  }
};

// Predefined events for the portfolio
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location,
  });
};

export const trackProjectView = (projectName: string, projectId: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_id: projectId,
  });
};

export const trackContactFormSubmit = (success: boolean, errorMessage?: string) => {
  trackEvent('contact_form_submit', {
    success,
    error_message: errorMessage,
  });
};

export const trackExternalLink = (url: string, linkText: string, location: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    location,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    phone_number: '+34644619118',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    email: 'justo.garcia.2004@gmail.com',
  });
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

export const trackScrollDepth = (percent: number) => {
  trackEvent('scroll_depth', {
    percent,
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};
