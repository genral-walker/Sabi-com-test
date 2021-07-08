
export const addItemToCart = (products, productID) => {
    let newCartItem;
    products.forEach(product => product.id === productID && (newCartItem = product));
    return newCartItem;
};