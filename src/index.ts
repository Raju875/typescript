/* important TS ccnfig link: https://dev.to/ahmedmohmd/the-most-important-config-options-in-typescript-88p */

let indexMessage: string = "I am your index.ts->index.js";
console.log(indexMessage);

// Simple Type
let firstName: string;
firstName = "Al Amin";
let lastName: any = "Raju"; // any is a special type
console.log(firstName + " " + lastName);

// Object type
let obj: {
  id: number;
  name: string;
  address: string | number;
}[] = [];

obj.push({ id: 1, name: "Rana", address: "BD" });
obj.push({ id: 2, name: "Raju", address: "BD" });
obj.push({ id: 3, name: "Raj", address: "BD" });

obj.forEach((element) => {
  console.log(
    `#Sl: ${element.id}-> Name: ${element.name} -> Address: ${element.address}`
  );
});

// Array
let arr1: string[] = [];
arr1.push("Al Amin");
arr1.push("Raju");
console.log(arr1);

let arr2: readonly string[] = ["Al Amin", "Raju"];
console.log(arr2);

let arr3: number[] = [1];
arr3.push(4);
console.log(arr3);

let arr4: (string | number)[] = ["Raju", 875, 1, "good"];
console.log(arr4);

// Tupple (predefile array index type and length)
let simpleTupple: [string, number, boolean, number] = [
  "Al Amin Raju",
  875,
  true,
  777,
];
simpleTupple.push(77);
console.log(simpleTupple);

let readonlyTupple: readonly [number] = [555];
// tup2.push(77);
console.log(readonlyTupple);

let nameTupple: [one: number, two: number, there: string] = [4, 5, "good"];
console.log(nameTupple);

// function signature
let fun1: () => void;
let fun2: (param1: string | number, param2?: boolean) => void;

fun1 = () => console.log("I am Fun1");
fun2 = (param1: string | number, param2: boolean = false) =>
  console.log(`First param is: ${param1} & second param is: ${param2}`);

fun1();
fun2("good", true);

// Class
class C1 {
  f1 = (param: string | number) =>
    console.log(`i am from class C1 and function f1 with param: ${param}`);
}
let c1 = new C1();
c1.f1(4);
