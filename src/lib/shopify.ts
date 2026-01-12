// Shopify Cart Integration for EffyDesk Wildwood Landing Page
// Product: Electric Adjustable Standing Desk - Solid Wood
// https://effydesk.com/products/electric-adjustable-standing-desk-solid-wood

export const SHOPIFY_DOMAIN = 'https://effydesk.com';
export const PROMO_CODE = 'NEWYEAR25';

// All 18 variants: 3 woods × 2 frames × 3 sizes
// Variant IDs from effydesk.com/products/electric-adjustable-standing-desk-solid-wood.json
export const SHOPIFY_VARIANTS: Record<string, number> = {
  // Walnut + Black
  'walnut-black-S': 51707486994795,
  'walnut-black-M': 51707487093099,
  'walnut-black-L': 51707487191403,

  // Walnut + White
  'walnut-white-S': 41626159579319,
  'walnut-white-M': 41672892055735,
  'walnut-white-L': 41672892088503,

  // Pheasantwood + Black
  'pheasantwood-black-S': 51707486962027,
  'pheasantwood-black-M': 51707487060331,
  'pheasantwood-black-L': 51707487158635,

  // Pheasantwood + White
  'pheasantwood-white-S': 41626159415479,
  'pheasantwood-white-M': 41672891924663,
  'pheasantwood-white-L': 41672891957431,

  // Acacia + Black
  'acacia-black-S': 51707486929259,
  'acacia-black-M': 51707487027563,
  'acacia-black-L': 51707487125867,

  // Acacia + White
  'acacia-white-S': 41626159546551,
  'acacia-white-M': 41672891990199,
  'acacia-white-L': 41672892022967,
};

/**
 * Build a Shopify cart URL that adds the specified variant to cart and redirects to checkout
 * Format: https://effydesk.com/cart/{variant_id}:1?discount={code}
 */
export function getCartUrl(
  wood: string,
  frame: string,
  size: string,
  promoCode?: string
): string {
  // Normalize wood name: "Pheasant Wood" → "pheasantwood"
  const normalizedWood = wood.toLowerCase().replace(/\s+/g, '');
  const normalizedFrame = frame.toLowerCase();
  const key = `${normalizedWood}-${normalizedFrame}-${size}`;

  const variantId = SHOPIFY_VARIANTS[key];

  if (!variantId) {
    // Fallback to product page if variant not found
    console.warn(`Variant not found for: ${key}`);
    return `${SHOPIFY_DOMAIN}/products/electric-adjustable-standing-desk-solid-wood`;
  }

  const baseUrl = `${SHOPIFY_DOMAIN}/cart/${variantId}:1`;
  return promoCode ? `${baseUrl}?discount=${promoCode}` : baseUrl;
}

/**
 * Get cart URL for the default/featured variant
 * Default: Pheasantwood Black Medium (best value at $1,050)
 */
export function getDefaultCartUrl(promoCode?: string): string {
  return getCartUrl('pheasantwood', 'black', 'M', promoCode);
}

/**
 * Get the product page URL (for fallback or browsing)
 */
export function getProductUrl(): string {
  return `${SHOPIFY_DOMAIN}/products/electric-adjustable-standing-desk-solid-wood`;
}
