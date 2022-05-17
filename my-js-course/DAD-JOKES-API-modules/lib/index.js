// NAMED EXPORT - WE CAN HAVE A LOT OF THIS
export async function fetchJoke(loader) {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = response.json();
  // turn the loader off
  loader.classList.add('hidden');
  return data;
}
