import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';

// import './cart-dropdown.styles.scss';
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer} from './cart-dropdown.styles';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer >
            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                )
                :
                <EmptyMessageContainer >Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CustomButtonContainer onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButtonContainer>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));