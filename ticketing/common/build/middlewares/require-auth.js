"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var not_authorised_error_1 = require("../errors/not-authorised.error");
var requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authorised_error_1.NotAuthorizedError();
    }
    next();
};
exports.requireAuth = requireAuth;
