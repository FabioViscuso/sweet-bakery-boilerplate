// Hooks import
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

// Functions import
import { retrieveCartData, sendCartData } from "../store/actions/cartActions";

// Components import
import { Products } from "../components/shop/Products"

// Types import
import { RootState } from "../store/Store";

// initialize a flag that signals the first render
let isFirstRender = true

export const Shop = () => {
    const dispatch = useDispatch<any>()
    const cart = useSelector((state: RootState) => state.cartSlice.items)

    useEffect(() => {
        dispatch(retrieveCartData())
    }, [dispatch])

    useEffect(() => {
        // this code prevents overriding the remote DB with empty data on startup
        if (isFirstRender === true) {
            isFirstRender = false
            return;
        }
        dispatch(sendCartData(cart))
    }, [cart, dispatch])

    return (
        <div className="flex flex-col justify-start items-center overflow-x-hidden overflow-y-auto py-4 pt-8">
            <Products />
        </div>
    )
}
