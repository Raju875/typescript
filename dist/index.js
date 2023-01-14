"use strict";
var indexMessage = "I am your index.ts->index.js";
console.log(indexMessage);
var firstName;
firstName = "Al Amin";
var lastName = "Raju";
console.log(firstName + " " + lastName);
var obj = [];
obj.push({ id: 1, name: "Rana", address: "BD" });
obj.push({ id: 2, name: "Raju", address: "BD" });
obj.push({ id: 3, name: "Raj", address: "BD" });
obj.forEach(function (element) {
    console.log("#Sl: ".concat(element.id, "-> Name: ").concat(element.name, " -> Address: ").concat(element.address));
});
var arr1 = [];
arr1.push("Al Amin");
arr1.push("Raju");
console.log(arr1);
var arr2 = ["Al Amin", "Raju"];
console.log(arr2);
var arr3 = [1];
arr3.push(4);
console.log(arr3);
var arr4 = ["Raju", 875, 1, "good"];
console.log(arr4);
var simpleTupple = [
    "Al Amin Raju",
    875,
    true,
    777,
];
simpleTupple.push(77);
console.log(simpleTupple);
var readonlyTupple = [555];
console.log(readonlyTupple);
var nameTupple = [4, 5, "good"];
console.log(nameTupple);
var fun1;
var fun2;
fun1 = function () { return console.log("I am Fun1"); };
fun2 = function (param1, param2) {
    if (param2 === void 0) { param2 = false; }
    return console.log("First param is: ".concat(param1, " & second param is: ").concat(param2));
};
fun1();
fun2("good", true);
var C1 = (function () {
    function C1() {
        this.f1 = function (param) {
            return console.log("i am from class C1 and function f1 with param: ".concat(param));
        };
    }
    return C1;
}());
var c1 = new C1();
c1.f1(4);
//# sourceMappingURL=index.js.map