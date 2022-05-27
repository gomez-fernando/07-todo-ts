import { HttpStoreClass } from './http.store.class.js';
describe('Given HttpStoreClass', () => {
    describe('When we instantiate', () => {
        describe('And we use method getTasks', () => {
            test('Then it should return a array of two tasks', async () => {
                // arrange & act
                const result = await new HttpStoreClass().getTasks();
                //
                // assert
                expect(result.length).toBe(2);
            });
        });
    });
});
