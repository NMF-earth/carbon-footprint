/* Unit: kgCO2eq per kg of product */

/*
 * Source: Poore, J., & Nemecek, T. (2018). "Reducing food's environmental
 * impacts through producers and consumers." Science, 360(6392), 987-992.
 * DOI: 10.1126/science.aaq0216
 *
 * Meta-analysis covering 570 studies, 38,700 farms, 119 countries.
 * Values are global median kgCO2eq per kg of product.
 *
 * Previous source: http://www.greeneatz.com/foods-carbon-footprint.html
 */
const lamb = 24.0;
const beef = 60.0; /* beef herd; dairy herd beef = 21.1 */
const redMeat = (lamb + beef) / 2;
const cheese = 11.0;
const pork = 7.6;
const turkey = 6.1; /* P&N does not separate turkey; using poultry value */
const chicken = 6.1;
const whiteMeat = (pork + turkey + chicken) / 3;
const tuna = 6.1; /* P&N: farmed fish 5.1, wild-caught varies; using 6.1 for large pelagic */
const fish = 5.1;
const eggs = 4.7;
const potatoes = 0.5;
const rice = 4.0;
const nuts = 0.3;
const beans = 1.6; /* P&N: other pulses */
const tofu = 3.0;
const vegetables = 0.5; /* P&N: root vegetables 0.4, brassicas 0.5, other veg 0.5 */
const milk = 3.2;
const fruit = 0.7; /* P&N: average of citrus 0.4, bananas 0.9, apples 0.4, berries 1.1 */
const lentils = 0.9;

/* Source: Poore & Nemecek 2018 */
const coffee = 16.5;
const chocolate = 18.7; /* P&N: dark chocolate */

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
