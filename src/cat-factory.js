/**
 * genGats() by thejordanprice
 * 
 * @arg {number} count
 * @arg {string} output 
 * 
 * If the second argument is null, it will return the object.
 * 
 * genCats(1, 'output') responds with.
 * Generate one cat and then put it in the element with the id 'output'.
 */
const genCats = function(count, output) {
  /**
   * Only let this use strict.
   */
  'use strict';

  /**
   * The possibilities to the mixing of cat pieces.
   */
  const names = ["Ashes", "Tiger", "Puss", "Smokey", "Misty", "Tigger", "Kitty", "Oscar", "George", "Larry", "Lily", "Angel", "Coco", "Max", "Sam", "Ginger", "Ghost", "Benjamin", "Blondie", "James", "Vader", "Snuggles", "Princess", "Powder", "Gato"];
  const colors = ["Black", "Brown", "Orange", "Tan", "White", "Brindle", "Grey", "White and Black", "Tan and Brown", "Brown and Black", "White and Brindle", "Brown and Grey", "Orange and White"];
  const species = ["Abyssinian", "Siamese", "Persian", "American Shorthair", "Ragdoll", "Burmese", "Maine Coon", "Charteux", "Bengal", "Manx", "Sphynx"];
  const personalities = ["Friendly", "Hostile", "Cuddly", "Playful", "Attack Cat", "Snuggle Butt"];
  const physiques = ["Ultra Fat", "Fat", "Slender", "Tall", "Skinny", "Purrfect", "Normal"];
  const eyeColors = ["Blue", "Green", "Aqua", "Yellow", "Orange", "Amber", "Brown", "Lilac", "Albino"];
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
    let weight = Math.floor(Math.random() * max) + min;
    callback(weight);
  };

  /**
   * Generate random GPS coordinates of cat.
   */
  const calcCoordinates = function(callback) {
    let latwhole = Math.ceil(Math.random() * (90 + 90)) - 90;
    let lonwhole = Math.ceil(Math.random() * (180 + 180)) - 180;
    let latdecim = Math.floor(Math.random() * 999999) + 100000;
    let londecim = Math.floor(Math.random() * 999999) + 100000;
    let gps = {
      lat: lonwhole + '.' + londecim,
      lon: latwhole + '.' + latdecim,
    };
    callback(gps);
  };

  /**
   * Generate a random age.
   */
  const calcAge = function(callback) {
    let age = Math.floor(Math.random() * 18) + 0;
    callback(age);
  };

  /**
   * Generate an example ID.
   * This is a fun one.
   */
  const calcId = function(callback) {
    let id = Math.random().toString(32).substr(2, 32);
    if (id.length !== 10) {
      calcId(function(id) {
        callback(id);
      });
    } else {
      callback(id);
    };
  };

  /**
   * A single cat generator from desired options.
   */
  const catGenerator = function(callback) {
    let cat = [];
    // Generate an ID
    calcId(function(id) {
      cat.id = id;
    });
    // Generate GPS coordinates.
    calcCoordinates(function(coordinates){
      cat.coordinates = coordinates;
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
    // Select the physique.
    select(physiques, function(physique) {
      cat.physique = physique;
    });
    // Select the colors.
    select(eyeColors, function(eyeColor) {
      cat.eyeColor = eyeColor;
    });
    // Run the age calculator.
    calcAge(function(age){
      cat.age = age;
    })
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
  const catFactory = function(count, callback) {
    let cats = [];
    for (let x = 0; count > x; x++) {
      // How many, make that many.
      // One at a time.
      catGenerator(function(cat) {
        let oneCat = {
          "id": cat.id,
          "name": cat.name,
          "species": cat.species,
          "location": cat.coordinates,
          "alive": {
            "boolean": cat.alive,
            "lives": cat.lives,
            "age": cat.age,
          },
          "specs": {
            "color": cat.color,
            "weight": cat.weight,
            "eyeColor": cat.eyeColor,
            "personality": cat.personality,
            "physique": cat.physique,
          },
        };
        cats.push(oneCat);
      });
    };
    callback(cats);
  };

  /**
   * Run the entire setup.
   */
  catFactory(count, function(cats) {
    if (count && output) {
      // Console.dir
      console.dir(cats);
      // Send cats to DOM 
      output.innerHTML = JSON.stringify(cats, null, 2);
    };
    if ((count) && (output == null)) {
      // If nowhere, return.
      return cats;
    };
  });
};
//EOL
