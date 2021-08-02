import element from "../components/element.js";

const layout = function (children) {
  return element("div", [
    element("button", "Home page", {
      onClick: () => console.log("click"),
    }),
    children,
  ]);
};

export default layout;
