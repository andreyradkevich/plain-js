export const router = (config) => {
  const { routes } = config;

  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = routes[window.location.pathname];
};

export const navigate = (pathname, state) => {
  window.history.pushState(state, "", pathname);
};

export const link = (pathname, text) => {
  const link = document.createElement("a");
  link.href = "#";
  link.innerText = text;
  link.onclick = function () {
    navigate(pathname);
  };
};
