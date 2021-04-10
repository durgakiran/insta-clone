"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
var custom_error_1 = require("./custom-error");
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError() {
        var _this = _super.call(this, 'Server Error...') || this;
        _this.reason = 'This is not you, this is us : (';
        _this.statusCode = 500;
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.prototype.serializeErrors = function () {
        return [
            {
                message: this.reason
            }
        ];
    };
    return ServerError;
}(custom_error_1.CustomError));
exports.ServerError = ServerError;
