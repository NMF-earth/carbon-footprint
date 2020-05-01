/* Unit: bits/s, use getInternetUsageCarbonImpact to get kgCO₂eq */

/* 
  Star Wars The Rise Of Skywalker - 2h22
  HD / 720p : 1.21 GB
  Full HD / 1080p : 7.02 GB
  Ultra HD / 2160p : 35.73 Gb
 */
const HDVideo = (1.21 * Math.pow(10, 9) * 8) / (2 * 60 + 22);
const fullHDVideo = (7.02 * Math.pow(10, 9) * 8) / (2 * 60 + 22);
const ultraHDVideo = (35.73 * Math.pow(10, 9) * 8) / (2 * 60 + 22);

/* MP3 song at 312 kbps / 6.6 MB */
const audioMP3 = (6.6 * Math.pow(10, 6) * 8) / 210;

export default {
  HDVideo,
  fullHDVideo,
  ultraHDVideo,
  audioMP3,
};
