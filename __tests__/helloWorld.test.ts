import { helloWorld } from '../app/helloworld';

test('returns "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});