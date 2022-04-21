import "./button.scss";

const AddButton = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default AddButton;
