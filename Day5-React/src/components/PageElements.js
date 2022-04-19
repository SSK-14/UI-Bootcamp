import React from "react";
import Element from "./Element";

const PageElement = () => {
  let PageElement = [
    {
      htmlElementName: "Section",
      innerHTML: "Hello World!",
      style: {
        border: "1px solid blue",
        backgroundColor: "#edeff2",
        color: "#4d4d4d",
      },
    },
    {
      htmlElementName: "div",
      innerHTML: "Welcome you all",
      style: {
        border: "1px solid green",
        backgroundColor: "#edeff2",
        color: "#4d4d4d",
      },
    },
  ];

  return PageElement.map((element) => <Element {...element} />);
};

export default PageElement;
