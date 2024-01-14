import { BankAccount } from "./bank";
interface Shape {
	area(): number;
	perimeter():number;
}

class Circle implements Shape {
	constructor(private radius:number){ }
	area() : number {
		return Math.PI * this.radius * this.radius;
	}
	perimeter(): number {
		return 2 * Math.PI * this.radius;
	}
}

class Rectangle implements Shape {
	constructor(private width:number, private height:number){

	}
	area(): number {
		return this.width * this.height;
	}
	perimeter(): number {
		return 2 * (this.width + this.height);
	}
}

let circle: Circle = new Circle(5)
let rectangle: Rectangle = new Rectangle(2, 3)
console.log(circle.area())
console.log(rectangle.area())

const myAccount = new BankAccount(1000)
console.log("balance",myAccount.balance)