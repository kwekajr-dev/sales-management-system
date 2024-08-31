
//hii ni kwaajili ya kuchabadili  theme cio lazma uielew coz naweza nikaifuta 
document.getElementById("theme-toggle").addEventListener("click", function () {
  const currentTheme = document
    .getElementById("theme-style")
    .getAttribute("href");

  if (currentTheme === "theme.css") {
    document
      .getElementById("theme-style")
      .setAttribute("href", "dark-theme.css");
    this.textContent = "Switch to Light Theme";
  } else {
    document.getElementById("theme-style").setAttribute("href", "theme.css");
    this.textContent = "Switch to Dark Theme";
  }
});
