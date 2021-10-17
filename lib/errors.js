"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNAUTHORIZED_ERROR = exports.INVALID_TOKEN_ERROR = exports.NO_TOKEN_ERROR = exports.DB_NOT_INITILIZED_ERROR = exports.NO_AUTH_PROVIDERS = exports.NOT_INITILIZED_ERROR = void 0;
exports.NOT_INITILIZED_ERROR = new AuthError(new Error("not-initialized"), "not-initialized", "You should initialize FirebaseUserManagement before using it.");
exports.NO_AUTH_PROVIDERS = new AuthError(new Error("no-auth-providers"), "no-auth-providers", "You should pass at least one AuthProvider upon initializing FirebaseUserManagement");
exports.DB_NOT_INITILIZED_ERROR = new AuthError(new Error("not-initialized"), "not-initialized", "You should initialize a database to resolve a user.");
exports.NO_TOKEN_ERROR = new AuthError(new Error("no-token-found"), "not-token-found", "No token was found in the Authorization header.");
exports.INVALID_TOKEN_ERROR = new AuthError(new Error("invalid-token"), "invalid-token", "The token is invalid");
exports.UNAUTHORIZED_ERROR = new AuthError(new Error("unauthorized"), "unauthorized", "You're not allowed to perform this operation");
//# sourceMappingURL=errors.js.map