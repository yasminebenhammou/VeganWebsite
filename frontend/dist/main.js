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

eval("const userId = sessionStorage.getItem('userId');\r\n\r\n\r\nconsole.log('page loaded ' + userId)\r\n\r\nif (!userId) {\r\n  navbar()\r\n} else {\r\n  navbarLogged()\r\n\r\n  fetch('http://127.0.0.1:3000/api/users/'+userId, {\r\n    method: \"GET\",\r\n    headers: { 'Content-Type': 'application/json' },\r\n  }).then(response => response.json())\r\n    .then((result) => {\r\n      console.log('you are logged in ' + JSON.stringify(result))\r\n    });\r\n    }\r\n\r\nfunction navbarLogged() {\r\n  document.getElementById(\"navbar\").innerHTML = \r\n  `<ul>\r\n  <li><a href=\"#home\" id=\"logo-home\">VegiGuide</a></li>\r\n  <li class=\"active-nav\"><a href=\"#home\">Home</a></li>\r\n  <li><a href=\"#nesws\">Restaurants</a></li>\r\n  <li><a href=\"#contact\">Recipes</a></li>\r\n  <li><a href=\"#search\"> <i data-feather=\"search\"></i></a></li>\r\n  <div class=\"dropdown-container\">\r\n    <li>Profile</li>\r\n    <div class=\"dropdown-content\">\r\n    <a href=\"#\">favorite recipe</a>\r\n    <a href=\"#\">favorite restaurants</a>\r\n\r\n    <button onclick=\"logout()\">logout</button>\r\n  </div>\r\n  </div>\r\n  </ul>`\r\n}\r\n\r\nfunction navbar() {\r\n  document.getElementById(\"navbar\").innerHTML = \r\n  `<ul>\r\n  <li><a href=\"#home\" id=\"logo-home\">VegiGuide</a></li>\r\n  <li class=\"active-nav\"><a href=\"#home\">Home</a></li>\r\n  <li><a href=\"#nesws\">Restaurants</a></li>\r\n  <li><a href=\"#contact\">Recipes</a></li>\r\n  <li><a href=\"#search\"> <i data-feather=\"search\"></i></a></li>\r\n  <div class=\"button-group-right\">\r\n    <li><button class=\"outline-button text-button\" onclick=\"openLoginPopup()\">login</button></li>\r\n    <li><button class=\"fill-button text-button\" onclick=\"openRegisterPopup()\">sign in</button></li>\r\n  </div>\r\n  </ul>`\r\n}\r\n\r\nfunction logout(){\r\n  sessionStorage.removeItem(\"userId\")\r\n  window.location.href = \"../dist/index.html\";\r\n}\r\n\r\n\r\nfunction openLoginPopup() {\r\n  document.getElementById(\"popup_login\").style.display = \"flex\";\r\n}\r\n\r\nfunction closeRegisterPopup() {\r\n  document.getElementById(\"popup_register\").style.display = \"none\";\r\n}\r\n\r\nfunction closeLoginPopup() {\r\n  document.getElementById(\"popup_login\").style.display = \"none\";\r\n}\r\n\r\n\r\nfunction openRegisterPopup() {\r\n  document.getElementById(\"popup_register\")\r\n    .style.display = \"flex\";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfeather.replace();\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

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