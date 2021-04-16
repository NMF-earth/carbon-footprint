/* Unit: kgCO2eq per meal */

/* https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4372775/ */
/* Mean greenhouse gas emissions per 2,000 kcal */
/* https://globalnews.ca/news/3615212/this-is-what-your-breakfast-lunch-and-dinner-calories-actually-look-like/ */
/* Human get around 600 calories per meal */
const highMeat = (7.19 * 600) / 2000;
const mediumMeat = (5.63 * 600) / 2000;
const lowMeat = (4.67 * 600) / 2000;
const pescetarian = (3.91 * 600) / 2000;
const vegetarian = (3.81 * 600) / 2000;
const vegan = (2.89 * 600) / 2000;

export default {
  highMeat,
  mediumMeat,
  lowMeat,
  pescetarian,
  vegetarian,
  vegan,
};
