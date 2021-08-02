const home = function () {
  import("../layouts/index.js").then(async (data) => {
    const layout = data.default;

    document.getElementById("root").innerHTML = await layout(
      "<p>Home page</p>"
    );
  });
};

export default home;
