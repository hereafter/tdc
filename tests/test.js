"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnTestSimple = exports.TestClass = void 0;
const dname_1 = require("../src/decorators/dname");
const dconvert_1 = require("../src/dconvert");
const dconverter_1 = require("../src/decorators/dconverter");
class TestClass {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    get sum() {
        return this.x + this.y;
    }
}
__decorate([
    (0, dname_1.DName)('a'),
    (0, dconverter_1.DConvert)(t => 2 * t)
], TestClass.prototype, "x", void 0);
exports.TestClass = TestClass;
function fnTestSimple() {
    var _a;
    const data = { a: 100, b: 100 };
    const obj = (0, dconvert_1.convert)(TestClass, data);
    console.log((_a = obj === null || obj === void 0 ? void 0 : obj.sum) !== null && _a !== void 0 ? _a : "<!>");
}
exports.fnTestSimple = fnTestSimple;
