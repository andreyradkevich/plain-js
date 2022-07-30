import { router } from "./lib/router/index.js";

import home from "./pages/index.js";
import about from "./pages/about.js";

router({
  routes: {
    "/": home,
    "/about": about,
  },
});
