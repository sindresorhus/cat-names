# cat-names [![Build Status](https://travis-ci.org/sindresorhus/cat-names.svg?branch=master)](https://travis-ci.org/sindresorhus/cat-names)

> Get popular cat names

![](dofle.jpg)

The name list is just a [JSON file](cat-names.json) and can be used wherever.

*Not accepting PRs for additional names.*


## Install

```
$ npm install --save cat-names
```


## Usage

```js
var catNames = require('cat-names');

catNames.random();
//=> Max
```


## API

### .all

Type: `array`

Top 100 cat names in alphabetical order.

### .random()

Type: `function`

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
    ...

  Options
    --all   Get all names instead of a random name
```


## Related

- [`dog-names`](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [`superb`](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
