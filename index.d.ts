/**
Top 100 cat names in alphabetical order.

@example
```
import {catNames} from 'cat-names';

catNames;
//=> ['Abby', 'Angel', …]
```
*/
export const catNames: readonly string[];

/**
Get a random cat name.

@example
```
import {randomCatName} from 'cat-names';

randomCatName();
//=> 'Max'
```
*/
export function randomCatName(): string;
