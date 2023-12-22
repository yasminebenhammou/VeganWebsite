/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('loaded bitch')\r\nfunction component() {\r\n    const element = document.createElement('div');\r\n  \r\n    // Lodash, currently included via a script, is required for this line to work\r\n    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n  \r\n    return element;\r\n  }\r\n\r\n  const user = sessionStorage.getItem('userId');\r\n\r\nif (!user) {\r\n    // window.location.href = \"frontend/login.html\";\r\n}\r\n\r\n// fetch('http://localhost:3000/auth/login', {\r\n//     method: \"POST\",\r\n//     headers: {'Content-Type': 'application/json'}, \r\n//     body: JSON.stringify({ uuid: uuid })\r\n    \r\n// }).then(response => response.json())\r\n// .then((result) => {\r\n//     if (!result.username) {\r\n//         window.location.href = \"frontend/login.html\";\r\n//     }\r\n    \r\n//     console.log('User is logged in!');\r\n// });\r\n\r\n\r\n  function openLoginPopup() {\r\n    document.getElementById(\"popup_login\").style.display  =  \"flex\";\r\n  }\r\n\r\n  function closeRegisterPopup()  {\r\n    document.getElementById(\"popup_register\").style.display  =  \"none\";\r\n  }\r\n\r\n  function closeLoginPopup()  {\r\n    document.getElementById(\"popup_login\").style.display  =  \"none\";\r\n  }\r\n\r\n\r\n  function openRegisterPopup() {\r\n    document.getElementById(\"popup_register\") \r\n    .style.display  =  \"flex\";\r\n  }\r\n\r\n\r\n  feather.replace();\r\n\r\n  document.body.appendChild(component());\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;