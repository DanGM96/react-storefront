export function getLastSegment(path) {
  return path.substring(path.lastIndexOf("/") + 1);
}
