"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
// export class NumberCollection implements Sortable{
class NumberCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.length = data.length;
    }
    // alternatively can use a getter. allows you to call length as prop not a method
    // get length() {
    //   return this.data.length;
    // }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const { data } = this;
        [data[leftIndex], data[rightIndex]] = [data[rightIndex], data[leftIndex]];
    }
}
exports.NumberCollection = NumberCollection;
