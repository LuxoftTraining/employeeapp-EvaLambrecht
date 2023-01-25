/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    font-family: Verdana;\r\n}\r\nbutton, input, select {\r\n    outline: none;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    background-color: #f1f1f1;\r\n    border: none;\r\n}\r\n\r\nbutton {\r\n   cursor: pointer; \r\n}\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Style for buttons used for opening content */\r\n.tab button {\r\n    background-color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    transition: 1s;\r\n    font-size: 13px;\r\n    margin: 0px;\r\n}\r\n\r\n/* Change tab background with mouse pointer */\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create class for active tab */\r\n.tab button.active {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Style for tab content */\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;AAChB;;AAEA;GACG,eAAe;AAClB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA,+CAA+C;AAC/C;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,cAAc;IACd,eAAe;IACf,WAAW;AACf;;AAEA,6CAA6C;AAC7C;IACI,sBAAsB;AAC1B;;AAEA,gCAAgC;AAChC;IACI,sBAAsB;AAC1B;;AAEA,0BAA0B;AAC1B;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;AACpB","sourcesContent":["body {\r\n    font-family: Verdana;\r\n}\r\nbutton, input, select {\r\n    outline: none;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    background-color: #f1f1f1;\r\n    border: none;\r\n}\r\n\r\nbutton {\r\n   cursor: pointer; \r\n}\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Style for buttons used for opening content */\r\n.tab button {\r\n    background-color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    transition: 1s;\r\n    font-size: 13px;\r\n    margin: 0px;\r\n}\r\n\r\n/* Change tab background with mouse pointer */\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Create class for active tab */\r\n.tab button.active {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Style for tab content */\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/employees/employees-json.js":
/*!*****************************************!*\
  !*** ./src/employees/employees-json.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

    employees: [
      {
       id: 1,
       name: "Peter",
       surname: "Peterson",
       department: "IT",
       dateOfBirth: "2000-01-01"
      },
      {
        id: 2,
        name: "Simon",
        surname: "Sayer",
        department: "Sales"
       },
       {
        id: 3,
        name: "Hugo",
        surname: "Port",
        department: "Finance"
       },
       {
        id: 4,
        name: "Hugo",
        surname: "Jusic",
        department: "ABC"
       }
    ]

   });
   

/***/ }),

/***/ "./src/employees/model/Employee.js":
/*!*****************************************!*\
  !*** ./src/employees/model/Employee.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Employee": () => (/* binding */ Employee),
/* harmony export */   "jsonToEmployees": () => (/* binding */ jsonToEmployees)
/* harmony export */ });
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ "./src/employees/model/Person.js");
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employees-json */ "./src/employees/employees-json.js");



class Employee extends _Person__WEBPACK_IMPORTED_MODULE_0__.Person {
    constructor(name, surname, department) {
        super(name, surname);
        this.department = department;
    }
    
    static fromJSON(obj) {
        return Object.assign(new Employee(), obj);
    }  

}

window.Employee = Employee;

function jsonToEmployees(employeesJSON) {
    let employees = [];
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e));
    }
    return employees;
}

window.allEmployees = function() {
    return jsonToEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
}


/***/ }),

/***/ "./src/employees/model/Person.js":
/*!***************************************!*\
  !*** ./src/employees/model/Person.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person)
/* harmony export */ });
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    get fullName() {
        return this.name + " " + this.surname;
    }
    
    get age() {
        if (!this._dateOfBirth) {
            return "";
        }   
        let ageAsDateFromEpoch = new Date(Date.now() - this._dateOfBirth.getTime());
        let age = Math.abs(ageAsDateFromEpoch.getUTCFullYear() - 1970);
        return " <b>Age:</b> " + age;
    }

    get dateOfBirth() {
        return this._dateOfBirth ? " <b>Date of birth:</b> " + this.formatDate(this._dateOfBirth) : "";
    }

    get phones() {
        if (!this._phones) {
            return "";
        }
        var retStr = "";
        for (let phoneNo of this._phones) {
            retStr += phoneNo + " ";
        }
        return retStr;
    }

    set dateOfBirth(date) {
        this._dateOfBirth = new Date(date);
    }
       
    set phone(phoneNo) {
        if (!this._phones) {
            this["_phones"] = [phoneNo];
        } else {
            this._phones.push(phoneNo);
        }
    }


    formatDate(date) {
        let day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
        let month = date.getMonth()+1 < 10? "0"+(date.getMonth()+1) : date.getMonth()+1;
        let year = date.getFullYear();
        return day + "." + month + "." + year;
    }

    toString() {
        const phones = this.phones ? `List of phones: ${this.phones}` : "";
        return `${this.fullName} \
        ${this.dateOfBirth} ${this.age} ${phones}`;
    }
    
    static fromJSON(obj) {
        return Object.assign(new Person(), obj);
    }
    
   
}

