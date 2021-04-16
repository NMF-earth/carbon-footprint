/* Unit: kgCO2eq */

/* http://www.greeneatz.com/foods-carbon-footprint.html */
const lamb = 39.2;
const beef = 27.0;
const redMeat = (lamb + beef) / 2;
const cheese = 13.5;
const pork = 12.1;
const turkey = 10.9;
const chicken = 6.9;
const whiteMeat = (pork + turkey + chicken) / 3;
const tuna = 6.1;
const fish = tuna;
const eggs = 4.8;
const potatoes = 2.9;
const rice = 2.7;
const nuts = 2.3;
const beans = 2.0;
const tofu = 2.0;
const vegetables = 2.0;
const milk = 1.9;
const fruit = 1.1;
const lentils = 0.9;

/* https://www.bilans-ges.ademe.fr/ */
const coffee = 3.14;
const chocolate = 4.87;

export default {
  coffee,
  chocolate,
  redMeat,
  whiteMeat,
  fish,
  lamb,
  beef,
  cheese,
  pork,
  turkey,
  chicken,
  tuna,
  eggs,
  potatoes,
  rice,
  nuts,
  beans,
  tofu,
  vegetables,
  milk,
  fruit,
  lentils,
};
