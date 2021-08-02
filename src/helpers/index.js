export const append = ({ el, children }) => {
  const child = document.createRange().createContextualFragment(children);
  el.appendChild(child);
};