window.Person = Person;

/***/ }),

/***/ "./src/employees/service.js":
/*!**********************************!*\
  !*** ./src/employees/service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployee": () => (/* binding */ addEmployee),
/* harmony export */   "assignSendOnEnter": () => (/* binding */ assignSendOnEnter),
/* harmony export */   "fillSelect": () => (/* binding */ fillSelect),
/* harmony export */   "findById": () => (/* binding */ findById),
/* harmony export */   "getEmployees": () => (/* binding */ getEmployees),
/* harmony export */   "getEmployeesOptions": () => (/* binding */ getEmployeesOptions),
/* harmony export */   "removeEmployee": () => (/* binding */ removeEmployee),
/* harmony export */   "searchEmployees": () => (/* binding */ searchEmployees),
/* harmony export */   "setEmployeeManager": () => (/* binding */ setEmployeeManager)
/* harmony export */ });
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-json */ "./src/employees/employees-json.js");




function getEmployees() { 
    return _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees 
};

//3
function findByName(name, surname) {
    var result = [];
    for (var employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) {
            result.push(employee);
        }
    }
    return result;
}

console.log(findByName("Hugo", ""));

//4
function addEmployee(name, surname) {
    try {
        if (!name || !surname || name == "" || surname == "") throw new Error("Name or Surname not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let id = 0;
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (employee.id > id) {
            id = employee.id;
        }
    }
    id++;
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.push({"id": id, "name": name, "surname": surname, "department": null});
    return id;
}

addEmployee("Sepp", "Brunner");
console.log(_employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees);

//5
function removeEmployee(id) {
    try {
        if (!id || id == "") throw Error("ID not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let index = 0;
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (employee.id === id) {
          break;
        }
        index ++;
    }
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.splice(index, 1);
}

//6
function showEmployee(employee) {
    let keys = Object.keys(employee);
    for (let key of keys) {
        console.log(key, employee[key]);
    }
}

//LESSON 3:

//1 & 2:
const employeeMap = {};
function findById(id) {
    if (employeeMap[id]) {
        console.log(employeeMap[id]);
        return employeeMap[id];
    }
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (employee.id == id) {
            employeeMap[employee.id] = employee;
            console.log(employee);
            return employee;
        }
    }
   // console.log("Sorry, employee " + id + " not found.");
   throw Error("Sorry, employee with id = " + id + " not found!");
}

//7
function getEmployeeInfo(id) {
    let employee = null;
    //Again, train for .. of 
    for (let empl of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (empl.id == id) {
            employee = empl;
        }
    }
    let employeeStr = "";
    if (employee) {
        let birthday = employee.dateOfBirth ? formatDate(new Date(employee.dateOfBirth)) : "-";
        let phones = employee.phones ? employee.phones : "-";
        employeeStr = "Name: "+employee.name+", Surname: "+employee.surname+", Birthday: "+birthday;
        employeeStr += ", Age: "+getAge(employee.id)+", Phone numbers: "+phones;
    }
    return employeeStr;
}

//console.log(getEmployeeInfo(1));

//8
function testEmployee() {
    addPhone(2, 305968498);
    addPhone(2, 385895037);
    setDateOfBirth(2, new Date(1999,1,18));
    console.log(getEmployeeInfo(2));
}
   
//testEmployee();

//9
function getEmployeeJSON(id) {
    let employee = null;
    for (let empl of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (empl.id == id) {
            employee = empl;
        }
    }
    let employeeJson = {};
    if (employee) {
        employeeJson = JSON.stringify(employee);
    }
    return employeeJson;
}

console.log(getEmployeeJSON(1));

//2.2
function fillSelect(select, values, selectedValue) {
    const emptyOption = document.createElement("option");
    select.appendChild(emptyOption);
    for (let value of values) {
        const newOption = document.createElement("option");
        newOption.text = value.text;
        newOption.value = value.value;
        if (newOption.value == selectedValue)  {
            newOption.selected = true;
        }
        select.appendChild(newOption);
    }      
}

/*
fillSelect(document.getElementById("managerSelect"), [
    { text: "John Johnson", value: 133 },
    { text: "Peter Peterson", value: 134 }], 134);
*/

function getEmployeesOptions() {
    let employeeOptions = [];
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        employeeOptions.push( {text: employee.name + " " + employee.surname, value: employee.id} );
    }
    return employeeOptions;
}

function setEmployeeManager(employeeId, managerId) {
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (employee.id == employeeId) {
            employee. managerRef = managerId;
        }
    }
}

function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if ((!name || employee.name == name) && (!surname || employee.surname == surname) && (!managerRef || employee.managerRef == managerRef)) {
            results.push(employee);
        }
    }
    return results;
}

function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll("#"+paneId+" input");
    for (let input of allInput) {
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.querySelector("#"+paneId+" button").click();
            }
        });
    }
}


