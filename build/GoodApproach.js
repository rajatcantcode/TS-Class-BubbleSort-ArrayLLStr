"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
const NumbersCollection_1 = require("./GoodApproach/NumbersCollection");
const CharacterCollection_1 = require("./GoodApproach/CharacterCollection");
const LLCollection_1 = require("./GoodApproach/LLCollection");
class Sorter {
    Sort() {
        const { length } = this;
        for (let i = 1; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
const numArr = new NumbersCollection_1.NumbersCollection([5, 4, -2, 1, 0, 1, 3]);
numArr.Sort();
console.log(numArr.data); // [-2, 0, 1, 1, 3, 4, 5]
const str = new CharacterCollection_1.CharacterCollection("xDAbaladsa");
str.Sort();
console.log(str.data); // AaaabDdlsx
const ll = new LLCollection_1.LinkedList();
ll.add(1);
ll.add(-2);
ll.add(300);
ll.add(-300);
ll.Sort();
ll.print(); // -300 -> -2 -> 1 -> 300 -> null
