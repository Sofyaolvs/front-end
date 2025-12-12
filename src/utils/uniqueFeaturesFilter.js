export const uniqueFeatures = (features) => {
    const uniqueItemsMap = new Map();

    features.forEach((item) => {
      const id = item.properties.id || item.properties.fid;

      // Apenas adiciona o primeiro elemento encontrado para cada ID
      if (!uniqueItemsMap.has(id)) {
        uniqueItemsMap.set(id, item);
      }
    });

    // Retorna os valores únicos em um array
    return Array.from(uniqueItemsMap.values());
  };
  