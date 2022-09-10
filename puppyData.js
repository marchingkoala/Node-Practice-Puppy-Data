const puppyData = [
  {
    id: 1,
    breed: "Husky",
    appearance: "Majestic",
    occupation: "Opera Singer",
    info: "A thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses. Sibes are friendly, fastidious, and dignified.",
    date: new Date(Date.now() - 15000000),
  },
  {
    id: 2,
    breed: "Chihuahua",
    appearance: "Fearsome",
    occupation: "BOSS",
    info: "The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds. The rounded 'apple' head is a breed hallmark. The erect ears and full, luminous eyes are acutely expressive.",
    date: new Date(Date.now() - 90000000),
  },
  {
    id: 3,
    breed: "Jindo",
    appearance: "Fuzzy",
    occupation: "Guardian",
    info: "A well-proportioned, medium-sized dog used for hunting and guarding. With erect ears and a rolled or sickle-shaped tail, it should be a vivid expression of agility, strength, alertness and dignity.The Jindo has a very strong instinct for hunting and is bold, brave, alert and careful, not tempted easily and impetuous.",
    date: new Date(Date.now() - 50000000),
  },
  {
      id: 4,
      breed: "Golden Retriever",
      appearance: "Sunshine and Rainbow",
      occupation: "BFF",
      info: "An exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name.",
      date: new Date(Date.now() - 3000000),
  },
];

const list = () =>{
    return [...puppyData];
};

const find = (id) =>{
    const post = puppyData.find((post) => post.id === +id);
    return {...post};
}

module.exports = {list: list, find: find};