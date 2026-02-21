const cart = {
  item1: {
    name: "Wireless Mouse",
    qty: 2,
    price: "799",
  },
  item2: {
    name: "Notebook",
    qty: 0,
    price: "120",
  },
  item3: {
    name: "Water Bottle",
    qty: 1,
    price: "350",
  },
  item4: {
    name: "USB-C Cable",
    qty: 3,
    price: "249",
  },
  item5: {
    name: "Desk Lamp",
    qty: 1,
    price: "1499",
  },
  item6: {
    name: "Bluetooth Speaker",
    qty: 0,
    price: "2199",
  },
  item7: {
    name: "Keyboard Pad",
    qty: 2,
    price: "499",
  },
  total: 0,
};

// 🧩 2. Shopping Cart Calculator
/*
Create a function to prepare checkout data.
------------------------------------------
Remove items with quantity ≤ 0.
Convert price strings into Indian number system.
Calculate subtotal per item.
Add overall cart total.
Apply 10% discount if total exceeds a 3000.
Apply 15% discount if total exceeds a 5000.
Return a new structured object.
*/

async function removeZero(cart) {
  for (let item in cart) {
    if (cart[item].qty === 0) {
      delete cart[item];
    }
  }
  return cart;
}
async function IndianPrice(cart) {
  for (let item in cart) {
    cart[item].price = Number(cart[item].price);
  }
  return cart;
}
async function subtotal(cart) {
  for (let item in cart) {
    cart[item].subtotal = cart[item].price * cart[item].qty;
  }
  return cart;
}
async function total(cart) {
  cart.total = 0;
  for (let item in cart) {
    if (item === "total") continue;
    cart.total += cart[item].subtotal;
  }
  return cart.total;
}
async function applyDiscount(total) {
  if (total > 5000) return total * 0.15;
  if (total > 3000) return total * 0.1;
  return total;
}
async function checkout(cart) {
  let v = await removeZero(cart);
  let v1 = await IndianPrice(v);
  let v2 = await subtotal(v1);
  let v3 = await total(v2);
  await applyDiscount(v3);
  return cart;
}
