export const insertInRoot = (node) => {
  const rootElement = document.getElementById("root");

  rootElement.appendChild(node);
};

export const createElement = (tagName) => {
  document.createElement(tagName);
};
