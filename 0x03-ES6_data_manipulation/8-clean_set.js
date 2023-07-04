export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((string) => string.startsWith(startString) && startString !== '')
    .map((string) => string.substring(startString.length))
    .join('-');
}
