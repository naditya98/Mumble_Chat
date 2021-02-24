"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.auth = exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

require("firebase/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _app["default"].initializeApp({
  apiKey: "AIzaSyBxymn1K0veZX5a6FNZza2Uz2P0vaONDrU",
  authDomain: "minor-8e390.firebaseapp.com",
  projectId: "minor-8e390",
  storageBucket: "minor-8e390.appspot.com",
  messagingSenderId: "1068167780817",
  appId: "1:1068167780817:web:4717ad10091bb864e3a8f0",
  measurementId: "G-C7Q5YQBTM4"
});

var db = firebaseApp.firestore();
exports.db = db;

var auth = _app["default"].auth();

exports.auth = auth;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;