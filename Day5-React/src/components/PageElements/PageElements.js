import React from "react";
import Element from "../Element/Element";
import PageElementData from "./data";
const PageElement = () => {
  return PageElementData.map((element) => (
    <Element key={element.htmlElementName} {...element} />
  ));
};

export default PageElement;
