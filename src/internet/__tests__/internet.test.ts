import { ElectricityType, getInternetUsageCarbonImpact } from '../../';

describe('internet', () => {
  test('should return', () => {
    expect(getInternetUsageCarbonImpact(100 * 60, 8 * 700 * Math.pow(10, 6), ElectricityType.world)).toEqual(
      0.07118949999999999,
    );
  });
});
