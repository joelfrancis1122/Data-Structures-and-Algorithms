let cart = [];

function addtoCart(odi) {
  const exist = cart.find((item) => item.name == odi.name);

  if (exist) {
    exist.qty += exist.qty;
  } else {
    cart.push(odi);
  }

  console.log(cart);
}

let item1 = { id: 1, name: "mobile", price: 20000, qty: 10 };
let item2 = { id: 2, name: "laptop", price: 25000, qty: 20 };

addtoCart(item1);
addtoCart(item1);
addtoCart(item1);
addtoCart(item1);
