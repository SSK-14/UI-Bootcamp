import React from "react";

const Element = (props) => {
  const { htmlElementName, innerHTML, style } = props;
  const CustomTag = `${htmlElementName}`;

  return <CustomTag style={style}>{innerHTML}</CustomTag>;
};

export default Element;
