// src/component/nameForm/NameForm.tsx
import React, { useState } from "react";

// src/component/styles/NameForm.module.css
var NameForm_default = {};

// src/component/nameForm/NameForm.tsx
var NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ React.createElement("div", { className: NameForm_default.container }, /* @__PURE__ */ React.createElement("p", null, " Welcome "), /* @__PURE__ */ React.createElement("div", { className: NameForm_default.inputGroup }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      className: NameForm_default.input
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      className: NameForm_default.input
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `${NameForm_default.button} ${isClicked ? NameForm_default.buttonClicked : ""}`,
      onClick: handleButtonClick
    },
    isClicked ? "Clicked!" : "Click Me"
  ));
};
var NameForm_default2 = NameForm;
export {
  NameForm_default2 as NameForm
};
//# sourceMappingURL=index.mjs.map