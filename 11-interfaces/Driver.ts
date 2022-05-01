import { Food } from "./Food";
import { NasiKuning } from "./NasiKuning";
import { NasiUduk } from "./NasiUduk";

let myNasiKuning = new NasiKuning();
let myNasiUduk = new NasiUduk();

// declarate an array for food
let theFood: Food[] = [];

// add the foods
theFood.push(myNasiKuning);
theFood.push(myNasiUduk);

for (let tempFood of theFood) {
    console.log(tempFood.getBreakfast());
}