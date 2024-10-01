'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Default.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerPOST = function registerPOST (req, res, next, body) {
  Default.registerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
