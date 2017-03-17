# movie-quotes [![Build Status](https://travis-ci.org/vilaboim/movie-quotes.svg?branch=master)](https://travis-ci.org/vilaboim/movie-quotes)

> Get popular movie quotes

![](yoda.gif)

The name list is just a [JSON file](movie-quotes.json) and can be used wherever.

*Not accepting PRs for additional quotes.*


## Install

```
$ npm install --save movie-quotes
```


## Usage

```js
const movieQuotes = require('movie-quotes');

movieQuotes.random();
//=> 'Max'
```


## API

### .all

Type: `array`

Top 100 best movie quotes according AFI.

### .random()

Type: `function`

Random movie quote.


## CLI

```
$ npm install --global movie-quotes
```

```
$ movie-quotes --help

  Examples
    $ movie-quotes
    "Show me the money!" Jerry Maguire

    $ movie-quotes --all
	"Frankly, my dear, I don't give a damn." Gone with the Wind
    "I'm gonna make him an offer he can't refuse." The Godfather
    ...

  Options
    --all   Get all quotes instead of a random quote
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [random-tree-names](https://github.com/pguth/random-tree-names) - Get tree names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © [Lucas Vilaboim](http://vilaboim.com)
