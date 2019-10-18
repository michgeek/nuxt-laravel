"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const consola_1 = __importDefault(require("consola"));
const constants_1 = require("./constants");
exports.logger = consola_1.default.withScope(constants_1.scope);
exports.addBadgeMessage = (options, enabled = true) => {
    const status = enabled
        ? chalk_1.default.green.bold('enabled')
        : chalk_1.default.red.bold('disabled');
    options.cli.badgeMessages.push(`Laravel support is ${status}`);
};