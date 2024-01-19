import { Car, ElectricCar } from './vehicle';

function main(): void {
    const car1 = new Car();
    try {
        car1.print();
    } catch (e) {
        console.log('Vehicle name is not set');
    }

    try{
        const car2 = car1.name('BMW').speed(300);
        car2.print();

        const electricCar = new ElectricCar();
        electricCar.batteryCapacity(100).name('Tesla').speed(200).print();
    } catch (e) {
        console.log(e);
    }
    
}

main();
