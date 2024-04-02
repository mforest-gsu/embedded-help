export function createEmbeddedHelp(
  embeddedHelpId,
  buttonLabel,
  dropdownItems
) {
  const d2lDropdown = document.createElement("d2l-dropdown");
  d2lDropdown.appendChild(createButton(buttonLabel));
  d2lDropdown.appendChild(createDropdownContent(dropdownItems));

  const embeddedHelp = document.createElement("div");
  embeddedHelp.id = embeddedHelpId;
  embeddedHelp.style =
    "display:block; position:fixed; top:auto; left:auto; bottom:0px; right:20px; z-index:100000; font-size: 14px;";
  embeddedHelp.appendChild(d2lDropdown);
  return embeddedHelp;
}

function createButton(buttonLabel) {
  const d2lButton = document.createElement("d2l-button");
  d2lButton.setAttribute("primary", "");
  d2lButton.setAttribute("class", "d2l-dropdown-opener");
  d2lButton.setAttribute("text", buttonLabel);
  d2lButton.innerText = buttonLabel;
  return d2lButton;
}

function createDropdownContent(dropdownItems) {
  const d2lDropdownContent = document.createElement("d2l-dropdown-content");

  dropdownItems.forEach(({ title, url }) =>
    d2lDropdownContent.appendChild(createDropdownItem(title, url))
  );

  return d2lDropdownContent;
}

function createDropdownItem(title, url) {
  let contents = null;
  if (url !== null) {
    contents = document.createElement("a");
    contents.setAttribute("href", url);
    contents.setAttribute("target", "_blank");
    contents.setAttribute("class", "d2l-link");
  } else {
    contents = document.createElement("strong");
  }
  contents.innerText = title;

  const div = document.createElement("div");
  div.appendChild(contents);
  return div;
}
