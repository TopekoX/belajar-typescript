import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectagle = new Rectangle(0, 0, 3, 6);

// declarate array
let theShape: Shape[] = [];

// add shape to array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectagle);

for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
}
