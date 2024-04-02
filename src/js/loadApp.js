import { getConfig, getDropdownItems } from "./data";
import { getButton, getPageMain } from "./selectors";
import { createEmbeddedHelp, setButtonStyle } from "./ui";

export async function loadApp() {
  try {
    const config = await getConfig();

    const pageMain = await getPageMain(config);
    if (pageMain === null) {
      return await Promise.resolve(true);
    }

    const dropdownItems = await getDropdownItems(config);
    if (dropdownItems.length < 1) {
      return await Promise.resolve(true);
    }

    const embeddedHelp = createEmbeddedHelp(
      config.embeddedHelpId,
      config.buttonLabel,
      dropdownItems
    );
    pageMain.appendChild(embeddedHelp);

    const button = await getButton(embeddedHelp);
    if (button !== null) {
      setButtonStyle(button);
    }

    return await Promise.resolve(true);
  } catch (e) {
    console.error(e);

    return await Promise.resolve(false);
  }
}
