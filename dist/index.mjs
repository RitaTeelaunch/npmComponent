// src/component/nameForm/NameForm.tsx
import React, { useState } from "react";
var NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("p", null, " Welcome "), /* @__PURE__ */ React.createElement("div", { className: "inputGroup" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      className: "input"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      className: "input"
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `${"button"} ${isClicked ? "buttonClicked" : ""}`,
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