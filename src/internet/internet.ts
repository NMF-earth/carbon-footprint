import { ElectricityEnum, electricity } from '../';

/* More details 1-byte model on https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf */

/* to be improved with https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix */

const toJoules = (x: number) => x * 3.6 * Math.pow(10, 6);

/* source in kWh/MB : https://github.com/carbonalyser/Carbonalyser */
const joulesPerMegaByteDataCenter = toJoules(0.000000000072);
const joulesPerMegaByteNetwork = toJoules(0.000000000152);

const joulesPerSecondsDevice = toJoules(0.00021 / 60);

/* 
    duration : seconds,
    dataWeight : bytes
*/
const getInternetUsageCarbonImpact = (
  duration: number,
  dataWeight: number,
  carbonIntensityElectricity: ElectricityEnum,
) => {
  const dataInMegaByte = dataWeight * Math.pow(10, -6);

  /* GHG : greenhouse gas */
  const GHGdataCenter = dataInMegaByte * joulesPerMegaByteDataCenter * electricity.world;
  const GHGnetwork = dataInMegaByte * joulesPerMegaByteNetwork * electricity.world;
  const GHGdevice = duration * joulesPerSecondsDevice * electricity[carbonIntensityElectricity];

  return GHGdataCenter + GHGnetwork + GHGdevice;
};

export { getInternetUsageCarbonImpact };
