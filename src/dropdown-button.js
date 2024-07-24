function setupDropdownMenus() {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const html = document.querySelector("html");

  dropdownButtons.forEach((button) => {
    const content = button.parentNode.querySelector(".dropdown-content");
    content.style.display = "none";

    button.addEventListener("click", (e) => {
      closeAllExcept(content);
      content.style.display =
        content.style.display === "none" ? "block" : "none";
      e.stopPropagation();
    });

    content.addEventListener("click", (e) => {
      content.style.display = "none";
      e.stopPropagation();
    });

    html.addEventListener("click", () => {
      content.style.display = "none";
    });
  });
}

function closeAllExcept(content) {
  const contents = document.querySelectorAll(".dropdown-content");
  contents.forEach((elem) => {
    if (elem !== content) {
      elem.style.display = "none";
    }
  });
}

export { setupDropdownMenus };
