import { Main } from '../src/Main';

describe('Main', function() {
    it('should return the scene', function() {
        // Arrange
        const main = new Main();

        // Act
        const actualScene = main.getScene();

        // Assert
        expect(main).not.toBeNull();
        expect(actualScene).not.toBeNull();
    })
});
