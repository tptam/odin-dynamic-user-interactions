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

const carousel1 = createCarousel(
  300,
  200,
  400,
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
  prevSvg,
  undefined,
  undefined,
  undefined,
  "#f5f5f5"
);

const carousel2 = createCarousel(
  300,
  300,
  300,
  [
    {
      src: "https://picsum.photos/500/500?random=6",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/500/500?random=7",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/500/500?random=8",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/500/500?random=9",
      alt: "random dummy image",
    },
    {
      src: "https://picsum.photos/500/500?random=10",
      alt: "random dummy image",
    },
  ],
  true,
  null,
  null,
  24,
  "#fecdd3",
  "#f43f5e"
);

const title = document.createElement("h1");
title.textContent = "Carousels";
const sub1 = document.createElement("h2");
sub1.textContent =
  "Wider window than slide, custom arrow icons, custom background color, default dots";
const sub2 = document.createElement("h2");
sub2.textContent =
  "Same window and slide widths, default arrow icons, custom icon color and dot size, auto-rotate";

sub2.style.marginTop = "4rem";
carousel1.style.margin = "1rem auto";
carousel2.style.margin = "1rem auto";

const content = document.querySelector("#content");
content.appendChild(title);
content.appendChild(sub1);
content.appendChild(carousel1);
content.appendChild(sub2);
content.appendChild(carousel2);
