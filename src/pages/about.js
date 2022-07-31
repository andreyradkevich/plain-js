import { link } from "../lib/router/index.js";
import { insertInRoot, createElement } from "../lib/element/index.js";

export default function () {
  const list = document.createElement("div");
  list.id = "list";

  insertInRoot(list);

  link("/", "Home", "list");

  createElement("div");
}
