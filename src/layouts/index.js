const layout = async function (children) {
  const data = await import("../components/element.js");
  const element = data.default;

  return element("div", [
    element("button", "Home page", {
      onClick: () => console.log("click"),
    }),
    children,
  ]);
};

export default layout;
