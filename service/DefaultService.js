'use strict';


/**
 * Log in a user
 * This endpoint allows users to log in by providing their username and password. If the credentials are valid, a JWT token will be returned.
 *
 * body Login_body User login credentials
 * returns inline_response_200
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a new user
 * This endpoint allows users to register by providing basic information.
 *
 * body Register_body User registration data
 * returns inline_response_201
 **/
exports.registerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "User registered successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

