/**
 * Sample test for the DOMHelper class
 */

import DOMHelper from './DOMHelper.js';

test('Turns input into all uppercase letters', () => {
  var input = 'test';
  var result = DOMHelper.funOperation(input);

  expect(result).toBe('TEST');
});