# cat-factory

[![GitHub issues](https://img.shields.io/github/issues/thejordanprice/cat-factory.svg)](https://github.com/thejordanprice/cat-factory/issues)
[![GitHub stars](https://img.shields.io/github/stars/thejordanprice/cat-factory.svg)](https://github.com/thejordanprice/cat-factory/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/thejordanprice/cat-factory.svg)](https://github.com/thejordanprice/cat-factory/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/thejordanprice/cat-factory/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/thejordanprice/cat-factory.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

##### Description

A simple webapp I've developed to show best practices and teach the fundamentals of Bootstrap and JavaScript development in a fun way. Not only is it fun to play with code if you already have some data to play with; but now its easy to get data and the data can involve cats or a ton of them whatever you prefer.

This does utilize responsive web design with bootstrap/jquery/fontawesome. Then some of the exciting stuff such as let, const, callback, iterators, factories, ect... Not only does it do all that, but it doesn't require a server! This seems great for kids and people of the internets; let's teach people!

This is fully open to pull requests, and what have you. I wouldn't mind making this more fun. :cat:

### Running Demo

[thejordanprice.github.io/cat-factory](https://thejordanprice.github.io/cat-factory) or [jsfiddle.net](https://jsfiddle.net/thejordanprice/fs3fvekw/)

## Development

### Getting Started

    git clone https://github.com/thejordanprice/cat-factory
    cd cat-factory
    nano src/catgen.js

Or for simple tinkering the jsfiddle link above could be useful. The entire project was originally developed on jsfiddle, then ported to github after polishing. *Note: Only missing piece on jsfiddle is the viewport for mobile testing (I could be wrong).*

### Examples

**Library**

    <html>
        <head>
            <title>a cat-thing fork... :P</title>
            <script type='text/javascript' src='/dist/catgen.min.js'></script>
        </head>
        <body>
            <pre id='output'></pre>
            <button id='generate'>generate</button>
            <script>
                // Run, initiating the library functions.
                const Run = function() {
                    let count = document.getElementById('count').value;
                    let output = document.getElementById('output');
                    genCats(count, output);
                };

                // Event listener for onclick to generate.
                document.getElementById('generate')
                    .addEventListener('click', function() {
                    Run();
                });
            </script>
        </body>
    </html>

A fiddle to fork using the library can be found [here](https://jsfiddle.net/thejordanprice/3713jcyf/).

**If Statements and Learning**

*The secret sauce to why this even exists...*

    // declare the object as a variable.
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

    // check if some data is true.
    if (cat.data.alive.value) {
        console.log(true); // true
    };

    // check if name is Coco
    if (cat.data.name === 'Coco') {
        console.log(true); // true
    };

I'm sure there are little things that need changed along the line somewhere, this was a complete hackathon over a few hours. Do you want to add **more** types of stats? **more** GUI options? ideas?... **do** it.

### File Structure

    /index.html          // html doc
    /src/style.css       // stylesheet
    /src/catgen.js       // the factory
    
*If you learned something; give me a star :D*

### Screenshot

![Screenshot](https://i.imgur.com/ZH7aUMJ.png)

### To-Do

- [x] Prototype.
- [x] Polish GUI.
- [x] Finish library functionality.
- [x] Call said library in code.
- [x] Add some more cat data.
- [x] Add copy to clipboard button.
- [ ] Add copied to clipboard alert.
- [ ] GPS coordinates of cat.
- [ ] Find people that want JSON.


### License

MIT
