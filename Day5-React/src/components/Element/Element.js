import React from "react";
import "./styles.css";

const Element = (props) => {
  const { htmlElementName, innerHTML, style, children, responsive } =
    props;
  const CustomTag = `${htmlElementName}`;
  var responsiveClassName = Object.entries(responsive)
    .map((x) => x.join("-"))
    .join(" ");

  return (
    <CustomTag className={responsiveClassName} style={style}>
      {innerHTML} {children ? <Element {...children} /> : null}
    </CustomTag>
  );
};

export default Element;
