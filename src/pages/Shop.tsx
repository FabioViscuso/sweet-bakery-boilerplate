import { useSelector } from "react-redux"
import { Cart } from "../components/shop/Cart"
import { Products } from "../components/shop/Products"

export const Shop = () => {
    const showCart = useSelector((state: any) => state.toggleCart.cartIsVisible)
    return (
        <div className="flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto py-4">
            {showCart && <Cart />}
            <Products />
        </div>
    )
}