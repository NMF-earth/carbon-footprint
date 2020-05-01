/* Unit: bits/s, use getInternetUsageCarbonImpact to get kgCO₂eq */

const HDVideo = (700 * Math.pow(10, 6) * 8) / (120 * 60);
const fullHDVideo = (3400 * Math.pow(10, 6) * 8) / (120 * 60);
const ultraHDVideo = (14300 * Math.pow(10, 6) * 8) / (120 * 60);

/* 312 kbps */
const audioMP3 = (6.6 * Math.pow(10, 6) * 8) / 210;

export default {
  HDVideo,
  fullHDVideo,
  ultraHDVideo,
  audioMP3,
};
