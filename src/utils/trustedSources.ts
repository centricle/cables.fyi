// Trusted domains for cable/connector data sources
export const TRUSTED_DOMAINS = [
  // Standards organizations
  'usb.org',
  'www.usb.org',
  'hdmi.org',
  'www.hdmi.org',
  'displayport.org',
  'www.displayport.org',
  'thunderbolttechnology.net',
  'www.thunderbolttechnology.net',
  'iec.ch',
  'www.iec.ch',

  // Major manufacturers
  'intel.com',
  'www.intel.com',
  'apple.com',
  'www.apple.com',
  'belkin.com',
  'www.belkin.com',
  'anker.com',
  'www.anker.com',
  'cable-matters.com',
  'www.cable-matters.com',

  // Technical references
  'en.wikipedia.org',
  'wikipedia.org',

  // Electronics distributors with technical data
  'digikey.com',
  'www.digikey.com',
  'mouser.com',
  'www.mouser.com',
  'farnell.com',
  'www.farnell.com',
  'rs-online.com',
  'www.rs-online.com',
];

/**
 * Check if a URL is from a trusted domain
 */
export function isTrustedSource(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    return TRUSTED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
}

/**
 * Filter sources to only include trusted domains
 */
export function filterTrustedSources(sources: Array<{ url?: string; [key: string]: any }>): Array<{ url?: string; [key: string]: any }> {
  return sources.filter(source =>
    source.url && isTrustedSource(source.url)
  );
}
