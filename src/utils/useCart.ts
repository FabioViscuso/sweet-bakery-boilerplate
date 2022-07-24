/*
    This file exports functions and data regarding the cart slice
*/

import { useDispatch } from 'react-redux';
import { CartItemWithStats, cartSliceActions } from '../store/slices/cartSlice';

export const useCart = (item: CartItemWithStats) => {
    const { id, title, imgUrl, quantity, description, totalAmount, price } = item;
    const dispatch = useDispatch()

    const removeItemHandler = () => {
        dispatch(cartSliceActions.removeFromCart(id))
    }

    const addItemHandler = () => {
        dispatch(cartSliceActions.addToCart({ id, title, imgUrl, price, description }))
    }

    return {
        id,
        title,
        imgUrl,
        quantity,
        description,
        totalAmount,
        price,
        removeItemHandler,
        addItemHandler
    }
}
