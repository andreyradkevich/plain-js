import layout from "../layouts/index.js";

const home = function () {
  const el = layout("<p>Home page</p>");

  document.getElementById("root").appendChild(el);
};

export default home;
