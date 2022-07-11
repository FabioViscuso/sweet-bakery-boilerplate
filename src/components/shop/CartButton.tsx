import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { toggleCartSliceActions } from '../../store/toggleCartSlice';

export const CartButton = () => {
    const totalItems = useSelector((state: RootState) => state.cartSlice.totalQuantity)
    const dispatch = useDispatch()
    const toggleCartHandler = () => {
        dispatch(toggleCartSliceActions.toggle())
    }

    return (
        <button className='flex flex-row gap-4 items-center font-indieflower text-2xl' onClick={toggleCartHandler}>
            <span className=''>My Cart</span>
            <span className='bg-pink-100 text-gray-900 w-10 h-10 rounded-full leading-10'>{totalItems}</span>
        </button>
    );
};
