export const router = (config) => {
  const { routes } = config;

  const rootDiv = document.getElementById("root");

  return new MutationObserver(function () {
    if (rootDiv) {
      console.log(rootDiv, "div");
      routes[window.location.pathname];
    }
  });
};

export const navigate = (pathname, state) => {
  window.history.pushState(state, "", pathname);
};

export const link = (pathname, text, id) => {
  const link = document.createElement("a");
  link.href = "#";
  link.innerText = text;
  link.addEventListener("click", () => {
    navigate(pathname);
  });

  document.getElementById(id).appendChild(link);
};
