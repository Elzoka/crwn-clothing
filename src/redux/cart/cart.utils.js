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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const updatedCartItems = [];

    for(let i = 0; i < cartItems.length; i++){
        const cartItem = cartItems[i];

        if(cartItem.id === cartItemToRemove.id){
            if(cartItem.quantity > 1){
                updatedCartItems.push({
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                })
            }else {
                continue;
            }
        }else {
            updatedCartItems.push(cartItem);
        }
    }
    
    return updatedCartItems;
    // cartItems.map(cartItem => {
    //     if(cartItem.id === cartItemToRemove.id){
    //         if(cartItem.quantity > 1){
    //             return {
    //                 ...cartItem,
    //                 quantity: cartItem.quantity - 1
    //             }
    //         }else {

    //         }
    //     }else {
    //         return cartItem;
    //     }
    // })
}