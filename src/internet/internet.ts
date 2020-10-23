import { ElectricityType, electricity } from '../';

/* 

Info/examples/critics on 1-byte model : 

https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf 

https://github.com/carbonalyser/

https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix

*/

const toJoules = (x: number) => x * 3.6 * Math.pow(10, 6);

/* 0.007 & 0.058 in kWh/GB - divide by 8 to get bits */
const FactorDataCenter = toJoules(0.007 * Math.pow(10, -9)) / 8;
const FactorNetwork = toJoules(0.058 * Math.pow(10, -9)) / 8;
/* 0.055 in kWh/hr */
const FactorDevice = toJoules(0.055 / (60 * 60));

/* 
    duration : Seconds
    dataWeight : Bits
    carbonElectricityIntensity : kgCO₂eq/J
*/
const getInternetUsageCarbonImpact = (
  duration: number,
  dataWeight: number,
  carbonElectricityIntensity: ElectricityType,
): number => {
  /* GHG : greenhouse gas */
  const GHGdataCenter = dataWeight * FactorDataCenter * electricity.world;

  const GHGnetwork = dataWeight * FactorNetwork * electricity.world;

  const GHGdevice = duration * FactorDevice * electricity[carbonElectricityIntensity];

  /* kgCO₂eq */
  return GHGdataCenter + GHGnetwork + GHGdevice;
};

export { getInternetUsageCarbonImpact };
