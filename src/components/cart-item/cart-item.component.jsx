import React from 'react';

import {CartItemContainer, ItemDetailsContainer, DetailContainer} from './cart-item.styles';
// import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt={name}/>
        <ItemDetailsContainer>
            <DetailContainer>{name}</DetailContainer>
            <DetailContainer className="price"> {quantity} x ${price}</DetailContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;