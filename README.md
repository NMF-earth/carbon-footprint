# Carbon Footprint Diagnostic 🏭👣🩺

![](https://github.com/NMF-earth/nmf-app/workflows/Test%20CI/badge.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://github.com/climate-strike/license)

Calculate your carbon footprint. Food, transport, purchases, fashion, electricity and digital activities like streaming, cryptoArt or blockchain.

Used in [NMF.earth](https://nmf.earth/) open-source project.
Can be found on [NPM](https://www.npmjs.com/package/carbon-footprint).

### Units 🌐

Unit of measurement used in the project are following the [International System of Units](https://simple.wikipedia.org/wiki/International_System_of_Units) to avoid confusion and make everything easy to remember : seconds for time, energy in joules, mass in kilogram, distance in meters, memory in bits.

Therefore meter is used instead of kilometer for distance and any mass is in kilogram.

### Install 📦

`yarn add carbon-footprint`
or
`npm install carbon-footprint`

### How to use 🔥

`import { transport } from 'carbon-footprint'`
...
`const emission = kilometer * transport.fossilFueledCar;`

If you want to see how we use this module, check the [NMF.earth app repo](https://github.com/NotMyFaultEarth/nmf-app).

### Source ℹ️

You can verify any number. A link can be found inside corresponding file.

### Contribution 🙋

Any Contribution is welcome!

Please read [this](/CONTRIBUTING.md) if you want to contribute.

### Tests + Lint + typescript :

`yarn test`
`yarn lint`
`yarn tsc`
`yarn format`

## Workflow

To publish to npm, just create a new [release](https://github.com/NotMyFaultEarth/carbon-footprint/releases).

### ©️ Open source - licence

Repository and contributions are under [GNU General Public License v3.0](https://github.com/NotMyFaultEarth/carbon-footprint/blob/master/LICENSE)
