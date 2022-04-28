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

export function calcFontSize(text, fontSize) {
  const auxSize = fontSize / 10 + 0.1;
  const lengthBuff = text.toString().length * auxSize;
  const fontSizeBuff = fontSize + auxSize;
  const newFontSize = fontSizeBuff - lengthBuff;

  return `${newFontSize}px`;
}

export function getScrollBarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;

  return `${scrollBarWidth}px`;
}

export function toggleOverflow() {
  const style = document.body.style;

  if (style.overflow === "") {
    // block scroll
    style.paddingRight = getScrollBarWidth();
    style.overflow = "hidden";
  } else {
    // allow scroll
    style.paddingRight = null;
    style.overflow = null;
  }
}
