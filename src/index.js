import { setupDropdownMenus } from "./dropdown-button";
import { createCarousel } from "./carousel";

import next from "./images/chevron-right.svg";
import prev from "./images/chevron-left.svg";

import "./style.css";

setupDropdownMenus();

const nextSvg = new Image(40, 80);
nextSvg.src = next;
const prevSvg = new Image(40, 80);
prevSvg.src = prev;

const carousel = createCarousel(
  "300px",
  "200px",
  "400px",
  [
    {
      src: "https://picsum.photos/200/200?random=1",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/200/500?random=2",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/300/200?random=3",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/300/200?random=4",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/300/200?random=5",
      alt: "random dummy image",
    },
  ],
  false,
  nextSvg,
  prevSvg
);

document.querySelector("#content").appendChild(carousel);
