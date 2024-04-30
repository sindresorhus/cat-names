import uniqueRandomArray from 'unique-random-array';
import catNames from './cat-names.json' with {type: 'json'};

export {catNames};

export const randomCatName = uniqueRandomArray(catNames);
