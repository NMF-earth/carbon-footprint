/* Unit of exported constant : kgCO₂eq/J */

/* source : https://github.com/carbonalyser/Carbonalyser - kgCO₂eq/kWh */
const europe = 0.276;
const usa = 0.493;
const china = 0.681;
const world = 0.519;

/* Source : https://www.electricitymap.org - 4th of August 2021 - kgCO₂eq/kWh */

/* Asia */
const russia = (0.373 + 0.465) / 2;
const india = (0.643 + 0.473 + 0.097) / 3;
const israel = 0.58;
const turkey = 0.394;

/* Africa */
const nigeria = 0.49;

/* North America */
const canada = (0.04 + 0.506 + 0.02 + 0.03 + 0.509) / 5;
const iceland = 0.028;

/* Europe  */
const france = 0.035;
const uk = 0.313;
const ireland = 0.472;
const spain = 0.138;
const portugal = 0.296;
const netherlands = 0.466;
const belgium = 0.09;
//to be removed at some point
const danmark = 0.192;
const denmark = 0.192;
const germany = 0.304;
const poland = 0.725;
const italy = (0.249 + 0.237 + 0.452 + 0.449 + 0.354 + 0.52) / 6;
const finland = 0.094;
const norway = (0.026 + 0.031 + 0.039 + 0.029 + 0.033) / 5;
const czechia = 0.406;
const austria = 0.096;
const serbia = 0.548;
const slovenia = 0.278;
const hungary = 0.217;
const slovakia = 0.226;
const ukraine = 0.242;
const romania = 0.275;
const moldava = 0.667;
const estonia = 0.46;
const latvia = 0.44;
const lithuania = 0.361;

/* South America in kgCO₂eq/kWh */
const peru = 0.026;
const bolivia = 0.377;
const argentina = 0.33;
const uruguay = 0.33;
const brazil = (0.282 + 0.196 + 0.261 + 0.276) / 4;

/* Oceania in kgCO₂eq/kWh */
const australia = (0.708 + 0.303 + 0.641 + 0.455 + 0.22) / 5;

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
  denmark: toJoules(denmark),
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
  russia: toJoules(russia),
  india: toJoules(india),
  nigeria: toJoules(nigeria),
  canada: toJoules(canada),
  iceland: toJoules(iceland),
  israel: toJoules(israel),
};
