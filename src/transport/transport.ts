/* https://static.ducky.eco/calculator_documentation.pdf */

/* Unit: kgCO2eq/m */

const bus = 0.000103;
const fossilFueledCar = 0.000257;
const electricVehicle = 0.000081;
const car = fossilFueledCar;
const hybridCar = 0.00018;
const carSharing = 0.000147;
const motorbike = 0.000108;
const shortDistanceBus = 0.000103;
const longDistanceBus = 0.000052;
const train = 0.000042;
const boat = 0.000803;
const shortHaulFlight = 0.00034;
const mediumHaulFlight = 0.000286;
const longHaulFlight = 0.000239;
const plane = (shortHaulFlight + mediumHaulFlight + longHaulFlight) / 3;

export default {
  bus,
  plane,
  car,
  fossilFueledCar,
  electricVehicle,
  hybridCar,
  carSharing,
  motorbike,
  shortDistanceBus,
  longDistanceBus,
  train,
  boat,
  shortHaulFlight,
  mediumHaulFlight,
  longHaulFlight,
};
