// import useDispatch hook
import { useCart } from '../../utils/useCart';

export const ProductItem = (props: any) => {
    const { title, price, description } = props;

    const { addItemHandler } = useCart(props);


    return (
        <li className='flex flex-row rounded-md bg-slate-100 w-max font-indieflower'>
            <div className='py-4 px-4'>
                <header>
                    <h3 className='text-3xl'>{title}</h3>
                    <div>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
            </div>
            <button className='bg-pink-200 rounded-md w-max p-2 self-stretch' onClick={addItemHandler}>Add to Cart</button>
        </li>
    );
};