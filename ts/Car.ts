export class Car {
    year: number;

    constructor(){
        this.year = 0;
    }

    drive(speed: number) {
        console.log(`Driving at ${speed}`);
        
    }
}


const myCar = new Car();
console.log(myCar.year);
