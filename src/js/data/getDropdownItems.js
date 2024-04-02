export async function getDropdownItems({
  allowedRoles,
  roleName,
  uri,
  helpItemHeader,
  helpItemCategories,
  supportItemHeader,
  supportItems
}) {
  if (allowedRoles.filter((r) => r === roleName).length < 1) {
    return await Promise.resolve([]);
  }

  const helpItems = helpItemCategories
    .flatMap((helpItemCategory) => {
      const pageMatches = helpItemCategory.pages
        .map((page) => uri.match(page)?.length ?? 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      return pageMatches > 0 ? helpItemCategory.items : null;
    })
    .filter((items) => items !== null);

  return await Promise.resolve([
    ...(helpItems.length > 0
      ? [{ title: helpItemHeader, url: null }, ...helpItems]
      : []),
    ...(supportItems.length > 0
      ? [{ title: supportItemHeader, url: null }, ...supportItems]
      : []),
  ]);
}
