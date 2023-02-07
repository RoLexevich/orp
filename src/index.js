import orderByProps from "./js/orderByProps";
// eslint-disable-next-line no-console
const person = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
// eslint-disable-next-line
const result = orderByProps(person, ["name", "level"]);
// eslint-disable-next-line no-console
console.log(result);
