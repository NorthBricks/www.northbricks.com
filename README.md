
# The www.northbricks.com website
[![Build Status](https://travis-ci.org/NorthBricks/www.northbricks.com.svg)](https://travis-ci.org/NorthBricks/www.northbricks.com)
[![Dependency Status](https://img.shields.io/david/Northbricks/www.northbricks.com.svg?style=flat-square)](https://david-dm.org/Northbricks/www.northbricks.com)
[![peerDependency Status](https://img.shields.io/david/peer/Northbricks/www.northbricks.com.svg?style=flat-square)](https://david-dm.org/Northbricks/www.northbricks.com?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/Northbricks/www.northbricks.com.svg?style=flat-square)](https://david-dm.org/Northbricks/www.northbricks.com?type=dev)

The Northbricks.com website. Changes in master branch will trigger new deployment to gh-pages branch, which is the website at http://www.northbricks.com.

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
