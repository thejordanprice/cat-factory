/**
 * My generation of cat quotes for the bottom
 * of the page, I like them. :D
 */
window.onload = function() {
  const facts = [
    'A fun tool to generate chunks data for learning.',
    'Sleeping helps cats conserve energy in between their meals.',
    'Cats can drink seawater.',
    'Did you know cats can\’t taste sweet things.',
    'Isaac Newton invented the cat flap.',
    'Most female cats are right-pawed.',
    'Most male cats favor their left paws.',
    'Cats purr at the same frequency as an idling diesel engine.',
    'Some cats have thumbs.',
    'Nikola Tesla was inspired to investigate electricity from static around his cat.',
    'Kittens start to dream when they’re about a week old.',
    'By neutering a cat, you add about two to three years to its life.',
    'Cats can run 30 mph.',
    'Cats may have evolved their “tone of voice” to communicate with humans.',
    'The more you talk to your cat, the more it will talk to you.',
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('quote').innerHTML = fact;
};