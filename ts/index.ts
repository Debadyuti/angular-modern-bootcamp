// console.log('Hi there!');

// const myName: string = 'Stephen';

// const ten: number = 10;
// const negative: number = -10000;
// const decimal: number = 10.00001;

// const yes: boolean = true;
// const nothingHere: null = null;
// const noDefinition: undefined = undefined;


// let myName = 'Stephen';


// const sentence = 'This is a sentence';

// sentence.includes('is');

// // const add = (a: number, b: number): number => {
// //     return a + b;
// // }

// // const joinStrings = (a: string, b: string): string => {
// //     return a + b;
// // }

// function add(a: number, b: number): number  {
//     return a + b;
// }

//----------------- INTERFACE -----------------------------
// interface PostGateKeeper {
//     title: string;
//     daysOld: number;
//     published: boolean;
// }

// const post: PostGateKeeper = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// };


// // const printPost = (postToPrint: { title: string, daysOld: number, published: boolean }) => {
// //     return `$(postToPrint.title) $(postToPrint.daysOld) days old`
// // }


// const printPost = (postToPrint: PostGateKeeper) => {
//     return `${postToPrint.title} ${postToPrint.daysOld} days old`
// }

// console.log(printPost(post));

//----------------- CLASS -----------------------------

// class Car {
//     color: string;
//     private year: number;

//     constructor(color: string, year: number) {
//         this.color = color;
//         this.year = year;
//     }

//     //------------ ALTERNATE SHORTCUT for PRIVATE/PUBLIC - 
//     //------------ REMOVE PROPERTY DECLARATION
//     // constructor(public color: string, private year: number) {

//     // }

//     // color = 'red';
//     // year = 2000;

//     drive() {
//         // console.log(this.year);
//         // console.log('Vroom');
//         this.putInGear();
//         this.pressPedal();
//         this.turnWheel();

//     }

//     private putInGear() {

//     }

//     private pressPedal(){

//     }

//     private turnWheel(){

//     }
// }

// const myCar = new Car('red', 2000);

// myCar.drive();

// console.log(myCar.color, myCar.year);

//--------------------- DECORATOR -------------------------------------

// const Component = (target: any) => {
//     console.log(target);
    
// };

// // @Component
// // class Car {
// //     @Component year: string;

// //     @Component
// //     drive(@Component speed: number) {

// //     }


// //     //Accessor
// //     @Component
// //     get year {

// //     }

// // }

// @Component
// class Car{

// }


// // Component does NOT get called for second time
// new Car();

//------------------ MODULE SYSTEM & IMPORTS ----------------------------

// import { Car } from './Car';

// const myCar = new Car();

//-------------------- INTERFACE AND CLASS --------------------------


// interface Driveable {
//     speed: number;
//     drive(): string;
// }

// class Car implements Driveable {
//     speed = 10;
//     drive() {
//         return (`I am driving at ${this.speed}`);
        
//     }
// }

// const myCar = new Car();

// const startDriving = (vehicle: Driveable) => {
//     vehicle.drive();
// };

// startDriving(myCar);

//------------------------ GENERIC CLASS ------------------------------

// class NumberHolder {
//     value: number;
// }

// const numberHolder = new NumberHolder();
// numberHolder.value = 10;

// class ValueHolder<TypeForValueProperty> {
//     value: TypeForValueProperty;
// }

// const numHolder = new ValueHolder<number>();
// numHolder.value = 10;

// const stringHolder = new ValueHolder<string>();
// stringHolder.value = 'Sample string';

// const booleanHolder = new ValueHolder<boolean>();
// booleanHolder.value = true;

//------------------------ GENERIC FUNCTIONS ------------------------------

class ValueHolder<T> {
    value: T;
}

const numberWrapper = (value: number): number[] => {
    return [value];
};

const valueWrapper = <T>(value: T): T[] => {
    return [value];
}

console.log(valueWrapper<number>(10));
console.log(valueWrapper<string>('a string'));
console.log(valueWrapper<boolean>(true));


