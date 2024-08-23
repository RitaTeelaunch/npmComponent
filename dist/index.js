"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NameForm: () => NameForm_default
});
module.exports = __toCommonJS(src_exports);

// src/component/nameForm/NameForm.tsx
var import_react = __toESM(require("react"));
var NameForm = () => {
  const [firstName, setFirstName] = (0, import_react.useState)("");
  const [lastName, setLastName] = (0, import_react.useState)("");
  const [isClicked, setIsClicked] = (0, import_react.useState)(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "container" }, /* @__PURE__ */ import_react.default.createElement("p", null, " Welcome "), /* @__PURE__ */ import_react.default.createElement("div", { className: "inputGroup" }, /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "First Name",
      value: firstName,
      onChange: (e) => setFirstName(e.target.value),
      className: "input"
    }
  ), /* @__PURE__ */ import_react.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Last Name",
      value: lastName,
      onChange: (e) => setLastName(e.target.value),
      className: "input"
    }
  )), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: `${"button"} ${isClicked ? "buttonClicked" : ""}`,
      onClick: handleButtonClick
    },
    isClicked ? "Clicked!" : "Click Me"
  ));
};
var NameForm_default = NameForm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NameForm
});
//# sourceMappingURL=index.js.map