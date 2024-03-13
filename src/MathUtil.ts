export class MathUtil {

    /**
     * Generate a random number between min and max
     * @param min The minimum value
     * @param max The maximum value
     * @returns A random number between min and max
     */
    static RandomRange(min: number, max: number): number {
        console.log(`RandomRange(${min}, ${max})`);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Shuffle an array of numbers
     * @param array An array to shuffle
     * @returns the shuffled array
     */
    static Shuffle<T>(array: T[]): T[] {
        console.log(`Shuffle(${array})`);
        let clonedArray = [...array];
        let currentIndex = clonedArray.length, temporaryValue: T, randomIndex: number;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = clonedArray[currentIndex];
            clonedArray[currentIndex] = clonedArray[randomIndex];
            clonedArray[randomIndex] = temporaryValue;
        }

        return clonedArray;
    }
}