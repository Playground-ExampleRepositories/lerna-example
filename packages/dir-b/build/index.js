"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const hash_sum_1 = __importDefault(require("hash-sum"));
const sum = (number) => {
    return (0, hash_sum_1.default)([number || 15]);
};
exports.sum = sum;
