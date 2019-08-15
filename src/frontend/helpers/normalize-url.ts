export function normalizeUrl(url: string | null) {
  if (!url) {
    return '';
  }

  return url.replace(/’/g, '');
}
