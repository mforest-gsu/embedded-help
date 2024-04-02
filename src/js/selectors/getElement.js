export async function getElement(
  parent,
  selector,
  shadowRoot = false,
  retries = 25
) {
  return await new Promise((resolve, reject) => {
    let count = 0;
    const callback = () => {
      let element = parent.querySelector(selector);
      if (shadowRoot === true) {
        element = element?.shadowRoot;
      }

      if (element !== null) {
        resolve(element);
      } else if (++count < retries) {
        setTimeout(callback, 200);
      } else {
        reject(false);
      }
    };
    setTimeout(callback, 10);
  });
}
