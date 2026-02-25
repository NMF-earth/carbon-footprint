/* Unit: kgCO2eq per kg of product */

/*
 * Source: Poore, J., & Nemecek, T. (2018). "Reducing food's environmental
 * impacts through producers and consumers." Science, 360(6392), 987-992.
 * DOI: 10.1126/science.aaq0216
 *
 * Values sourced via Our World in Data (ourworldindata.org/grapher/ghg-per-kg-poore),
 * which standardized the supplementary data from the original publication.
 * Meta-analysis covering 570 studies, 38,700 farms, 119 countries.
 * Values are mean kgCO2eq per kg of product across the supply chain.
 *
 * Previous source: http://www.greeneatz.com/foods-carbon-footprint.html
 */
const lamb = 39.72; /* P&N: Lamb & Mutton */
const beef = 99.48; /* P&N: Beef (beef herd); dairy herd = 33.30 */
const redMeat = (lamb + beef) / 2;
const cheese = 23.88;
const pork = 12.31; /* P&N: Pig Meat */
const turkey = 9.87; /* P&N does not separate turkey; using Poultry Meat value */
const chicken = 9.87; /* P&N: Poultry Meat */
const whiteMeat = (pork + turkey + chicken) / 3;
const tuna = 13.63; /* P&N: Fish (farmed); wild-caught tuna may differ */
const fish = 13.63; /* P&N: Fish (farmed) */
const eggs = 4.67;
const potatoes = 0.46;
const rice = 4.45;
const nuts = 0.43;
const beans = 1.79; /* P&N: Other Pulses */
const tofu = 3.16;
const vegetables = 0.53; /* P&N: Other Vegetables; root veg 0.43, brassicas 0.51 */
const milk = 3.15;
const fruit = 1.05; /* P&N: Other Fruit; citrus 0.39, bananas 0.86, apples 0.43 */
const lentils = 0.98; /* P&N: Peas (closest proxy) */

const coffee = 28.53;
const chocolate = 46.65; /* P&N: Dark Chocolate */

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
