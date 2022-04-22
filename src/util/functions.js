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
