/**
 * Strip the scheme from a URL so it can be displayed as a tooltip.
 * @param {string} url
 * @returns {string}
 */
export function normaliseLink(url) {
  if (url.startsWith("http")) return url.replace(/^https?:\/\//, "")
  if (url.startsWith("mailto:")) return url.replace(/^mailto:/, "")
  return url
}
