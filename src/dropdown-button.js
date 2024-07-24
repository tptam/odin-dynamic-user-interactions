function setupDropdownMenu() {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  dropdownButtons.forEach((button) => {
    const content = button.parentNode.querySelector(".dropdown-content");
    const items = content.querySelectorAll("a");
    content.style.display = "none";

    button.addEventListener("click", () => {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
    items.forEach((item) =>
      item.addEventListener("click", () => (content.style.display = "none"))
    );
  });
}

export { setupDropdownMenu };
