export function classNames(...params) {
  const classes = [];
  for (const param of params) {
    if (typeof param === "string") classes.push(param);
    else if (typeof param === "object") {
      for (const key in param) {
        if (param[key] === true) classes.push(key);
      }
    }
  }
  return classes.length > 0 ? classes.join(" ") : undefined;
}
