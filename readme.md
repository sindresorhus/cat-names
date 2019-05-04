# cat-names [![Build Status](https://travis-ci.org/sindresorhus/cat-names.svg?branch=master)](https://travis-ci.org/sindresorhus/cat-names)

> Get popular cat names

![](dofle.jpg)

The name list is just a [JSON file](cat-names.json) and can be used anywhere.

*I'm not accepting PRs for additional names.*


## Install

```
$ npm install cat-names
```


## Usage

```js
const catNames = require('cat-names');

catNames.all;
//=> ['Abby', 'Angel', …]

catNames.random();
//=> 'Max'
```


## API

### .all

Type: `string[]`

Top 100 cat names in alphabetical order.

### .random()

Type: `Function`

Random cat name.


## CLI

```
$ npm install --global cat-names
```

```
$ cat-names --help

  Examples
    $ cat-names
    Max

    $ cat-names --all
    Abby
    Angel
    …

  Options
    --all  Get all names instead of a random name
```


## Related

- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [random-tree-names](https://github.com/pguth/random-tree-names) - Get tree names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
