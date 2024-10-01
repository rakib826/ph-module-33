const user = {id: 1, name: 'John', job: 'Developer'};
console.log(user);
// Output: {id: 1, name: 'John', job: 'Developer'}

const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
  owner: 'John',
  address: {
    street:'13th Street Main',
    city: 'New York',
    country: 'USA'
  },
  products: ['TV', 'Fridge', 'Washing Machine'],
  revenue: 1000000,
  isOpen: true,
  isClosed: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);