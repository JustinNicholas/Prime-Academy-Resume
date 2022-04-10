$(".darkModeButton").click(function() {
  darkMode();
});

function darkMode() {
  $(".header").toggleClass("tan-section");
  $(".header").toggleClass("darkModeThemeDark");
  $("Body").toggleClass("green-section");
  $("Body").toggleClass("darkModeThemeDark");
  $("Footer").toggleClass("tan-section");
  $("Footer").toggleClass("darkModeThemeDark");
  $("h1").toggleClass("darkModeThemeDark");
  $(".darkModeButton").toggleClass("btn-dark");
  $(".darkModeButton").toggleClass("btn-light");
  themeText();
};
