export const parseDate = (date: string) => date.split("T");

export const getSliceText = (text: string, countSymbol: number) => {
  if (text.length <= countSymbol) {
    return text;
  }
  return text.slice(0, countSymbol).trim() + "...";
};
