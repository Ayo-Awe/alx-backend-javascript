export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const value = weakMap.get(endpoint) || 0;

  if (value >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, value + 1);
  }
}
