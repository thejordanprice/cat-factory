'use strict';

/**
  * Easy generation of alerts, a small function;
  * I kept seeing extra repeated code, so I made this to see less.
  * Could probably ditch the callback to make even less typing.
  */
const alertGenerator = function(type, strong, text, callback) {
  callback('<div class="alert alert-' + type + '"><strong>' + strong + '</strong> ' + text + '</div>');
};

const genCats = function(count, output) {

  /**
   * The possibilities to the mixing of cat pieces.
   */
  const names = ["Ashes", "Tiger", "Puss", "Smokey", "Misty", "Tigger", "Kitty", "Oscar", "George", "Larry", "Lily", "Angel", "Coco", "Max", "Sam", "Ginger", "Ghost", "Benjamin", "Blondie", "James", "Vader", "Snuggles", "Princess", "Powder", "Gato"];
  const colors = ["Black", "Brown", "Orange", "Tan", "White", "Brindle", "Grey", "White and Black", "Tan and Brown", "Brown and Black", "White and Brindle", "Brown and Grey", "Orange and White"];
  const species = ["Abyssinian", "Siamese", "Persian", "American Shorthair", "Ragdoll", "Burmese", "Maine Coon", "Charteux", "Bengal", "Manx", "Sphynx"];
  const personalities = ["Friendly", "Hostile", "Cuddly", "Playful", "Attack Cat", "Snuggle Butt"];
  const lives = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /**
   * Select a random object from an array.
   */
  const select = function(array, callback) {
    let selected = array[Math.floor(Math.random() * array.length)];
    callback(selected);
  };

  /**
   * Calculate a random weight.
   */
  const calcWeight = function(min, max, callback) {
    let weight = Math.floor(Math.random() * max) + min + " lbs.";
    callback(weight);
  };

  /**
   * Generate an example ID.
   */
  const generateId = function(callback) {
    let id = Math.random().toString(32).substr(2, 32);
    callback(id);
  };

  /**
   * A single cat generator from desired options.
   */
  const catGenerator = function(callback) {
    let cat = [];
    // Generate an ID
    generateId(function(id) {
      cat.id = id;
    });
    // Select the name.
    select(names, function(name) {
      cat.name = name;
    });
    // Select the species.
    select(species, function(species) {
      cat.species = species;
    });
    // Select lives.
    select(lives, function(life) {
      cat.lives = life;
      // If alive.
      if (life !== 0) {
        cat.alive = true;
      } else {
        cat.alive = false;
      };
    });
    // Select the colors.
    select(colors, function(color) {
      cat.color = color;
    });
    // Select the personality.
    select(personalities, function(personality) {
      cat.personality = personality;
    });
    // Run the weight calculator.
    calcWeight(5, 35, function(weight) {
      cat.weight = weight;
    });
    callback(cat);
  };

  /**
   * A cat factory that can produce ANY amount of cats.
   * Note: Cats were pushed; not hurt.
   */
  const catFactory = function(amount, callback) {
    let cats = [];
    for (let x = 0; amount > x; x++) {
      // How many, make that many.
      // One at a time.
      catGenerator(function(cat) {
        let oneCat = {
          "id": cat.id,
          "data": {
            "name": cat.name,
            "species": cat.species,
            "alive": {
              "value": cat.alive,
              "lives": cat.lives,
            },
            "personality": cat.personality,
            "color": cat.color,
            "weight": cat.weight,
          },
        };
        cats.push(oneCat);
      });
    };
    callback(cats);
  };

  /**
   * Event listener for onclick of the generate button to invoke the factory.
   */
  let amount = count;
  if (amount > 9000 || amount == 0) {
    alertGenerator('warning', 'Roaawrr!', 'Stay between 1 and 9000', function(result) {
      response_div.innerHTML = result;
    });
  } else {
    catFactory(amount, function(cats) {
      // Check your console.
      console.dir(cats);
      // Send to DOM 
      output.innerHTML = JSON.stringify(cats, null, 2);
    });
  };

};
//EOL