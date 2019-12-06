// const name = 'Andrew';

// const age = 27;

// const user = {
//     name,
//     age,
//     location: 'Philadelphia'
// };

// console.log(user);

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const { label, price: productPrice, stock, salePrice, rating, fake = 5 } = product;

// console.log(label);
// console.log(rating);
// console.log(productPrice);
// console.log(fake);

const transaction = (type, { label, stock = 0 } = {}) => {
  // const { label } = myProduct;
  console.log(type);
  console.log(label);
  console.log(stock);
};

transaction("order", product);
// transaction("order");
