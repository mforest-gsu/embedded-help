import { getElement } from ".";

export async function getButton(embeddedHelp) {
  return await getElement(embeddedHelp, "d2l-button", true)
    .then((d2lButton) => getElement(d2lButton, "button"))
    .catch(() => null);
}
