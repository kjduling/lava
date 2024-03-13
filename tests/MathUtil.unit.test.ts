import { MathUtil } from '../src/MathUtil';

describe('MathUtil', function() {
    it('should return a random number between 1 and 10', function() {
        // Arrange
        const min = 1;
        const max = 10;

        // Act
        const actual = MathUtil.RandomRange(min, max);

        // Assert
        expect(actual).toBeGreaterThanOrEqual(min);
        expect(actual).toBeLessThanOrEqual(max);
    });

    it('should shuffle the array', function() {
        // Arrange
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Act
        const shuffledArray = MathUtil.Shuffle(array);

        // Assert
        expect(shuffledArray).not.toEqual(array);
    });
});
