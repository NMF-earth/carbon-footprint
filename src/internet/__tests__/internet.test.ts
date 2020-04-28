import { ElectricityEnum, getInternetUsageCarbonImpact } from '../../';

describe('internet', () => {
  test('should return ', () => {
    expect(getInternetUsageCarbonImpact(6000, Math.pow(700, 6), ElectricityEnum.world)).toEqual(13.688301144);
  });
});
