import { useDispatch } from 'react-redux';
import { CartItemWithStats, cartSliceActions } from '../store/cartSlice';

export const useCart = (item: CartItemWithStats) => {
    const { id, title, quantity, description, totalAmount, price } = item;
    const dispatch = useDispatch()

    const removeItemHandler = () => {
        dispatch(cartSliceActions.removeFromCart(id))
    }

    const addItemHandler = () => {
        dispatch(cartSliceActions.addToCart({ id, title, price, description }))
    }

    return {
        id,
        title,
        quantity,
        description,
        totalAmount,
        price,
        removeItemHandler,
        addItemHandler
    }
}