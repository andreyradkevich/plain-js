const aboutUs = function () {
  const data = import("../../layouts/index.js");

  const layout = data.default;

  document.getElementById("root").innerHTML = layout("<p>About page</p>");
};

export default aboutUs;
