// Import components
import { CartItemComponent } from "./CartItem"

// Import useSelectorHook
import { useSelector } from 'react-redux';

// Import RootState and CartItemWithStats types
import { RootState } from "../../store/Store";
import { CartItemWithStats } from "../../store/slices/cartSlice";

export const Cart = () => {

    const items = useSelector((state: RootState) => state.cartSlice.items)
    console.log(items)

    return (
        <div className="absolute -right-2 top-16 flex flex-col justify-between items-center md:w-max gap-5 py-5 px-2 rounded-md bg-[#e2c3c8] border-stone-600 border-2">
            <h2 className="text-4xl font-caveat">Your Shopping Cart</h2>
            <ul className="flex flex-col gap-5 w-full  max-h-96 overflow-auto">
                {
                    items.map((item: CartItemWithStats, index: number) =>
                        <CartItemComponent
                            key={index}
                            id={item.id}
                            title={item.title}
                            imgUrl={item.imgUrl}
                            description={item.description}
                            quantity={item.quantity}
                            totalAmount={item.totalAmount}
                            price={item.price}
                        />
                    )
                }
            </ul>
            <button className='bg-pink-200 rounded-md w-full p-2 self-stretch'>Proceed to checkout</button>

        </div>
    )
}
