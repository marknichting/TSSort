"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.length = data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        [characters[leftIndex], characters[rightIndex]] = [characters[rightIndex], characters[leftIndex]];
        this.data = characters.join('');
    }
}
exports.StringCollection = StringCollection;
