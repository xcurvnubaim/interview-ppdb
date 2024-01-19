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
exports.ElectricCar = exports.Car = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this._name = null;
        this._speed = 0;
    }
    Vehicle.prototype.name = function (name) {
        this._name = name;
        return this;
    };
    Vehicle.prototype.speed = function (speed) {
        this._speed = speed;
        return this;
    };
    Vehicle.prototype.print = function () {
        console.log("Vehicle name: ".concat(this._name, ", speed: ").concat(this._speed));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.print = function () {
        if (this._name === null) {
            throw new Error('Car name is not set');
            return;
        }
        console.log("Car name: ".concat(this._name, ", speed: ").concat(this._speed));
    };
    return Car;
}(Vehicle));
exports.Car = Car;
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        var _this = _super.call(this) || this;
        _this._battery = 0;
        return _this;
    }
    ElectricCar.prototype.batteryCapacity = function (battery) {
        this._battery = battery;
        return this;
    };
    ElectricCar.prototype.print = function () {
        console.log("Electric car name: ".concat(this._name, ", speed: ").concat(this._speed, ", battery: ").concat(this._battery));
    };
    return ElectricCar;
}(Vehicle));
exports.ElectricCar = ElectricCar;
