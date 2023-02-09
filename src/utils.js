export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function randomize(array) {
  return array.sort((a, b) => 0.5 - Math.random());
}

export const Vowels = ["a", "e", "i", "o", "u", "à", "è", "ì", "ò", "ù"];
export const Consonants = [
  "b",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];
export const Letters = [...Vowels, ...Consonants];
