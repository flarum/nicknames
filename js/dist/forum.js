/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/NicknameModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/NicknameModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NicknameModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);





var NicknameModal = /*#__PURE__*/function (_Modal) {
  function NicknameModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NicknameModal, _Modal);
  var _proto = NicknameModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.nickname = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.displayName());
  };
  _proto.className = function className() {
    return 'NickameModal Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-nicknames.forum.change_nickname.title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      type: "text",
      autocomplete: "off",
      name: "nickname",
      className: "FormControl",
      bidi: this.nickname,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-nicknames.forum.change_nickname.submit_button')))));
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    if (this.nickname() === flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.displayName()) {
      this.hide();
      return;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.save({
      nickname: this.nickname()
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this))["catch"](function () {
      _this.loading = false;
      m.redraw();
    });
  };
  return NicknameModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/extend.ts":
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default())) //
.attribute('canEditNickname')]);

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/EditUserModal */ "flarum/common/components/EditUserModal");
/* harmony import */ var flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NicknameModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NicknameModal */ "./src/forum/components/NicknameModal.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");










flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('flarum/nicknames', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'accountItems', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (this.user.canEditNickname()) {
      items.add('changeNickname', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "Button",
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_NicknameModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-nicknames.forum.settings.change_nickname_button')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'oninit', function () {
    this.nickname = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.attrs.user.displayName());
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'fields', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (!this.attrs.user.canEditNickname()) return;
    items.add('nickname', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-nicknames.forum.edit_user.nicknames_heading')), m("input", {
      className: "FormControl",
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-nicknames.forum.edit_user.nicknames_text')),
      bidi: this.nickname
    })), 100);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_components_EditUserModal__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'data', function (data) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (!this.attrs.user.canEditNickname()) return;
    if (this.nickname() !== this.attrs.user.displayName()) {
      data.nickname = this.nickname();
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oninit', function () {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    this.nickname = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.attrs.nickname || '');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'onready', function () {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('setNicknameOnRegistration') && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('randomizeUsernameOnRegistration')) {
      this.$('[name=nickname]').select();
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'fields', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('setNicknameOnRegistration')) {
      items.add('nickname', m("div", {
        className: "Form-group"
      }, m("input", {
        className: "FormControl",
        name: "nickname",
        type: "text",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-nicknames.forum.sign_up.nickname_placeholder')),
        bidi: this.nickname,
        disabled: this.loading || this.isProvided('nickname'),
        required: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('randomizeUsernameOnRegistration')
      })), 25);
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('randomizeUsernameOnRegistration')) {
        items.remove('username');
      }
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'submitData', function (data) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('displayNameDriver') !== 'nickname') return;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('setNicknameOnRegistration')) {
      data.nickname = this.nickname();
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('randomizeUsernameOnRegistration')) {
        var arr = new Uint32Array(2);
        crypto.getRandomValues(arr);
        data.username = arr.join('');
      }
    }
  });
});

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/EditUserModal":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/EditUserModal']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/EditUserModal'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map