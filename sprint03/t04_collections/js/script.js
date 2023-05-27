// guestList
const guestList = new Set();
guestList.add('John');
guestList.add('Alice');
guestList.add('Emily');
guestList.add('Michael');
guestList.add('Sophia');

console.log(guestList.has('Alice')); // true
console.log(guestList.has('Uliana')); // false

guestList.delete('Emily');
console.log(guestList);

// menu
const menu = new Map();
menu.set('Pasta', 12.99);
menu.set('Pizza', 9.99);
menu.set('Salad', 7.99);
menu.set('Burger', 8.99);
menu.set('Steak', 19.99);

console.log(menu.get('Pasta')); // 12.99
console.log(menu.has('Salad')); // true

menu.delete('Burger');
console.log(menu);

// bankVault
const bankVault = new WeakMap();
const box1 = {};
const box2 = {};
const box3 = {};

bankVault.set(box1, 'Contents of Box 1');
bankVault.set(box2, 'Contents of Box 2');
bankVault.set(box3, 'Contents of Box 3');

console.log(bankVault.get(box1)); // Contents of Box 1
console.log(bankVault.has(box2)); // true

// coinCollection
const coinCollection = new WeakSet();
const coin1 = { denomination: 'Quarter' };
const coin2 = { denomination: 'Dime' };
const coin3 = { denomination: 'Penny' };
const coin4 = { denomination: 'Nickel' };
const coin5 = { denomination: 'Half Dollar' };

coinCollection.add(coin1);
coinCollection.add(coin2);
coinCollection.add(coin3);
coinCollection.add(coin4);
coinCollection.add(coin5);

console.log(coinCollection.has(coin3)); // true
console.log(coinCollection.has({ denomination: 'Dime' })); // false
