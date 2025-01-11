import { renderHook } from '@testing-library/react';
import { useMyHook } from '../hooks/useMyHook';

describe('useMyHook', () => {
  it('should handle async operations', async () => {
    // Create a test promise
    const testPromise = Promise.resolve({ data: 'test data' });
    
    const { result } = renderHook(() => useMyHook(testPromise));

    // Wait for the promise to resolve
    await expect(testPromise).resolves.toEqual({ data: 'test data' });
    
    // Check if the hook returns the resolved value
    expect(result.current).toEqual({ data: 'test data' });
  });

  it('should handle rejection', async () => {
    // Create a failing promise
    const errorPromise = Promise.reject(new Error('Test error'));
    
    expect(() => {
      renderHook(() => useMyHook(errorPromise));
    }).rejects.toThrow('Test error');
  });
});
