import { append } from "../helpers/index.js";

const element = function (elType, children, options = {}) {
  const el = document.createElement(elType);

  const { onClick } = options;

  if (onClick) {
    el.addEventListener("click", (e) => {
      onClick(e);
    });
  }

  if (Array.isArray(children)) {
    children.map((child) => {
      if (typeof child === "string") {
        return append({ el, children: child });
      }

      return el.appendChild(child);
    });
  } else {
    append({ el, children });
  }

  return el;
};

export default element;
