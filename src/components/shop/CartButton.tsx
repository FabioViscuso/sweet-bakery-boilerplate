import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { uiSliceActions } from '../../store/slices/uiSlice';

export const CartButton = () => {
    const totalItems = useSelector((state: RootState) => state.cartSlice.totalQuantity)
    const dispatch = useDispatch()
    const toggleCartHandler = () => {
        dispatch(uiSliceActions.toggleCart())
    }

    return (
        <button className='flex flex-row gap-4 items-center font-indieflower text-2xl' onClick={toggleCartHandler}>
            <span className=''>My Cart</span>
            <span className='bg-pink-100 text-gray-900 w-10 h-10 rounded-full leading-10'>{totalItems}</span>
        </button>
    );
};
