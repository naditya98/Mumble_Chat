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
  apiKey: "AIzaSyBvkUMaV-U3zLS32we1Gpxc2i9eIseb3Ac",
  authDomain: "mumble-f5b70.firebaseapp.com",
  databaseURL: "https://mumble-f5b70-default-rtdb.firebaseio.com",
  projectId: "mumble-f5b70",
  storageBucket: "mumble-f5b70.appspot.com",
  messagingSenderId: "595927879007",
  appId: "1:595927879007:web:d39701c23e30aedda0faea",
  measurementId: "G-WD2GDSWNWW"
});

var db = firebaseApp.firestore();
exports.db = db;

var auth = _app["default"].auth();

exports.auth = auth;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;