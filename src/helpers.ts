// Turning string with html into a fragment
const stringToFragment = (html) => document.createRange().createContextualFragment(html);

export {
  stringToFragment,
};
