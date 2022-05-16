export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    console.log('ahh we used that one last time, look again');
    console.log(not);
    return randomItemFromArray(arr, not);
  }
  return item;
}
