/**
 * MBTA brand-adjacent hex colors for charts and maps.
 *
 * References: MBTA style guides (Green, Orange, Red Line, Blue / Commuter Rail).
 */

/** Green Line */
export const MBTA_GREEN = '#00843D';

/** Orange Line */
export const MBTA_ORANGE = '#ED8B00';

/**
 * Lighter green tint for **development** glyph strokes (transit-accessible projects).
 *
 * Blends ~42% white into ``MBTA_GREEN`` so fills stay readable; used on maps and legends.
 */
export const MBTA_GREEN_DEV_OUTLINE = '#73BB94';

/**
 * Lighter orange tint for **development** glyph strokes (not transit-accessible).
 *
 * Blends ~42% white into ``MBTA_ORANGE``; pairs with ``MBTA_GREEN_DEV_OUTLINE``.
 */
export const MBTA_ORANGE_DEV_OUTLINE = '#F5BF73';

/** Red Line */
export const MBTA_RED = '#DA291C';

/** Commuter Rail / Blue */
export const MBTA_BLUE = '#003DA5';

/** Bus / warning yellow (fit lines) */
export const MBTA_YELLOW = '#FFC72C';

/** Light neutral for diverging chart midpoints */
export const MBTA_CHART_NEUTRAL = '#faf8f5';

/** Light neutral for map diverging midpoint */
export const MBTA_MAP_NEUTRAL = '#f8fafc';
