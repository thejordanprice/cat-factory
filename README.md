# cat-generator

A simple webapp I've developed to show best practices and teach the fundamentals of Bootstrap and JavaScript development in a fun way. Not only is it fun to play with code if you already have some data; but now its easy to get data and your data can involve cats.

This does utilize responsive web design with bootstrap/jquery/fontawesome. Then some of the exciting stuff such as let, const, callback, iterators, factories, ect... Not only does it do all that, but it doesn't require a server! I am on a mission; Let's teach people!

Open to pull requests, clones, and what have you. I wouldn't mind making this more fun.

### Demo

[thejordanprice.github.io/cat-generator](https://thejordanprice.github.io/cat-generator) or [jsfiddle.net](https://jsfiddle.net/thejordanprice/fs3fvekw/)

### Easy Mode

    git clone https://github.com/thejordanprice/cat-generator
    cd cat-generator
    nano js/catgen.js
    chrome 'file://~/cat-generator/index.html'

Or for simple tinkering the jsfiddle link above could be useful. The entire project was originally developed on jsfiddle, then ported to github after polishing. *Note: Only missing piece on jsfiddle is the viewport for mobile testing (I could be wrong).*

### Structure

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
