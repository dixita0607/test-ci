import greeter from '../src/greeter';

test('greeter should return Hello World! by default', () => {
  expect(greeter()).toBe('Hello World!');
});

test('greeter should return Hello Who! when passed who', () => {
  expect(greeter('Who')).toBe('Hello Who!');
});
