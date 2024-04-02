import { getElement } from "./getElement";

export async function getPageMain({ uri, d2lPageMainId }) {
  const selectors = d2lPageMainId
    .filter((v) => uri.match(v.uri)?.length ?? 0 >= 1)
    .map((v) => v.selector);

  const selector = selectors.length > 0 ? selectors[0] : null;
  if (selector === null) {
    return null;
  }

  return await getElement(document, selector).catch(() => null);
}
