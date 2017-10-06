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

### Example Usage

**Simple IF**

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

### Easy Mode

    git clone https://github.com/thejordanprice/cat-generator
    cd cat-generator
    nano js/catgen.js
    chrome 'file://~/cat-generator/index.html'

Or for simple tinkering the jsfiddle link above could be useful. The entire project was originally developed on jsfiddle, then ported to github after polishing. *Note: Only missing piece on jsfiddle is the viewport for mobile testing (I could be wrong).*

I'm sure there are little things that need changed along the line somewhere, this was a complete hackathon over a few hours. Do you want to add **more** types of stats? **more** GUI options? ideas?... **do** it.

### File Structure

    /index.html
    /css/bootstrap.min.css
    /css/style.css
    /js/catgen.js <-- the gravy
    /js/bootstrap.min.js
    /js/fontawesome-loader.js
    /js/jquery-3.2.1.slim.min.js
    /js/popper.min.js

### Screenshot

![Screenshot](https://i.imgur.com/ZH7aUMJ.png)

### To-Do

- [x] Prototype.
- [x] Polish GUI.
- [ ] Add some more cat data.
- [ ] Change functionality into a library.
- [ ] Call said library in code.

### License

MIT
