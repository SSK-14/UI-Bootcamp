const stringify = (obj) => {
  let resultString = "{";

  for (key in obj) {
    let value = obj[key];

    if (typeof value == "function") continue;

    if (resultString.length > 1) resultString += ",";
    resultString += `"${key}":`;

    if (value === null) resultString += `${value}`;
    else if (typeof value == "object") resultString += stringify(value);
    else if (typeof value == "string") resultString += `"${value}"`;
    else resultString += `${value}`;
  }

  return (resultString += "}");
};

const object = {
  a: 1,
  b: 2,
  c: {
    d: "Hello",
    e: {
      f: "World",
    },
  },
};

console.log(stringify(object));
