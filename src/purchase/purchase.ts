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

/* Tech
Reasons to choose Apple :
    - world leader
    - sharing figures
Links :
    https://www.apple.com/lae/environment/pdf/products/iphone/iPhone_11_Pro_PER_sept2019.pdf
    https://www.apple.com/lae/environment/pdf/products/ipad/iPad_PER_sept2019.pdf
    https://www.apple.com/lae/environment/pdf/products/desktops/21.5-inch_iMac_with_Retina4KDisplay_PER_Mar2019.pdf
    https://www.apple.com/lae/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_June2019.pdf
*/

const smartphone = 80;
const tablet = 87;
const computer = 588;
const laptop = 210;

/* transport
Reasons to choose Tesla :
    - popular brand
    - confiable report (with confiable sources)
    https://www.tesla.com/ns_videos/2019-tesla-impact-report.pdf
    PS: the values in this report are in g/miles.
    The variables here are in g/km
*/

const fossilFuelCar = 215;
const eletricCar = 75.5;

export default {
  shirt,
  tshirt,
  jeans,
  sweater,
  coat,
  dress,
  shoes,
  smartphone,
  tablet,
  computer,
  laptop,
  fossilFuelCar,
  eletricCar,
};
