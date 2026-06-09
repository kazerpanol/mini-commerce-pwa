export const saveProduct = (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 1000);
  });
};
