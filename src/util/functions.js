export function getLastSegment(path) {
  return path.substring(path.lastIndexOf("/") + 1);
}

export function isSwatch(attributeType) {
  return attributeType === "swatch";
}

export function getProductPrice(prices, currency) {
  const priceIndex = prices.findIndex(({ currency: { label } }) => label === currency.label);
  return prices[priceIndex].amount;
}

export function hexToRgba(hex, alpha) {
  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = regex.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
