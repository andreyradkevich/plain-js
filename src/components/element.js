const append = ({ el, children }) => {
  const child = document.createRange().createContextualFragment(children);
  el.appendChild(child);
};

const element = function (elType, children, options = {}) {
  const el = document.createElement(elType);

  const { onClick } = options;

  if (onClick) {
    console.log(el, "el");
    el.addEventListener("click", (e) => {
      onClick(e);
    });
  }

  if (Array.isArray(children)) {
    children.map((child) => {
      append({ el, children: child });
    });
  } else {
    append({ el, children });
  }

  return el.outerHTML;
};

export default element;
