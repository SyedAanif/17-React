const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3,
    },
  },
  { name: "dog", sound: "woof" },
];

// understanding Hooks like useState
function useAnimals(animal) {
  return [
    animal.name,
    function soundFunction() {
      console.log(animal.sound);
    },
  ];
}

export default animals;

export { useAnimals };
