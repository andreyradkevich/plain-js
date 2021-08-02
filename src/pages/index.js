const home = function () {
  import("../layouts/index.js").then(async (data) => {
    const layout = data.default;

    const el = await layout("<p>Home page</p>");

    document.getElementById("root").appendChild(el);
  });
};

export default home;
