function createCarousel(
  width,
  height,
  windowWidth,
  imgs,
  autoRotate = false,
  gap = "10px",
  dotSize = "14px",
  iconColor = "gray"
) {
  let count = 0;
  let intervalId = null;

  //   Major parts
  const wrapper = document.createElement("div");
  const window = document.createElement("div");
  const strip = document.createElement("div");
  const prev = document.createElement("button");
  const next = document.createElement("button");
  const dots = document.createElement("div");

  wrapper.classList.add("carousel-wrapper");
  window.classList.add("carousel-window");
  strip.classList.add("carousel-strip");
  prev.classList.add("carousel-prev");
  next.classList.add("carousel-next");
  dots.classList.add("carousel-dots");

  wrapper.appendChild(window);
  wrapper.appendChild(prev);
  wrapper.appendChild(next);
  wrapper.appendChild(dots);
  window.appendChild(strip);

  //   SVG button icons
  const svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgNext.setAttribute("viewBox", "0, 0, 10, 20");
  svgNext.setAttribute("width", "20px");
  svgNext.setAttribute("fill", iconColor);
  svgNext.setAttribute("aria-label", "next");
  const polyNext = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  polyNext.setAttribute("points", "0,0 0,20 10,10");
  svgNext.appendChild(polyNext);

  next.appendChild(svgNext);

  const svgPrev = svgNext.cloneNode(false);
  svgPrev.setAttribute("aria-label", "prev");
  const polyPrev = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  polyPrev.setAttribute("points", "10,0 10,20 0,10");
  svgPrev.appendChild(polyPrev);

  prev.appendChild(svgPrev);

  //   Slides
  imgs.forEach((img) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    const imgElem = document.createElement("img");
    imgElem.src = img.src;
    imgElem.alt = img.alt;
    slide.appendChild(imgElem);
    strip.appendChild(slide);
  });

  //   Dots
  for (let i = 0; i < imgs.length; i++) {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    dot.setAttribute("data-slide", i);
    dots.appendChild(dot);
  }

  //   CSS variables
  wrapper.style.setProperty("--width", width);
  wrapper.style.setProperty("--height", height);
  wrapper.style.setProperty("--window-width", windowWidth);
  wrapper.style.setProperty("--gap", gap);
  wrapper.style.setProperty("--dot-size", dotSize);
  wrapper.style.setProperty("--iconColor", iconColor);

  //   prev/next function
  next.addEventListener("click", () => {
    count = Math.min(count + 1, imgs.length - 1);
    console.log(count);
    console.log(strip.style);
    updatePosition();
    updateInterval();
  });

  prev.addEventListener("click", () => {
    count = Math.max(count - 1, 0);
    updatePosition();
    updateInterval();
  });

  //   dot button function
  dots.childNodes.forEach((dot) =>
    dot.addEventListener("click", () => {
      count = parseInt(dot.getAttribute("data-slide"));
      updatePosition();
      updateInterval();
    })
  );

  updatePosition();
  updateInterval();

  return wrapper;

  function updatePosition() {
    wrapper.style.setProperty("--count", count);
    dots.childNodes.forEach((dot) =>
      dot.getAttribute("data-slide") === count.toString()
        ? dot.classList.add("selected")
        : dot.classList.remove("selected")
    );
    prev.disabled = count === 0;
    next.disabled = count === imgs.length - 1;
  }

  function showNextInfinite() {
    count = (count + 1) % imgs.length;
    updatePosition();
  }

  function updateInterval() {
    if (autoRotate) {
      clearInterval(intervalId);
      intervalId = setInterval(showNextInfinite, 5000);
    }
  }
}

export { createCarousel };
