let toggleValue = true;

function changeCSS(cssLinkIndex) {
  if (toggleValue === true) {
    toggleValue = false;
  } else {
    toggleValue = true;
  }
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  let cssFile = toggleValue ? "main.css" : "dark.css";
  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", `assets/css/${cssFile}`);
  document
    .getElementsByTagName("head")
    .item(cssLinkIndex)
    .replaceChild(newlink, oldlink);
}

function toggle() {}
