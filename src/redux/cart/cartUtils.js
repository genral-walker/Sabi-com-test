
export const addItemToCart = (products, cartLists, productID) => {

    const itemAlreadyInCart = cartLists.find(cart => cart.id === productID);

    if (itemAlreadyInCart) {

        const updatedArray = cartLists.map(cart => {
            if (cart.id === itemAlreadyInCart.id) {
                cart.quantityPurchased !== cart.stock ?
                    ++cart.quantityPurchased :
                    cart.stockExceeded = true;

                cart.realPrice = cart.price * cart.quantityPurchased;
                return cart;
            } else {
                return cart
            }
        });

        return updatedArray;

    } else {
        let newCartItem;
        products.forEach(product => product.id === productID && (newCartItem = product));
        newCartItem.quantityPurchased = 1;
        return [...cartLists, newCartItem];
    }
};



export const IncrementQuantity = (cartLists, productID) => {

    const incrementedCartList = cartLists.map(cart => {

        if (cart.id === productID) {
            cart.quantityPurchased !== cart.stock ?
                ++cart.quantityPurchased :
                cart.stockExceeded = true;

            cart.realPrice = cart.price * cart.quantityPurchased;
            return cart;
        } else {
            return cart
        }

    });

    return incrementedCartList;
};


export const decrementQuantity = (cartLists, productID) => {

    const decrementedCartList = cartLists.map(cart => {
        if (cart.id === productID && cart.quantityPurchased > 0) {
            --cart.quantityPurchased;
            cart.stockExceeded = false;

            cart.realPrice = cart.price * cart.quantityPurchased;
            return cart;
        } else {
            return cart
        }

    });

    return decrementedCartList.filter(cart => cart.quantityPurchased > 0);
}


export const deleteCart = (cartLists, productID) => cartLists.filter(cart => cart.id !== productID);


export const calculateOverallQuantity = (cartLists) => {
    return cartLists.reduce((acummulator, { quantityPurchased }) => acummulator + quantityPurchased, 0)
};