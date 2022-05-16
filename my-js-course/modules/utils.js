export const last = 'bos';
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'cricadev';
// NAMED exports - we can have as many as we want
export { middle };
export default first;
