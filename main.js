"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicle_1 = require("./vehicle");
function main() {
    var car1 = new vehicle_1.Car();
    try {
        car1.print();
    }
    catch (e) {
        console.log('Vehicle name is not set');
    }
    try {
        var car2 = car1.name('BMW').speed(300);
        car2.print();
        var electricCar = new vehicle_1.ElectricCar();
        electricCar.batteryCapacity(100).name('Tesla').speed(200).print();
    }
    catch (e) {
        console.log(e);
    }
}
main();
