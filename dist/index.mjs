// src/NameForm.tsx
import React, { useState } from "react";
var NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { margin: "20px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      style: { marginRight: "10px", padding: "5px" }
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      style: { padding: "5px" }
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      style: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: isClicked ? "green" : "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      },
      onClick: handleButtonClick
    },
    isClicked ? "Clicked!" : "Click Me"
  ));
};
var NameForm_default = NameForm;
export {
  NameForm_default as NameForm
};
//# sourceMappingURL=index.mjs.map