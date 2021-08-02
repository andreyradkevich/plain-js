const root = document.getElementById("root");
const pathname = window.location.pathname;

(async () => {
  if (pathname === "/") {
    import("./pages/index.js").then((data) => {
      const home = data.default;
      home();
    });
  }

  if (pathname === "/about") {
    import("./pages/about/index.js").then((data) => {
      const about = data.default;
      about();
    });
  }
})();
