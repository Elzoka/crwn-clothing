export const addItemToCart = (cartItems, cartItemToAdd) => {
    let addedNewItem = false;

    const updatedCartItems = cartItems.map(cartItem => {
        if(cartItem.id === cartItemToAdd.id){
            addedNewItem = true;
            return {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
        }else {
            return cartItem;
        }
    })

    if(!addedNewItem){
        updatedCartItems.push({...cartItemToAdd, quantity: 1});
    }

    return updatedCartItems;

}