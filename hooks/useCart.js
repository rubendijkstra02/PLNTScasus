import cartStorage from "../utils/Cart/cartStorage";
import {useCallback, useMemo, useState} from "react";

const useCart = () => {
    const [
        cart,
        setCart
    ] = useState(cartStorage.loadOrDefault())

    const add = useCallback(
        (product) => {
            const item = cart[product.code]

            const newCart = {
                ...cart,
                [product.code]: {
                    quantity: item ? item.quantity + 1 : 1,
                    product
                }
            }

            cartStorage.save(newCart)
            setCart(newCart)
        },
        [cart]
    )

    const decrement = useCallback(
        (code) => {
            const item = cart[code]

            const newCart = {
                ...cart,
                [code]: {
                    quantity: item.quantity -1,
                    product: item.product
                }
            }

            if (newCart[code].quantity === 0) {
                delete newCart[code]
            }

            cartStorage.save(newCart)
            setCart(newCart)
        },
        [cart]
    )

        const remove = useCallback((code) => {
        let newCart = {...cart}

        delete newCart[code]

        cartStorage.save(newCart)
        setCart(newCart)
    }, [cart])

    const items = useMemo(
        () => Object.values(cart),
        [cart]
    )

    const count = useMemo(
        () => items.reduce((prev, current) => prev + current.quantity, 0),
        [items]
    )

    return {
        add,
        decrement,
        remove,
        items,
        count
    }
}

export default useCart