# cat-generator

[![GitHub issues](https://img.shields.io/github/issues/thejordanprice/cat-generator.svg)](https://github.com/thejordanprice/cat-generator/issues)
[![GitHub stars](https://img.shields.io/github/stars/thejordanprice/cat-generator.svg)](https://github.com/thejordanprice/cat-generator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/thejordanprice/cat-generator.svg)](https://github.com/thejordanprice/cat-generator/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/thejordanprice/cat-generator/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/thejordanprice/cat-generator.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

##### Description

A simple webapp I've developed to show best practices and teach the fundamentals of Bootstrap and JavaScript development in a fun way. Not only is it fun to play with code if you already have some data to play with; but now its easy to get data and the data can involve cats or a ton of them whatever you prefer.

This does utilize responsive web design with bootstrap/jquery/fontawesome. Then some of the exciting stuff such as let, const, callback, iterators, factories, ect... Not only does it do all that, but it doesn't require a server! This seems great for kids and people of the internets; let's teach people!

This is fully open to pull requests, and what have you. I wouldn't mind making this more fun. :cat:

### Running Demo

[thejordanprice.github.io/cat-generator](https://thejordanprice.github.io/cat-generator) or [jsfiddle.net](https://jsfiddle.net/thejordanprice/fs3fvekw/)

### Examples

**Library**

    /*
     * Library use.
     * Still under development.
     * When calling from the console.log in loaded page....
     * VM166:1 Uncaught ReferenceError: catGenToObject
     */
    const catGen() = require('./js/catgen.js');

    let count = 2;
    let element = '';

    // to inject into the DOM easily.
    catGenToEle(count, element);
    
    // to insert into the code easily.
    let obj = catGenToObj(count);
    console.dir(obj);


**If Statement**

    /*
     * Works great.
     */
    let cat = {
      "id": "jht4jsl33t8",
      "data": {
        "name": "Coco",
        "species": "Bengal",
        "alive": {
          "value": true,
          "lives": 6
        },
        "personality": "Hostile",
        "color": "Orange",
        "weight": "26 lbs."
      }
    };

    /*
     * Check if the cat is alive.
     * Most basic example.
     */
    if (cat.data.alive.value) {
        console.log(true);
    } else {
        console.log(false);
    };
    
## Development

### Getting Started

    git clone https://github.com/thejordanprice/cat-generator
    cd cat-generator
    nano js/catgen.js
    chrome 'file://~/cat-generator/index.html'

Or for simple tinkering the jsfiddle link above could be useful. The entire project was originally developed on jsfiddle, then ported to github after polishing. *Note: Only missing piece on jsfiddle is the viewport for mobile testing (I could be wrong).*

I'm sure there are little things that need changed along the line somewhere, this was a complete hackathon over a few hours. Do you want to add **more** types of stats? **more** GUI options? ideas?... **do** it. Just please somewhat adhere to [this](https://github.com/thejordanprice/javascript) style guide. It will help keep continous improvment happening.

### File Structure

    /index.html
    /css/bootstrap.min.css
    /css/style.css
    /js/catgen.js <-- the gravy
    /js/bootstrap.min.js
    /js/fontawesome-loader.js
    /js/jquery-3.2.1.slim.min.js
    /js/popper.min.js

Soon it will change. Upon a complete functioning library build, I will move the project into new folders. It will be easier to work with babel and polyfills to ensure it runs everywhere; meaning node and browsers. At that point it will be considered to be thrown into the npm, for even easier cat objects.

### Screenshot

![Screenshot](https://i.imgur.com/ZH7aUMJ.png)

### To-Do

- [x] Prototype.
- [x] Polish GUI.
- [ ] Add some more cat data.
- [ ] Change to babel file scheme.
- [ ] Start compiling official builds.
- [ ] Finish library functionality.
- [ ] Call said library in code.

### License

MIT
