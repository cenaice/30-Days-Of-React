const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]


// 1. Print the price of each product using forEach
products.forEach((product) => console.log(product['product'], product.price))

// 2. Print the product items as follows using forEach
products.forEach((product) => console.log("The price of " , product['product'], " is ", product.price))