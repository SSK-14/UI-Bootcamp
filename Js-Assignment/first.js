const size = (object) => {
  return Object.keys(object).length;
};

const compareObject = (firstObject, secondObject) => {
  if (typeof firstObject === "object" && typeof secondObject == "object") {
    if (firstObject === secondObject) {
      return true;
    } else {
      if (
        Object.keys(firstObject).length ===
        Object.keys(secondObject).length
      ) {
        for (const key in firstObject) {
          if (firstObject[key] && secondObject[key]) {
            if (
              typeof firstObject[key] !== "object" &&
              typeof secondObject[key] !== "object"
            ) {
              if (firstObject[key] === secondObject[key]) {
                continue;
              } else {
                return false;
              }
            } else if (
              typeof firstObject[key] === "object" &&
              typeof secondObject[key] === "object"
            ) {
              if (
                JSON.stringify(firstObject[key]) ===
                JSON.stringify(secondObject[key])
              ) {
                continue;
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

const firstObject = {
  a: 1,
  b: 2,
  c: {
    d: "Hello",
  },
};

const secondObject = {
  a: 1,
  b: 2,
  c: {
    d: "Hello",
  },
};

if (compareObject(firstObject, secondObject)) {
  console.log(
    " objects containing only primitive values or nested objects contain exactly the same values"
  );
} else {
  console.log(
    "objects do not only primitive values or nested objects contain exactly the same values"
  );
}
