interface VehicleInterface {
    name(name: string): VehicleInterface;
    speed(speed: number): VehicleInterface;
    print(): void;
}

interface ElectricVehicleInterface extends VehicleInterface {
    batteryCapacity(batteryCapacity: number): ElectricVehicleInterface;
}

abstract class Vehicle {
    protected _name: string | null;
    protected _speed: number;

    constructor() {
        this._name = null;
        this._speed = 0;
    }

    public name(name: string): VehicleInterface {
        this._name = name;
        return this;
    }

    public speed(speed: number): VehicleInterface {
        this._speed = speed;
        return this;
    }

    public print(): void {
        console.log(`Vehicle name: ${this._name}, speed: ${this._speed}`);
    }
}

export class Car extends Vehicle {
    public print(): void {
        if (this._name === null) {
            throw new Error('Car name is not set');
            return;
        }
        console.log(`Car name: ${this._name}, speed: ${this._speed}`);
    }
}

export class ElectricCar extends Vehicle implements ElectricVehicleInterface {
    private _battery: number;

    constructor() {
        super();
        this._battery = 0;
    }

    public batteryCapacity(battery: number): ElectricCar {
        this._battery = battery;
        return this;
    }

    public print(): void {
        console.log(`Electric car name: ${this._name}, speed: ${this._speed}, battery: ${this._battery}`);
    }
}
