import { setupDropdownMenus } from "./dropdown-button";
import { createCarousel } from "./carousel";

import "./style.css";

setupDropdownMenus();

const carousel = createCarousel("300px", "200px", "400px", [
  { src: "https://picsum.photos/300/200?random=1", alt: "random dummy image" },
  { src: "https://picsum.photos/300/200?random=2", alt: "random dummy image" },
  { src: "https://picsum.photos/300/200?random=3", alt: "random dummy image" },
  { src: "https://picsum.photos/300/200?random=4", alt: "random dummy image" },
  { src: "https://picsum.photos/300/200?random=5", alt: "random dummy image" },
]);

console.log(carousel);

document.querySelector("#content").appendChild(carousel);
