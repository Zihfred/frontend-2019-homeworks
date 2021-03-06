/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const man = {
    species: 'human',
    name: 'Denis',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hi! How are you?',
}

const woman = {
    species: 'human',
    name: 'Alice',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hello! How are you?',
}

const cat = {
    species: 'cat',
    name: 'Molly',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: 'Meooow!',
}

const tiger = {
    species: 'cat',
    name: 'Shere Khan',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Grrr.',
}

const dog = {
    species: 'dog',
    name: 'Rex',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'Woof!',
}

const toPrettyString = (obj) => {
    return [
        `Species: ${obj['species']}`,
        `name: ${obj['name']}`,
        `gender: ${obj['gender']}`,
        `legs: ${obj['legs']}`,
        `hands: ${obj['hands']}`,
        `saying: ${obj['saying']}`,
    ].join('; ');
}

[man, woman, cat, tiger, dog].forEach((element) => {
    print(toPrettyString(element));
});

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


