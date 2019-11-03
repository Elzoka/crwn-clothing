import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

import {CheckoutItemContainer, ImageContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, RemoveButtonContainer, PriceContainer} from './checkout-item.styles';
// import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer className="arrow" onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}



const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);