/* Unit: kgCO2eq per product / transaction */

/* Tech
Reasons to choose Apple :
    - world leader
    - sharing figures
Links :
    https://www.apple.com/lae/environment/pdf/products/iphone/iPhone_11_Pro_PER_sept2019.pdf
    https://www.apple.com/lae/environment/pdf/products/ipad/iPad_PER_sept2019.pdf
    https://www.apple.com/lae/environment/pdf/products/desktops/21.5-inch_iMac_with_Retina4KDisplay_PER_Mar2019.pdf
    https://www.apple.com/lae/environment/pdf/products/notebooks/13-inch_MacBookPro_PER_June2019.pdf
    https://www.bilans-ges.ademe.fr/fr/basecarbone/donnees-consulter/liste-element?recherche=T%C3%A9l%C3%A9vision
*/

const smartphone = 80;
const tablet = 87;
const computer = 588;
const laptop = 210;
const tv = 500;

/* Transport
Reasons to choose LowCVP :
    - LowCVP is a a public-private partnership (with UK gov and business) working a sustainable shift to lower carbon vehicles and fuel
    - We can read more here: https://www.lowcvp.org.uk/about.htm
    https://www.lowcvp.org.uk/assets/workingdocuments/MC-P-11-15a%20Lifecycle%20emissions%20report.pdf
*/

const fossilFuelCar = 5600;
const hybridCar = 6500;
const eletricCar = 8800;

/* https://memoakten.medium.com/the-unreasonable-ecological-cost-of-cryptoart-2221d3eb2053 */
const cryptoCurrencyPoW = 20;
const singleEditionNFT = 211;

export default {
  smartphone,
  tablet,
  computer,
  laptop,
  tv,
  fossilFuelCar,
  hybridCar,
  eletricCar,
  cryptoCurrencyPoW,
  singleEditionNFT,
};
