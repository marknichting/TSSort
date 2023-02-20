import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';


const numCollection = new NumberCollection([7, 2, 5, -5]);
numCollection.sort();
console.log(numCollection);

const stringCollection = new StringCollection('chocolate');
stringCollection.sort();
console.log(stringCollection);


const list = new LinkedList();
list.add(7);
list.add(1);
list.add(25);
list.sort();
list.print();

