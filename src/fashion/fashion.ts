/* Unit: kgCO2eq per product */

/* Clothing
    https://www.ademe.fr/sites/default/files/assets/documents/poids_carbone-biens-equipement-201809-rapport.pdf
*/
const shirt = (13 + 12) / 2;
const tshirt = (7 + 10 + 6) / 3;
const jeans = 25;
const sweater = (28 + 26 + 31 + 56 + 12) / 5;
const coat = (89 + 39 + 25) / 3;
const dress = (56 + 56 + 51) / 3;
const shoes = (15 + 19 + 20) / 3;

export default {
  shirt,
  tshirt,
  jeans,
  sweater,
  coat,
  dress,
  shoes,
};