/***/ }),

/***/ "./src/employees/ui.js":
/*!*****************************!*\
  !*** ./src/employees/ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployeeUI": () => (/* binding */ addEmployeeUI),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "removeEmployeeUI": () => (/* binding */ removeEmployeeUI),
/* harmony export */   "runUI": () => (/* binding */ runUI),
/* harmony export */   "searchEmployeeUI": () => (/* binding */ searchEmployeeUI)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/employees/service.js");
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-json */ "./src/employees/employees-json.js");
/* harmony import */ var _model_Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Employee */ "./src/employees/model/Employee.js");






const PLACEHOLDER = "employeesPlaceholder";

function runUI() {
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.assignSendOnEnter)("searchPane","searchEmployeesButton");
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.assignSendOnEnter)("addPane", "addEmployeeButton");
    document.getElementById("searchButton").click();
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.fillSelect)(document.getElementById("managerSelect"), (0,_service__WEBPACK_IMPORTED_MODULE_0__.getEmployeesOptions)());
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.fillSelect)(document.getElementById("managerSearch"), (0,_service__WEBPACK_IMPORTED_MODULE_0__.getEmployeesOptions)());
 }
 
function clearEmployeesPlaceholder() {
    let emplPlaceholderElem = document.getElementById(PLACEHOLDER);
    emplPlaceholderElem.innerHTML = "";
}

function showEmployees(employees) {
    clearEmployeesPlaceholder();
    let emplUl = document.createElement("ul");
   // for (let employee of employees) {
    for (let employee of (0,_model_Employee__WEBPACK_IMPORTED_MODULE_2__.jsonToEmployees)(employees)) {
        var newLi = document.createElement("li");
        // let managerHtml = "";
        //newLi.innerHTML = employee.name + " " + employee.surname + " ";
        newLi.innerHTML = employee;
        if (employee.managerRef) {
            // let manager = findById(employee.managerRef);
            // managerHtml = "<b>Manager:</b> " + manager.name +" "+manager.surname;
            let managerSpan = document.createElement("span");
            let managerSelect = document.createElement("select");
            (0,_service__WEBPACK_IMPORTED_MODULE_0__.fillSelect)(managerSelect, (0,_service__WEBPACK_IMPORTED_MODULE_0__.getEmployeesOptions)(), employee.managerRef);
            managerSelect.addEventListener('change', () => employee.managerRef = managerSelect.value);
            managerSpan.innerHTML = ", <b>Manager:</b> ";
            newLi.appendChild(managerSpan);
            newLi.appendChild(managerSelect);
        }
        // newLi.innerHTML = employee.name + " " + employee.surname + ", " + managerHtml + " " ;
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener('click', () => removeEmployeeUI(employee.id));
        newLi.appendChild(removeButton);
        emplUl.appendChild(newLi);
    }
    document.getElementById(PLACEHOLDER).appendChild(emplUl);
}

function addEmployeeUI() {
    const name = document.getElementById("nameInput").value;
    const surname = document.getElementById("surnameInput").value;
    let errorMsg = "";
    if (!name || name == "") {
        errorMsg = "Please enter a name!";
        document.getElementById("nameInput").style.backgroundColor = 'pink';
    }
    if (!surname || surname == "") {
        errorMsg += " Please enter a surename!";
        document.getElementById("surnameInput").style.backgroundColor = 'pink';
    } 
    if (errorMsg == "") {
        document.getElementById(PLACEHOLDER).innerHTML = ""; //reset
        const employeeId = (0,_service__WEBPACK_IMPORTED_MODULE_0__.addEmployee)(name, surname);
        const managerId = document.getElementById("managerSelect").value;
        (0,_service__WEBPACK_IMPORTED_MODULE_0__.setEmployeeManager)(employeeId, managerId);
        showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
        document.getElementById("nameInput").value = "";
        document.getElementById("surnameInput").value = "";
    } else {
        document.getElementById(PLACEHOLDER).innerHTML = errorMsg;
    }
}

function removeEmployeeUI(id) {
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.removeEmployee)(id);
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"].employees);
}
   
function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;
    const employees  = (0,_service__WEBPACK_IMPORTED_MODULE_0__.searchEmployees)(name, surname, managerRef);
    showEmployees(employees);
}

/**
 * Activates the selected tab
 * @param evt event invoking activation
 * @param id tab identifier
 */
function openTab(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employees_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/ui */ "./src/employees/ui.js");
/* harmony import */ var _employees_model_Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees/model/Employee */ "./src/employees/model/Employee.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");






window.addEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.addEmployeeUI;
window.openTab = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.openTab;
window.searchEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.searchEmployeeUI;
window.removeEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.removeEmployeeUI;

(0,_employees_ui__WEBPACK_IMPORTED_MODULE_0__.runUI)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map