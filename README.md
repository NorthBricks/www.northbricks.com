
# The www.northbricks.com website
[![Build Status](https://travis-ci.org/FlaxHaxx/metalsmith-test.svg)](https://travis-ci.org/FlaxHaxx/metalsmith-test)
[![Dependency Status](https://img.shields.io/david/flaxhaxx/metalsmith-test.svg?style=flat-square)](https://david-dm.org/flaxhaxx/metalsmith-test)
[![peerDependency Status](https://img.shields.io/david/peer/flaxhaxx/metalsmith-test.svg?style=flat-square)](https://david-dm.org/flaxhaxx/metalsmith-test?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/flaxhaxx/metalsmith-test.svg?style=flat-square)](https://david-dm.org/flaxhaxx/metalsmith-test?type=dev)

The Northbricks.com website. Changes in master branch will trigger e new deployment to gh-pages branch which is the website at http://www.northbricks.com.

## Build

You can build the website with `node` or `make`. The result is a static website in the `build` folder.

Build with `make`.
```sh
make build
```

Build with `node`.
```sh
npm install
node index.js
```
