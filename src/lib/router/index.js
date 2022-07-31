import { removeChildren } from "../render/index.js";

const initializer = (callback) => {
  removeChildren("root");

  return () => {
    callback();
  };
};

const getPage = (routes, pathname) => {
  const rootDiv = document.getElementById("root");

  if (rootDiv) {
    initializer(routes[pathname || window.location.pathname])();
  }
};

export const router = (config) => {
  const { routes } = config;

  window.addEventListener("load", function () {
    getPage(routes);
  });

  window.onpopstate = history.onpushstate = function (data) {
    getPage(routes, data.pathname);
  };
};

export const navigate = (pathname, state = null) => {
  window.history.pushState(state, null, pathname);
};

export const link = (pathname, text, id) => {
  const link = document.createElement("a");
  link.href = pathname;
  link.innerText = text;
  link.onclick = (e) => {
    e.preventDefault();

    navigate(pathname);
  };

  document.getElementById(id).appendChild(link);
};
