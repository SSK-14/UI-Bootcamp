const PageElementData = [
  {
    htmlElementName: "section",
    innerHTML: "Hello World!",
    responsive: {
      sm: "2",
      md: "8",
      lg: "6",
      xl: "12",
    },
    style: {
      border: "10px solid blue",
      backgroundColor: "#edeff2",
      color: "#4d4d4d",
    },
    children: {
      htmlElementName: "div",
      innerHTML: "Welcome you all",
      responsive: {
        sm: "2",
        md: "8",
        lg: "6",
        xl: "12",
      },
      style: {
        border: "4px solid red",
        backgroundColor: "rgb(0 0 0)",
        color: "rgb(255 255 255)",
      },
    },
  },
  {
    htmlElementName: "div",
    innerHTML: "Welcome you all",
    responsive: {
      sm: "2",
      md: "4",
      lg: "6",
      xl: "12",
    },
    style: {
      border: "12px solid green",
      backgroundColor: "rgb(0 0 0)",
      color: "rgb(255 255 255)",
    },
  },
];

export default PageElementData;
