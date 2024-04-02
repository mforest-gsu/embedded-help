export async function setButtonStyle(button) {
  try {
    button.style.minHeight = "1.5rem";
    button.style.padding = "0.4rem 0.5rem";
    button.style.borderBottomLeftRadius = "0";
    button.style.borderBottomRightRadius = "0";

    return await Promise.resolve(true);
  } catch (e) {
    return await Promise.reject(e);
  }
}
