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

/* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/ */
/* Mean greenhouse gas emissions per 2,000 kcal */
/* https://globalnews.ca/news/3615212/this-is-what-your-breakfast-lunch-and-dinner-calories-actually-look-like/ */
/* Human get around 600 calories per meal */
const highMeatMeal = (7.19 * 6000) / 2000;
const mediumMeatMeal = (5.63 * 6000) / 2000;
const lowMeatMeal = (4.67 * 6000) / 2000;
const pescetarianMeal = (3.91 * 6000) / 2000;
const vegetarianMeal = (3.81 * 6000) / 2000;
const veganMeal = (2.89 * 6000) / 2000;

export default {
  highMeatMeal,
  mediumMeatMeal,
  lowMeatMeal,
  pescetarianMeal,
  vegetarianMeal,
  veganMeal,
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
