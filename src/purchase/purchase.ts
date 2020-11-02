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
Reasons to choose LowCVP :
    - LowCVP is a a public-private partnership (with UK gov and business) working a sustainable shift to lower carbon vehicles and fuel
    - We can read more here: https://www.lowcvp.org.uk/about.htm
    https://www.lowcvp.org.uk/assets/workingdocuments/MC-P-11-15a%20Lifecycle%20emissions%20report.pdf
*/

const fossilFuelCar = 5600;
const eletricCar = 8800;

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
