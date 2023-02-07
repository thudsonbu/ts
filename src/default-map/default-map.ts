export function DefaultMap<KeyType, ValType>(defaultValue: ValType) {
  const map: Map<KeyType, ValType> = new Map();

  map.get = (key: KeyType) => {
    if (map.has(key)) {
      return Map.prototype.get.apply(map, [key]);
    }

    return defaultValue;
  };

  return map;
}
