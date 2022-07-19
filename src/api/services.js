export default function getLinks(endpoint) {
  return fetch(
    `https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api${endpoint}`,
  );
}
