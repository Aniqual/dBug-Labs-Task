export const formatTemperature = (temp, units) => {
    return `${Math.round(temp)}°${units === 'metric' ? 'C' : 'F'}`;
  };