/* Unit of exported constant : kgCO₂eq/J */

/* source in kgCO₂eq/kWh : https://github.com/carbonalyser/Carbonalyser */
const europe = 0.276;
const usa = 0.493;
const china = 0.681;
const world = 0.519;

/* Source : https://www.electricitymap.org - 28th of April 2020 */

/* Europe in kgCO₂eq/kWh */
const france = 0.031;
const uk = 0.231;
const ireland = 0.477;
const spain = 0.138;
const portugal = 0.105;
const netherlands = 0.434;
const belgium = 0.172;
const danmark = 0.226;
const germany = 0.33;
const poland = 0.66;
const italy = 0.386;
const turkey = 0.322;
const finland = 0.162;
const norway = 0.036;
const czechia = 0.446;
const austria = 0.153;
const serbia = 0.517;
const slovenia = 0.078;
const hungary = 0.177;
const slovakia = 0.234;
const ukraine = 0.213;
const romania = 0.184;
const moldava = 0.667;
const estonia = 0.193;
const latvia = 0.243;
const lithuania = 0.183;

/* South America in kgCO₂eq/kWh */
const peru = 0.026;
const bolivia = 0.512;
const argentina = 0.299;
const uruguay = 0.03;
const brazil = 0.086;

/* Oceania in kgCO₂eq/kWh */
const australia = 0.571;

const toJoules = (x: number) => (x / 3.6) * Math.pow(10, -6);

export default {
  europe: toJoules(europe),
  usa: toJoules(usa),
  china: toJoules(china),
  world: toJoules(world),
  france: toJoules(france),
  uk: toJoules(uk),
  ireland: toJoules(ireland),
  spain: toJoules(spain),
  portugal: toJoules(portugal),
  netherlands: toJoules(netherlands),
  belgium: toJoules(belgium),
  danmark: toJoules(danmark),
  germany: toJoules(germany),
  poland: toJoules(poland),
  italy: toJoules(italy),
  turkey: toJoules(turkey),
  finland: toJoules(finland),
  norway: toJoules(norway),
  czechia: toJoules(czechia),
  austria: toJoules(austria),
  serbia: toJoules(serbia),
  slovenia: toJoules(slovenia),
  hungary: toJoules(hungary),
  slovakia: toJoules(slovakia),
  ukraine: toJoules(ukraine),
  romania: toJoules(romania),
  moldava: toJoules(moldava),
  estonia: toJoules(estonia),
  latvia: toJoules(latvia),
  lithuania: toJoules(lithuania),
  peru: toJoules(peru),
  bolivia: toJoules(bolivia),
  argentina: toJoules(argentina),
  uruguay: toJoules(uruguay),
  brazil: toJoules(brazil),
  australia: toJoules(australia),
};
