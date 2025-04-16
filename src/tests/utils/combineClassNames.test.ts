import { describe, it, expect } from 'vitest';
import { combineClassNames } from '@/utils';

describe('combineClassNames', () => {
  it('should return base class when no extra is provided', () => {
    const result = combineClassNames({ base: 'btn' });
    expect(result).toBe('btn');
  });

  it('should combine base and extra string', () => {
    const result = combineClassNames({ base: 'btn', extra: 'primary' });
    expect(result).toBe('btn primary');
  });

  it('should combine base and extra array', () => {
    const result = combineClassNames({
      base: 'btn',
      extra: ['primary', 'large'],
    });
    expect(result).toBe('btn primary large');
  });

  it('should trim extra spaces', () => {
    const result = combineClassNames({ base: 'btn', extra: '' });
    expect(result).toBe('btn');
  });

  it('should handle undefined extra properly', () => {
    const result = combineClassNames({ base: 'btn', extra: undefined });
    expect(result).toBe('btn');
  });

  it('should handle empty array as extra', () => {
    const result = combineClassNames({ base: 'btn', extra: [] });
    expect(result).toBe('btn');
  });
});
