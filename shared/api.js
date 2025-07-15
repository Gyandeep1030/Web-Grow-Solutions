/**
 * Shared code between client and server
 * Useful to share constants and pure JS functions that can be used on both client and server
 */

/**
 * Example response structure for /api/demo
 * In JavaScript, we use JSDoc comments for documentation instead of TypeScript interfaces
 */

// Example constants that can be shared
export const API_ENDPOINTS = {
  PING: "/api/ping",
  DEMO: "/api/demo",
};

// Example utility functions
export const createSuccessResponse = (message) => ({
  success: true,
  message,
});

export const createErrorResponse = (error) => ({
  success: false,
  error,
});
