const arrayCities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'New York',
  'Phoenix',
  'Philadelphia',
  'New York',
  'Los Angeles',
  'Houston',
  'New York',
  'Chicago',
  'Los Angeles',
  'New York',
  'Philadelphia',
  'Houston',
  'Chicago',
  'Houston',
  'New York',
];

function mostCommonCities(numCities) {
  const cities = {};
  arrayCities.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });
  return Object.keys(cities)
    .map((city) => ({
      name: city,
      times: cities[city],
    }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map((city) => city.name);
}
mostCommonCities(5);
