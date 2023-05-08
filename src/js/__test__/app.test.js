import phoneNumberCorrection from '../app';

test('testing correction from "8 (xxx) xxx-xx-xx" to "+7xxxxxxxxxx"', () => {
  const received = phoneNumberCorrection('8 (927) 000-00-00');
  const expected = '+79270000000';

  expect(received).toBe(expected);
});

test('testing correction from "+7 xxx xxx xx xx" to "+7xxxxxxxxxx"', () => {
  const received = phoneNumberCorrection('+7 960 000 00 00');
  const expected = '+79600000000';

  expect(received).toBe(expected);
});

test('testing correction from "+8x xxx xxx xxxx" to "+8xxxxxxxxxxx"', () => {
  const received = phoneNumberCorrection('+86 000 000 0000');
  const expected = '+860000000000';

  expect(received).toBe(expected);
});
