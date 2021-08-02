const aboutUs = function () {
  import("../../layouts/index.js").then(async (data) => {
    const layout = data.default;

    const el = await layout("<p>About page</p>");

    document.getElementById("root").appendChild(el);
  });
};

export default aboutUs;
