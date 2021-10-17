export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const makeFormattedFieldName = (unformattedName) => {
  const withoutUnderline = unformattedName.replaceAll("_", " ");

  return capitalize(withoutUnderline);
};
