/**
 * @jest-environment jsdom
 */

import Text from './App.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Alert', () => {
  test('Should return true', () => {
    const { component } = render(Text, {
      props: {
        originalValue: '2',
        valueToBind: 'foo',
        changed: false,
      },
    });
    expect(component.changeValue()).toBe(true);
  });
});
