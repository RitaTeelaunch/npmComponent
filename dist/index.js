"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    NameForm: function() {
        return componentTest_default;
    }
});
module.exports = __toCommonJS(src_exports);
// src/componentTest.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var NameForm = function() {
    var _ref = _sliced_to_array((0, import_react.useState)(""), 2), firstName = _ref[0], setFirstName = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(""), 2), lastName = _ref1[0], setLastName = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react.useState)(false), 2), isClicked = _ref2[0], setIsClicked = _ref2[1];
    var handleButtonClick = function() {
        setIsClicked(!isClicked);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        style: {
            margin: "20px"
        },
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "First Name",
                        value: firstName,
                        onChange: function(e) {
                            return setFirstName(e.target.value);
                        },
                        style: {
                            marginRight: "10px",
                            padding: "5px"
                        }
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "Last Name",
                        value: lastName,
                        onChange: function(e) {
                            return setLastName(e.target.value);
                        },
                        style: {
                            padding: "5px"
                        }
                    })
                ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                style: {
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: isClicked ? "green" : "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                },
                onClick: handleButtonClick,
                children: isClicked ? "Clicked!" : "Click Me"
            })
        ]
    });
};
var componentTest_default = NameForm;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    NameForm: NameForm
});
