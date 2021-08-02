import layout from "../../layouts/index.js";

const aboutUs = function () {
  const el = layout("<p>About page</p>");

  document.getElementById("root").appendChild(el);
};

export default aboutUs;
