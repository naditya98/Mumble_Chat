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
  apiKey: "AIzaSyCykLI8fjtlMnz4ENaNkbpJMiW6jHL5MY8",
  authDomain: "final-8ffe0.firebaseapp.com",
  databaseURL: "https://final-8ffe0-default-rtdb.firebaseio.com",
  projectId: "final-8ffe0",
  storageBucket: "final-8ffe0.appspot.com",
  messagingSenderId: "321294050630",
  appId: "1:321294050630:web:dd4c5914296a439649f147",
  measurementId: "G-N4RCXJC7E3"
});

var db = firebaseApp.firestore();
exports.db = db;

var auth = _app["default"].auth();

exports.auth = auth;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;