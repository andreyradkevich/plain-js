import { link } from "../lib/router/index.js";
import { insertInRoot } from "../lib/element/index.js";

import { removeChildren } from "../lib/render/index.js";

export default function () {
  removeChildren("root");

  const list = document.createElement("div");
  list.id = "list";

  insertInRoot(list);

  link("/", "Home", "list");
  link("/about", "About", "list");
}
